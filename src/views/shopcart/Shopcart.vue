<template>
  <div class="shop-cart">
    <!-- 一、导航 -->
    <NavBar class="cartNavbar"><div slot="center">购物车({{cartLength}})</div></NavBar>
  
    <!-- 二、商品列表 -->
    <CartList/>
    <!-- 三、底部汇总 -->
    <CartBottomBar/>
  </div>

</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import CartList from './childcomps/CartList'
import CartBottomBar from './childcomps/CartBottomBar'

import {mapGetters} from 'vuex'

export default {
  name:"Shopcart", 
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed:{
    ...mapGetters(['cartLength'])
  }
}
</script>

<style>
.shop-cart {
  height: 100vh;
}
 .cartNavbar {
   background-color: pink;
   color: #fff;
   font-size: 18px;
   font-weight: 600;
 }
</style>
