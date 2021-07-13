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
    },
    pullUpLoad: {
      type:Boolean,
      default:false
    }
  },

  methods: {
    scrollTop(x,y,time=500) {
      this.scroll.scrollTo(x, y, time)
    },
    // 刷新scrollHeight属性
    refresh() {
      this.scroll.refresh()
    }
  },

  mounted() {
    // 1.创建BScroll对象
    this.scroll = new Bscroll(this.$refs.wrapper,{
      click: true,
      probeType: this.probeType,
      pullUpLoad:this.pullUpLoad
    })

    // 2.监听滚动的位置(backtop功能)
    this.scroll.on('scroll', position => {
      this.$emit('scroll', position)
    })

    // 3.监听scroll滚动到底部  
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUpLoad')
  
    })

  }
}
</script>

<style scoped>  

</style>
 

