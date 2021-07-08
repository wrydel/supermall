<template>
  <div id="home">
    <NavBar>
      <div class="home-nav" slot="center">购物街</div> 
    </NavBar>
    <!-- better-scroll框架，此处class="content"，是给组件最外层wrapper加的 -->
    <Scroll class="content" ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
    >
      <HomeSwiper :banners="banners" />
      <HomeRecommendView :recommends="recommends" />
      <HomeFeature></HomeFeature>
      <TabControl class="tab-control"
        @tabclick="home-tabclick"
        :titles="['流行', '新款', '精选']"/>
      <GoodList :goods="showGoods"></GoodList>
      <ul>
        <li>我是信息1</li>
        <li>我是信息2</li>
        <li>我是信息3</li>
        <li>我是信息4</li>
        <li>我是信息5</li>
        <li>我是信息6</li>
        <li>我是信息7</li>
        <li>我是信息8</li>
        <li>我是信息9</li>
        <li>我是信息10</li>
        <li>我是信息11</li>
        <li>我是信息12</li>
        <li>我是信息13</li>
        <li>我是信息14</li>
        <li>我是信息15</li>
        <li>我是信息16</li>
        <li>我是信息17</li>
        <li>我是信息18</li>
        <li>我是信息19</li>
        <li>我是信息20</li>
        <li>我是信息21</li>
        <li>我是信息22</li>
        <li>我是信息23</li>
        <li>我是信息24</li>
        <li>我是信息25</li>
        <li>我是信息26</li>
        <li>我是信息27</li>
        <li>我是信息28</li>
        <li>我是信息29</li>
        <li>我是信息30</li>
        <li>我是信息31</li>
        <li>我是信息32</li>
        <li>我是信息33</li>
        <li>我是信息34</li>
        <li>我是信息35</li>
        <li>我是信息36</li>
        <li>我是信息37</li>
        <li>我是信息38</li>
        <li>我是信息39</li>
        <li>我是信息40</li>
        <li>我是信息41</li>
        <li>我是信息42</li>
        <li>我是信息43</li>
        <li>我是信息44</li>
        <li>我是信息45</li>
        <li>我是信息46</li>
        <li>我是信息47</li>
        <li>我是信息48</li>
        <li>我是信息49</li>
        <li>我是信息50</li>
        <li>我是信息51</li>
        <li>我是信息52</li>
        <li>我是信息53</li>
        <li>我是信息54</li>
        <li>我是信息55</li>
        <li>我是信息56</li>
        <li>我是信息57</li>
        <li>我是信息58</li>
        <li>我是信息59</li>
        <li>我是信息60</li>
        <li>我是信息61</li>
        <li>我是信息62</li>
        <li>我是信息63</li>
        <li>我是信息64</li>
        <li>我是信息65</li>
        <li>我是信息66</li>
        <li>我是信息67</li>
        <li>我是信息68</li>
        <li>我是信息69</li>
        <li>我是信息70</li>
        <li>我是信息71</li>
        <li>我是信息72</li>
        <li>我是信息73</li>
        <li>我是信息74</li>
        <li>我是信息75</li>
        <li>我是信息76</li>
        <li>我是信息77</li>
        <li>我是信息78</li>
        <li>我是信息79</li>
        <li>我是信息80</li>
        <li>我是信息81</li>
        <li>我是信息82</li>
        <li>我是信息83</li>
        <li>我是信息84</li>
        <li>我是信息85</li>
        <li>我是信息86</li>
        <li>我是信息87</li>
        <li>我是信息88</li>
        <li>我是信息89</li>
        <li>我是信息90</li>
        <li>我是信息91</li>
        <li>我是信息92</li>
        <li>我是信息93</li>
        <li>我是信息94</li>
        <li>我是信息95</li>
        <li>我是信息96</li>
        <li>我是信息97</li>
        <li>我是信息98</li>
        <li>我是信息99</li>
        <li>我是信息100</li>
      </ul>
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
    }
  },
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

  methods: {
    // 
    // 事件监听相关方法
    // 
    homeTabclick(index) {
      switch(index) {
        case 0:
          this.currentindex = 'pop'
          break
        case 1:
          this.currentindex = 'new'
          break
        case 2:
          this.currentindex = 'sell'
          break
      }
    },
    // 点击backtop按钮回到顶部
    backTopClick() {
      this.$refs.scroll.scrollTop(0,0)
    },

    // 在position-y大于1000时显示backtop按钮，反之隐藏
    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000
    },
    //
    //  网络请求的相关方法
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

  .home-nav {
    z-index: 9;
    position: fixed;
    left: 0;
    right: 0;
    top:0;
    background-color: pink;
    color: #fff;
  }

  .tab-control {
    /* tab-control固定效果，满足条件top44,为flex属性，否则为static属性 */
    position: sticky;
    top: 44px;
  }

  .content {
    /* 用定位确定wrapper容器的大小 */
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
  }
</style>
