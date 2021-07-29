import {
  ADD_TO_CART,
  ADD_COUNTER
} from './mutation-types'

// mutation只做单个动作，方便监控追踪
// mutations 唯一的目的是修改state状态
// mutations中的每一个方法尽可能完成的事件比较单一
export default {
  [ADD_TO_CART](state, payLoad) {
      payLoad.count = 1
      state.cartList.push(payLoad)
  },
  
  [ADD_COUNTER](state, oldProduct) {
    oldProduct.count++
  }
}
