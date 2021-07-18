<template>
  <div class="base-info" v-if="Object.keys(goods).length!==0">     <!-- 检测goods是否为空-->
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>

    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1">     
        <img :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>

export default {
  name:"DetailBaseInfo", 
  props: {
    goods:{
      type:Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style>
  .base-info {
    margin-top:10px;
    padding: 0px 8px;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-title {
    color: #222;
  }
  .info-price {
    margin:10px 0;
  }
  .info-price .n-price {
    font-size: 24px;
    color: var(--color-high-text);
  }  
  .info-price .o-price {
    margin: 0 5px;
    font-size: 12px;
    color: #ccc;
    text-decoration: line-through;
  }
  .info-price .discount {
    position:relative;
    top: -8px;
    padding: 2px;
    border-radius:8px ;
    background-color: var(--color-high-text);
    color: white;
    font-size: 12px;
    /* 让元素上浮，用相对定位即可 */

  }
  .info-other {
    display: flex;
    padding: 5px 0;
    font-size: 12px;
    color: #ccc;
    border-bottom: 1px solid rgba(100,100,100,.1);
    justify-content: space-between;
  }
  .info-service {
    display: flex;
    line-height: 50px;
    justify-content: space-between;
  }
  .info-service img {
    width: 13px;
    height: 13px;
  }
  .info-service span {
    font-size: 12px;
    color: #333;
  }
</style>
