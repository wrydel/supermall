<template>
<!-- home的轮播图组件 -->
  <Swiper>
    <SwiperItem v-for="item in banners">
      <a :href= "item.link">
        <img :src="item.image" alt="">
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
import {Swiper, SwiperItem} from '../../../components/common/swiper/index'

export default {
  name:"HomeSwiper", 
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
}
</script>

<style>
 
</style>
