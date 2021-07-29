<template>
  <div>
    <div class="tick-button" :class="{checked:ischecked}"><img src="../../../assets/img/cart/tick.svg" alt=""></div>
  </div>
</template>

<script>
export default {
  name:"CartCheckButton", 
  data() {
    return{
    }
  },
  props: {
    ischecked: {
      type: Boolean,
      default() {
        return false
      }
    }
  }
}
</script>

<style>
.tick-button {
  position: relative;
  top: calc(50% - 10px);
  height: 20px;
  width: 20px;
  margin-right: 5px;
  border-radius: 50%;
  background-color:#fff;
  border: 1px solid #ccc;

}

.checked {
  background: url("../../../assets/img/cart/yes.svg") 0 0/90% no-repeat;
  border: 0;
}
</style>
