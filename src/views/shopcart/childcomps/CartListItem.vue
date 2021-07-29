<template>
  <div class="cart-list-item">
    <CartCheckButton 
    @click.native="checkClick"
    :ischecked="listInfo.checked"
    />
    <div class="list-item-img" @click="checkClick">
      <img :src="listInfo.image" alt="" @load="listLoad"/>
    </div>
    <div class="list-item-info">
      <p class="info_title">{{ listInfo.title }}</p>
      <p class="info_desc">{{ listInfo.desc }}</p>
      <span class="info_price">￥{{ listInfo.price }}</span>
      <span class="info_count">x{{ listInfo.count }}</span>
    </div>
  </div>
</template>

<script>
import CartCheckButton from './CartCheckButton'

export default {
  name:"CartListItem", 
  data() {
    return {}
  },
  components: {
    CartCheckButton
  },

  props: {
    listInfo: {
      type:Object,
      default() {
        return{}
      }
    }
  },
  methods:{
    checkClick() {
      this.listInfo.checked = !this.listInfo.checked;
    },
    listLoad() {
      this.$emit('listLoadOver')
    }
  },
  
}
</script>

<style scoped>
  .cart-list-item {
    width: 100%;
    height: 130px;
    display: flex;
    padding: 10px;
    border-bottom: 2px solid rgba(128, 128, 128, 0.4);
  }

  .list-item-img img {
    height: 100%;
    width: 80px;
    border-radius: 8px;
  }
  .list-item-info {
    position: relative;
    margin-left: 8px;
    width: calc(100% - 80px - 33px - 20px);
  }
  .list-item-info p {
    display: inline-block;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .info_title {
    padding-bottom: 10px;
  }
  .info_desc {
    font-size: 14px;
    color: gray;
  }
  .info_price {
  position: absolute;
  left: 0;
  bottom: 5px;
  font-size: 16px;
  color: orangered;
}
  .info_count {
    position: absolute;
    right: 10px;
    bottom: 5px;
    font-size: 14px;
  }
</style>
