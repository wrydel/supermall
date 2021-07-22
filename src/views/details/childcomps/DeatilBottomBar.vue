<template>
  <div id="detail-bottom-bar">
    <div class="bottom-bar-left">
      <div class="serivce">
        <div class="icon"></div>
        <div>客服</div>
      </div>
      <div class="shop">
        <div class="icon"></div>
        <div>店铺</div>
      </div>
      <div class="collect">
        <div class="icon"></div>
        <div>收藏</div>
      </div>
    </div>
    <div class="bottom-bar-right">
      <div class="cart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name:"DeatilBottomBar", 
}
</script>

<style>
 #detail-bottom-bar {
   display: flex;
   height: 49px;
   text-align: center;
 }
 .bottom-bar-left {
   display: flex;
   flex: 1;
 }
 .bottom-bar-left > div {
   flex: 1;
   font-size: 14px;
 }
 .bottom-bar-left .icon {
   background: url("../../../assets/img/detail/detail_bottom.png") no-repeat;
   background-size: 36%;
   background-position:center -48px;
   width: 62.5px;
   height:29px;
 }
 .shop .icon {
   background-position-y:-94px;
 } 
 .collect .icon {
   background-position-y:8px;
 }


  .bottom-bar-right {
    display: flex;
    flex: 1;
    line-height: 49px;
  }
  .bottom-bar-right > div {
    flex: 1;
  }
  .cart {
    background-color: rgb(255, 174, 0);
  }
  .buy {
  background-color: var(--color-tint);
  color: white;
}
</style>
