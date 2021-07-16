<template>
  <div class="goods">
    <!-- 遍历List中的数据，每一个数据对象传入一个GoodListItem组件 -->
    <GoodListItem v-for="item in goods" :goodsItem="item" />
  </div>
</template>

<script>
import GoodListItem from './GoodListItem'

export default {
  name:"GoodList", 
  components: {
    GoodListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
  }
</style>
