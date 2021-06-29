<template>
  <div class="tab-control">
    <div class="tab-control-item" 
    v-for="(item, index) in titles"
    @click="itemindex(index)"
    :class="{active: currentindex === index}"
    >
      <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name:"TabControl", 
  props:{
    titles:{
      type:Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentindex:0
    }
  },
  methods:{
    itemindex(index) {
      this.currentindex = index;
    }
  }
}
</script>

<style>
  .tab-control {
    display: flex;
    background-color: #fff;
    text-align: center; 
    font-size: 15px;
  }
  .tab-control-item {
    flex: 1;
    line-height: 44px;
  }
 .active {
    color: var(--color-high-text);
  }
</style>
