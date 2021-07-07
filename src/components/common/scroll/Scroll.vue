<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from '@better-scroll/core'

export default {
  name:"Scroll", 
  data() {
    return {
      scroll:null
    }
  },

  mounted() {
    this.scroll = new Bscroll(this.refs.wrapper,{
      pullupload:true
    })
  }
}
</script>

<style scoped>

</style>
 

