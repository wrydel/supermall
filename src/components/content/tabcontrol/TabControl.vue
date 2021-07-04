<template>
  <div class="tab-control">
    <div class="tab-control-item" 
    :class="{active: currentindex === index}"
    v-for="(item, index) in titles"
    @click="itemindex(index)"
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
      // 记录当前被选中的项
      currentindex:0
    }
  },
  methods:{
    itemindex(index) {
      // 思路：点击的item的Index传给currentindex,用来与每个item比较，相同的话进行活跃样式渲染
      this.currentindex = index;
      this.$emit('tabclick',index);
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

  .active span {
    padding: 0 3px 3px;
    border-bottom:4px solid var(--color-high-text) ;
  }
</style>
