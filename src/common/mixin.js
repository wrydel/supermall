// 混入：组件间共享代码
import { debounce } from "./utils"

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