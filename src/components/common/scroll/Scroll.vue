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
  props: {
    probeType: {
      type:Number,
      default:0
    }
  },

  methods: {
    scrollTop(x,y,time=500) {
      this.scroll.scrollTo(x, y, time)
    }
  },

  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper,{
      probeType: this.probeType
      // pullUpLoad:true
    })

    this.scroll.on('scroll', position => {
      this.$emit('scroll', position)
    })
  }
}
</script>

<style scoped>  

</style>
 

