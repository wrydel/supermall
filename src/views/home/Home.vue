<template>
  <div id="home">
    <NavBar>
      <div class="home-nav" slot="center">购物街</div> 
    </NavBar>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import {getHomeMultidata} from '../../network/home.js'

export default {
  components: { NavBar },
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
