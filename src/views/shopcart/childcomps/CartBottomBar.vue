<template>
  <div class="bottom-bar">
    <div class="check-content">
      <CartCheckButton class="check-button" 
      :ischecked="isSelectAll"
      @click.native="checkClick2"/>
      <span>全选</span>
    </div>
    <div class="footing">
      合计: ￥{{totalPrice}}
    </div>
    <div class="calculate" @click="calc">去计算({{checkedLength}})</div>
  </div>
</template>

<script>
import CartCheckButton from './CartCheckButton'

export default {
  name:"CartBottomBar", 
  components:{
    CartCheckButton,
  },
  data() {
    return{

    }
  },
  computed: {
    totalPrice() {
      return this.$store.state.cartList.filter((item) => {
        return item.checked
      }).reduce((prevalue, item) => {
       return prevalue + item.count * item.price
      }, 0).toFixed(2)
    },
    checkedLength() {
      return this.$store.state.cartList.filter((item) => {return item.checked}).length
    },
    isSelectAll() {
      return !this.$store.state.cartList.find(item => !item.checked)
     
    }
  },
  methods: {
    checkClick2() {
      if(this.isSelectAll) {
        this.$store.state.cartList.forEach(item => item.checked = false);
      }else {
         this.$store.state.cartList.forEach(item => item.checked = true);
      }
    },
    
    // 点击结算按钮前，检测是否选择商品并toast提示
    calc() {
      if(!this.checkedLength) 
      this.$toast.show('请先添加商品')
    }
  }

}
</script>

<style>
  .bottom-bar {
    display: flex;
    height: 40px;
    background-color: #eee;
    line-height: 40px;
  }
  .check-content {
    display: flex;
    width: 100px;
    padding: 0 10px;
    font-size: 14px;

  }
  .check-button {
    line-height: 20px;
  }
  .footing {
    width: 160px;
  }

  .calculate {
    width: calc(100% - 160px - 100px);
    padding: 0 8px;
    background-color: orangered;
    color: #fff;
    text-align: center;
  }
</style>
