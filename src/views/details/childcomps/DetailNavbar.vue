<template>
    <Navbar>
      <div slot="left" class="back" @click="backClick">
        <img src="../../../assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item, index) in title"
        @click="titleClick(index)"
        :class="{active:currentIndex === index}"
        class="title-item"
        >{{item}}</div>
      </div>
    </Navbar>
</template>

<script>
import NavBar from '../../../components/common/navbar/NavBar'

export default {
  name:"DetailNavbar",
  data() {
    return {
      // 代码中的数据都不要写死，需要保存在这里
      title:['商品','参数','评论','推荐'],
      currentIndex: 0,
    }
  },
  components: {
    NavBar, 
  },
  methods: {
    // 活跃样式渲染
    titleClick(index) {
      this.currentIndex = index;
    },
    // 后退按钮功能
    backClick() {
      this.$router.banck();
    }
  }

}
</script>

<style>
  .active {
    color:var(--color-high-text) ;
  }

  .back img {
    margin-top: 10px;
  }

  .title {
    display: flex;
    font-size: 12px;
  }

  .title-item {
    flex: 1;
  }
</style>
