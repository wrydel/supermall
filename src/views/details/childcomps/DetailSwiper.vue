<template>
<div class="detail-swiper" v-if="topImages.length">
  <Swiper>
    <SwiperItem v-for="item in topImages"> 
      <img :src="item" alt="">
    </SwiperItem>
  </Swiper>
</div>

</template>

<script>
import {Swiper, SwiperItem} from '../../../components/common/swiper'

export default {
  name:"DetailSwiper", 
  props: {
    topImages: {
      type:Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem,
  }
}
</script>

<style>
.detail-swiper {
    height: 300PX;
    overflow: hidden;
  }
</style>
