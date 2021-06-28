<template>
  <div  class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
    
  </div>
</template>

<script>
export default {
  name:"HomeRecommendView", 
  props: {
    recommends: {
      type:Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
  .recommend {
    padding-top:15px; ;
    display: flex;
    border-bottom: 15px solid #eee;
    /* width: 100%; */
    text-align: center;
    background-color: #fff;
    font-size: 12px;
  }
  .recommend-item {
    background-color: #fff;
    flex: 1;
  }
  .recommend img {
    width: 65px;
    height: 65px;
  }
</style>
