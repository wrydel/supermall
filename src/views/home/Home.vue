<template>
  <div id="home">
    <NavBar>
      <div class="home-nav" slot="center">购物街</div> 
    </NavBar>
  <HomeSwiper :banners="banners" />
  <HomeRecommendView :recommends="recommends" />
  
  </div>
</template>

<script>
import {getHomeMultidata} from '../../network/home.js'

import NavBar from '../../components/common/navbar/NavBar.vue'
import HomeSwiper from './childcomps/HomeSwiper'
import HomeRecommendView from './childcomps/HomeRecommendView'


export default {
  components: { 
    NavBar,
    HomeSwiper,
    HomeRecommendView
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

<style>
  #home {
    background-color: pink;
  }
  .home-nav {
    background-color: pink;
    color: #fff;
  }
</style>
