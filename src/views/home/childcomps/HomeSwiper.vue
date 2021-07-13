<template>
<!-- home的轮播图组件 -->
  <Swiper>
    <SwiperItem v-for="item in banners">
      <a :href= "item.link">
        <img :src="item.image" alt="" @load="imageLoad">
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
import {Swiper, SwiperItem} from '../../../components/common/swiper/index'

export default {
  name:"HomeSwiper",
  data() {
    return{
      isLoaded:true,
    }
  }, 
  components: {
    Swiper,
    SwiperItem 
  },

  // 获取home父组件的banners数据
  props: {
    banners:{
      type: Array,
      default () {
        return []
      }
    }
  },

  methods: {
    imageLoad() {
      if(this.isLoaded) {                         //性能优化:防止发送四次图片加载完成事件
        this.$emit('imageLoad');
        console.log('----------');              //测试发送次数
      }
      this.isLoaded =!this.isLoaded;
    }
  }
}
</script>

<style>
 
</style>
