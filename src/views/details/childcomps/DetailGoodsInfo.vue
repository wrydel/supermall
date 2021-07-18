<template>
  <div v-if="Object.keys(goodsInfo).length !== 0" class="goodsInfo">
    <div class="info-desc">{{goodsInfo.desc}}</div>
    <div v-for="(item,index) in goodsInfo.detailImage" :key="index">
      <div class="info-key">{{item.key}}</div>
      <div class="info-list">
        <img v-for="imgItem in item.list" :src="imgItem" alt="" @load="imgLoad">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"DetailGoodsInfo", 
  props: {
    goodsInfo: {
      type:Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return{
      counter:0,
      imagesLength:0
    }
  },
  methods: {
    // 性能优化：图片全部加载完刷新一次scroll
    // 原理：用计数器比较图片的总数量
    imgLoad() {
      this.counter += 1;
      if(this.counter == this.imagesLength) {
        this.$emit('imgLoad');
      }
    }
  },
  watch: {
    // 监听goodsInfo的改变，接收到数据后算出图片总数
    goodsInfo() {
      for(let i=0; i<this.goodsInfo.detailImage.length; i++)
      this.imagesLength += this.goodsInfo.detailImage[i].list
    }
  }
}
</script>

<style>
 .goodsInfo {
   padding: 20px 2px;
   border-bottom: 5px solid #f2f5f8;
 }
.info-desc {
  padding: 0 15px;
}
  .info-list img {
  width: 100%;
}

.info-key {
  margin: 10px 0 10px 15px;
  color: #333;
  font-size: 15px;
}
</style>
