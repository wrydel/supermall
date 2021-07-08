<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'

export default {
  name:"Scroll", 
  data() {
    return {
      scroll:null
    }
  },

  methods: {
    scrollTop(x,y,time=500) {
      this.scroll.scrollTo(x, y, time)
    }
  },

  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper,{
      // pullUpLoad:true
    })
  }
}
</script>

<style scoped>  

</style>
 

