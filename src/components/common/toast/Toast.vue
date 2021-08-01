<template>
<div>
  <div class="toast" v-show="isToastShow">{{message}}</div>
</div>
</template>

<script>
export default {
  name:"Toast",
  data() {
    return{
      isToastShow:false,
      message:''
    }
  },
  methods:{
    show(message, duration=1500) {
      this.message = message;
      this.isToastShow = true

      setTimeout(() => {
        this.isToastShow = false
        this.message = ''
      },duration)
    }
  } 
}
</script>

<style scoped>
  .toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0,0,0,.75);
    color: #fff;
    padding: 8px 10px;
    border-radius: 10px;
    z-index: 99;
  }
</style>
