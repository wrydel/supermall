<template>
  <div id="home">
    <NavBar class="navbar">
      <div class="home-nav" slot="center">购物街</div> 
    </NavBar>
    <TabControl class="tab-control"
        @tabclick="homeTabclick"
        :titles="['流行', '新款', '精选']"
        v-show="isTabFixed" 
        ref="tabControl1" />
    <!-- better-scroll框架，此处class="content"，是给组件最外层wrapper加的 -->
    <Scroll class="content" ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUpLoad="loadMore"
    >
      <HomeSwiper :banners="banners" @imageLoad='swiperImageLoad' />
      <HomeRecommendView :recommends="recommends" />
      <HomeFeature></HomeFeature>
      <TabControl
        @tabclick="homeTabclick"
        :titles="['流行', '新款', '精选']"
        ref="tabControl2"
        />
      <GoodList :goods="showGoods"></GoodList>
    </Scroll>
    <BackTop @click.native="backTopClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
//分段书写相同类型的引入组件
import {getHomeMultidata, getHomeGoods} from '../../network/home.js'                          

import NavBar from '../../components/common/navbar/NavBar.vue'
import TabControl from '../../components/content/tabcontrol/TabControl'
import GoodList from '../../components/content/goods/GoodList'
import BackTop from '../../components/content/backtop/BackTop'

import HomeSwiper from './childcomps/HomeSwiper'
import HomeRecommendView from './childcomps/HomeRecommendView'
import HomeFeature from './childcomps/HomeFeature'

import Scroll from '../../components/common/scroll/Scroll'

import {debounce} from '../../common/utils'
import {imgDebounceMixin} from '../../common/mixin'


export default {
  components: { 
    NavBar,
    TabControl,
    GoodList,
    BackTop,
    HomeSwiper,
    HomeRecommendView,
    HomeFeature,
    Scroll,
  },
  name:"Home", 
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page:0, list:[]},
        'new': {page:0, list:[]},
        'sell': {page:0, list:[]}
      },
      currenttype: 'pop',
      isShowBackTop:false,
      tabOffsetTop:0,
      isTabFixed :false,
    }
  },
  mixins:[imgDebounceMixin],
  computed: {
    showGoods() {
      return this.goods[this.currenttype].list
    }
  },
  created() {
    // 将请求结果的处理操作抽到methods中
    this.getHomeMultidata()             

    this.getHomeGoodss('pop')
    this.getHomeGoodss('new')
    this.getHomeGoodss('sell')
  },

  // 解决scrollheight的刷新BUG，每张图片加载完成发射事件，调用refresh方法
  mounted() {
  },

  deactivated() {
    this.$bus.$off('itemImageLoad',this.imgDebounce)
  },

  methods: {
    // 
    // 一、事件监听相关方法
    // 
    homeTabclick(index) {
      switch(index) {
        case 0:
          this.currenttype = 'pop'
          break 
        case 1:
          this.currenttype = 'new'
          break
        case 2:
          this.currenttype = 'sell'
          break
      }
      this.$refs.tabControl1.currentindex = index;            //保持两个tabcon样式相同
      this.$refs.tabControl2.currentindex = index;
    },
    // 1.点击backtop按钮回到顶部
    backTopClick() {
      this.$refs.scroll.scrollTop(0,0)
    },

    // 2.backtop在position-y大于1000时显示，反之隐藏
    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000

      this.isTabFixed = (-position.y) > this.tabOffsetTop       //两个tabControl重合时,让1号显示出来,制造吸顶效果,反之隐藏
    },
    // 3.上拉加载更多
    loadMore() {
      this.getHomeGoodss(this.currenttype) 
    },
    // 4.获取tabcontrol的offsetTop值
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;         //轮播图片至少加载完一张再计算tabcon的offsetTop值,否则因为加载速度问题漏算轮播图组件的高度
    },

    //
    //  二、网络请求的相关方法
    // 
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;                // 箭头函数的this就是生命周期函数的this，生命周期函数里的this就是该组件
        this.recommends = res.data.recommend.list;
      })
    },
    
    getHomeGoodss(type) {
      // 请求下一页数据：当前页+1
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // 将每一页数据放入数组中
        this.goods[type].list.push(...res.data.list);
        // 修改当前type数据的总页数
        this.goods[type].page += 1;

        // 完成上拉加载更多
        this.$refs.scroll.scroll.finishPullUp()
      })
    }
  }
}
</script>

<style scoped>
  #home {
    height: 100vh;
    position: relative;
    /* background-color: pink; */
  }

  .navbar {
    background-color: pink;
    color: #fff;
  }

  .tab-control {
        /* 在better-scroll下已经失效 */
        /* tab-control固定效果，满足条件top44,为flex属性，否则为static属性 */
        /* position: sticky;
        top: 44px; */
    position: relative;
    z-index: 9;                 /* tabcon1处在标准流,因此需要层级提升 */
  }

  .content {
    /* 用定位确定wrapper容器的大小 */
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
    overflow: hidden;
  }
</style>
