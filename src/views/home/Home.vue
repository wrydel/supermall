<template>
  <div id="home">
    <NavBar>
      <div class="home-nav" slot="center">购物街</div> 
    </NavBar>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
export default {
  components: { NavBar },
  name:"Home", 
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
