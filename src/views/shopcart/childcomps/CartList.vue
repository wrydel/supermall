<template>
  <div class="cart-list">
    <Scroll class="cart-content" ref="cartScroll">
      <CartListItem 
      v-for="(item, index) in cartListInfo" 
      :key="index"
      :listInfo = "item"
      @listLoad="listLoadOver"
       />
    </Scroll>
  </div>
</template>

<script>
import Scroll from '../../../components/common/scroll/Scroll'

import CartListItem from './CartListItem'

import {mapGetters} from 'vuex'

export default {
  name:"CartList", 
  components:{
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters(['cartListInfo'])
  },
  methods: {
    listLoadOver() {
      const listCount = 0;
      listCount++;
      if(listCount === this.$store.state.cartList.length) {
        this.$refs.cartScroll.refresh();
      }
    }
  }
}
</script>

<style scoped>
.cart-list {
  height: calc(100vh - 44px - 49px - 40px);
}
.cart-content {
  height: 100%;
  overflow: hidden;
}
</style>
