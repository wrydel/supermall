<template>
  <div id="detail">
    <DetailNavbar @titleClick="titleClick" ref="detailNavbar"/>          <!-- 如果代码复杂则需要抽离为模块    -->
    <Scroll class="detail-content" ref="scroll" :probe-type="3" @scroll="detailScroll">
      <DetailSwiper :topImages="topImages" /> 
      <DetailBaseInfo :goods="goods" />
      <DetailShopInfo :shop="shop"/>
      <DetailGoodsInfo :goodsInfo="goodsInfo" @imgLoad="imgLoad"/>
      <DetailParamInfo :paramInfo="paramInfo"  ref="param"/>
      <DetailCommentInfo :commentInfo="commentInfo" ref="comment" />
      <GoodList :goods="recommends" ref="recommend"/>
    </Scroll>
    <DeatilBottomBar/>
  </div>
</template>

<script>
import DetailNavbar from './childcomps/DetailNavbar'
import DetailSwiper from './childcomps/DetailSwiper'
import DetailBaseInfo from './childcomps/DetailBaseInfo'
import DetailShopInfo from './childcomps/DetailShopInfo'
import DetailGoodsInfo from './childcomps/DetailGoodsInfo'
import DetailParamInfo from './childcomps/DetailParamInfo'
import DetailCommentInfo from './childcomps/DetailCommentInfo'
import DeatilBottomBar from './childcomps/DeatilBottomBar'


import Scroll from '../../components/common/scroll/Scroll'

import GoodList from '../../components/content/goods/GoodList'

import {getDetail,getRecommend, Goods, Shop, Param} from '../../network/detail'

import {imgDebounceMixin} from '../../common/mixin'
import { debounce } from '../../common/utils'

export default {
  name:"Detail", 
  data() {
    return {
      iid:null,
      topImages:[],
      goods:{},
      shop: {},
      goodsInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      titleTopY:[],
      getTitleTopY:null,
      currentIndex:0,

    }
  },
  components: {
    DetailNavbar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DeatilBottomBar,
    GoodList,
    Scroll
  },
  mixins:[imgDebounceMixin],
  created() {
    // 1.保存传入的id
    this.iid = this.$route.params.iid;

    // 2.根据iid请求详情页数据
    getDetail(this.iid).then(res => {
      console.log(res);
      const detailData = res.result
      // 2.1获取轮播图数据
      this.topImages = detailData.itemInfo.topImages;

      // 2.2获取商品信息
      this.goods = new Goods(detailData.itemInfo, detailData.columns, detailData.shopInfo.services)

      // 2.3 获取店铺信息
      this.shop =new Shop(detailData.shopInfo)

      // 2.4获取商品详情信息
      this.goodsInfo = detailData.detailInfo

      // 2.5获取参数信息
      this.paramInfo = new Param(detailData.itemParams.info, detailData.itemParams.rule)

      // 2.6获取评论信息
      if(detailData.rate.cRate !== 0) {
        this.commentInfo = detailData.rate.list[0]
      }
      // 3.请求推荐数据
      getRecommend().then(res => {
        console.log(res);
        this.recommends = res.data.list;
      })
    })
    // 不需要防抖，组件内一共发射一次事件
    // this.getTitleTopY = debounce(() => {
    //   this.titleTopY = []
    //   this.titleTopY.push(0)
    //   this.titleTopY.push(this.$refs.param.$el.offsetTop)
    //   this.titleTopY.push(this.$refs.comment.$el.offsetTop)
    //   this.titleTopY.push(this.$refs.recommend.$el.offsetTop)
    //   }, 200)
    //获取导航栏每个选项卡对应组件的offsetTop值
      this.getTitleTopY = function() {
      this.titleTopY = []
      this.titleTopY.push(0)
      this.titleTopY.push(this.$refs.param.$el.offsetTop-44)
      this.titleTopY.push(this.$refs.comment.$el.offsetTop-44)
      this.titleTopY.push(this.$refs.recommend.$el.offsetTop-44)
      this.titleTopY.push(Number.MAX_VALUE)
      }
  },
  mounted() {
  },

  destroyed() {
    this.$bus.$off('itemImageLoad',this.imgDebounc)
  },


  methods: {
    // 详情图片GoodInfo加载完发出的事件
    imgLoad() {
      //刷新scrollHeight
      this.$refs.scroll.refresh();

      //获取导航栏每个选项卡对应组件的offsetTop值
      this.getTitleTopY();
    },
    
    // 导航栏点击事件,根据获取的offsetTop的值跳转位置
    titleClick(index) {
      this.$refs.scroll.scroll.scrollTo(0, -this.titleTopY[index], 400)
    },

    // 根据页面滚动的位置，改变导航栏的样式
    detailScroll(position) {
      
      for(let i=0; i<this.titleTopY.length-1 ;i++ ) {

        if(i !== this.currentIndex && (-position.y > this.titleTopY[i] && -position.y <= this.titleTopY[i+1])) {
          this.currentIndex = i;
          this.$refs.detailNavbar.currentIndex = this.currentIndex;
          console.log(position.y);
        }
        // 普通方法
       /* if((this.currentIndex !== i) && (
          (i < length - 1 &&　positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])
            || (i === length - 1 && positionY >= this.themeTopYs[i]))) {
          this.currentIndex = i;
          console.log(i);
          // this.$refs.navbar.currentIndex = this.currentIndex
        }*/
      }

    }
  }
}
</script>

<style>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .detail-content {
    height:calc(100% - 44px - 49px);
    overflow: hidden;
  }
</style>
