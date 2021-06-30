<template>
  <div id="home">
    <NavBar>
      <div class="home-nav" slot="center">购物街</div> 
    </NavBar>
  <HomeSwiper :banners="banners" />
  <HomeRecommendView :recommends="recommends" />
  <HomeFeature></HomeFeature>
  <TabControl class="tab-control" :titles="['流行', '新款', '精选']"></TabControl>
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div><div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div><div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div><div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div><div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div><div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div><div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div><div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div><div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div><div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div><div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div><div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div><div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div><div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>
  </div>
</template>

<script>
//分段书写相同类型的引入组件
 import {getHomeMultidata} from '../../network/home.js'                          

import NavBar from '../../components/common/navbar/NavBar.vue'
import TabControl from '../../components/content/tabcontrol/TabControl'

import HomeSwiper from './childcomps/HomeSwiper'
import HomeRecommendView from './childcomps/HomeRecommendView'
import HomeFeature from './childcomps/HomeFeature'


export default {
  components: { 
    NavBar,
    TabControl,
    HomeSwiper,
    HomeRecommendView,
    HomeFeature

  },
  name:"Home", 
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;                // 箭头函数的this就是生命周期函数的this，生命周期函数里的this就是该组件
      this.recommends = res.data.recommend.list;
    })
  }
}
</script>

<style scoped>
  #home {
    background-color: pink;
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
</style>
