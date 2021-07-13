<template>
  <div>
    <!-- 将数据对象的数据分别进行展示 -->
    <img :src="goodsItem.show.img" alt="" @load="imageLoad">
    <div>
      <p>{{goodsItem.title}}</p>
      <span>{{goodsItem.price}}</span>
      <span>{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:"GoodListItem", 
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    // 每张图片加载完成发射事件，调用refresh方法
    imageLoad() {
      this.$bus.$emit('itemImageLoad')
    }
  }
}
</script>

<style>
 
</style>
