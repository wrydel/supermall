// 混入：组件间共享代码
import { debounce } from "./utils"

import  BackTop  from "../components/content/backtop/BackTop"

export const imgDebounceMixin = {

  data() {
    return {
      imgDebounc:null,
    }
  },

  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh,500)

    this.imgDebounc = () => {
      refresh();
    }
  
    this.$bus.$on('itemImageLoad',this.imgDebounc)
  }
}

export const backTopMixin = {
  data() {
    return {
      isShowBackTop:false,
    }
  },
  components: {
    BackTop
  },
  methods: {
    backTopClick() {
      this.$refs.scroll.scrollTop(0,0, 400)
    },

    // 2.backtop在position-y大于1000时显示，反之隐藏
    listenerShowBackTop(position) {
      this.isShowBackTop = -position.y > 1000
    },
  }
}