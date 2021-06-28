<template>
  <div id="home">
    <NavBar>
      <div class="home-nav" slot="center">购物街</div> 
    </NavBar>
  <HomeSwiper :banners="banners" />
  <HomeRecommendView :recommends="recommends" />
  <HomeFeature></HomeFeature>
  div{$}*15
  </div>
</template>

<script>
import {getHomeMultidata} from '../../network/home.js'

import NavBar from '../../components/common/navbar/NavBar.vue'
import HomeSwiper from './childcomps/HomeSwiper'
import HomeRecommendView from './childcomps/HomeRecommendView'
import HomeFeature from './childcomps/HomeFeature'


export default {
  components: { 
    NavBar,
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
</style>
