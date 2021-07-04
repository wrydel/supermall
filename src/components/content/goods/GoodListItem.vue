<template>
  <div>
    <!-- 将数据对象的数据分别进行展示 -->
    <img :src="goodsItem.show.img" alt="">
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
  }
}
</script>

<style>
 
</style>
