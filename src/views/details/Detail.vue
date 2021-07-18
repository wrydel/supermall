<template>
  <div id="detail">
    <DetailNavbar/>          <!-- 如果代码复杂则需要抽离为模块    -->
    <Scroll class="detail-content" ref="scroll">
      <DetailSwiper :topImages="topImages" /> 
      <DetailBaseInfo :goods="goods" />
      <DetailShopInfo :shop="shop"/>
      <DetailGoodsInfo :goodsInfo="goodsInfo" @imgLoad="imgLoad"/>
      <DetailParamInfo :paramInfo="paramInfo" />
    </Scroll>
  </div>
</template>

<script>
import DetailNavbar from './childcomps/DetailNavbar'
import DetailSwiper from './childcomps/DetailSwiper'
import DetailBaseInfo from './childcomps/DetailBaseInfo'
import DetailShopInfo from './childcomps/DetailShopInfo'
import DetailGoodsInfo from './childcomps/DetailGoodsInfo'
import DetailParamInfo from './childcomps/DetailParamInfo'


import Scroll from '../../components/common/scroll/Scroll'

import {getDetail, Goods, Shop, Param} from '../../network/detail'

export default {
  name:"Detail", 
  data() {
    return {
      iid:null,
      topImages:[],
      goods:{},
      shop: {},
      goodsInfo: {},
      paramInfo: {}
    }
  },
  components: {
    DetailNavbar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    Scroll
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

      // 2.3 获取店铺信息
      this.shop =new Shop(detailData.shopInfo)

      // 2.4获取商品详情信息
      this.goodsInfo = detailData.detailInfo
      // 2.5
      this.paramInfo = new Param(detailData.itemParams.info, detailData.itemParams.rule)
    }

    )
  },
  methods: {
    imgLoad() {
      this.$refs.scroll.refresh()
    } 
  }
}
</script>

<style>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .detail-content {
    height:calc(100% - 44px);
    overflow: hidden;
  }
</style>
