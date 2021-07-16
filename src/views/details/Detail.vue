<template>
  <div>
   <DetailNavbar/>          <!-- 如果代码复杂则需要抽离为模块    -->
   <DetailSwiper :topImages="topImages" /> 
   <DetailBaseInfo :goods="goods" />
  </div>
</template>

<script>
import DetailNavbar from './childcomps/DetailNavbar'
import DetailSwiper from './childcomps/DetailSwiper'
import DetailBaseInfo from './childcomps/DetailBaseInfo'

import {getDetail, Goods} from '../../network/detail'

export default {
  name:"Detail", 
  data() {
    return {
      iid:null,
      topImages:[],
      goods:{},
    }
  },
  components: {
    DetailNavbar,
    DetailSwiper,
    DetailBaseInfo,
  },
  created() {
    // 1.保存传入的id
    this.iid = this.$route.params.iid;

    // 2.根据iid请求详情页数据
    getDetail(this.iid).then(res => {
      console.log(res);
      const detailData = res.result
      // 2.1获取轮播图数据
      this.topImages = detailData.itemInfo.topImages;

      // 2.2获取商品信息
      this.goods = new Goods(detailData.itemInfo, detailData.columns, detailData.shopInfo.services)
    }

    )
  }
}
</script>

<style>
 
</style>
