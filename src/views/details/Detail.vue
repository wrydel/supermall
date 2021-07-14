<template>
  <div>
   <DetailNavbar/>          <!-- 如果代码复杂则需要抽离为模块    -->
   <DetailSwiper :topImages="topImages"/> 
  </div>
</template>

<script>
import DetailNavbar from './childcomps/DetailNavbar'
import DetailSwiper from './childcomps/DetailSwiper'

import {getDetail} from '../../network/detail'

export default {
  name:"Detail", 
  data() {
    return {
      iid:null,
      topImages:[],
    }
  },
  components: {
    DetailNavbar,
    DetailSwiper,
  },
  created() {
    // 1.保存传入的id
    this.iid = this.$route.params.iid;

    // 2.获取数据
    getDetail(this.iid).then(res => {
      this.topImages = res.result.itemInfo.topImages;
    }

    )
  }
}
</script>

<style>
 
</style>
