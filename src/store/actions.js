import {
  ADD_TO_CART,
  ADD_COUNTER
} from './mutation-types'

// 逻辑判断和异步代码一般写在actions里
export default {
  addCart(context, payLoad) {
    //遍历空数组程序不会往后执行
    // 1.
    // if(state.cartList.length == 0) {
    //   state.cartList.push(payLoad);
    //   payLoad.count = 1;
    // }else{
    //   for(let item of state.cartList) {
    //     if(item.iid === payLoad.iid) {
    //       item.count += 1;
    //       console.log('11111');
    //     }else{
    //       console.log('-------------');
    //       state.cartList.push(payLoad);
    //       payLoad.count = 1;
    //     }
    //   }
    // }
    // 2.
    // let oldProduct = null;
    // for(let item of state.cartList) {
    //   if(item.iid === payLoad.iid) {
    //     oldProduct = item;
    //   }
    // }
    // 3.
    // 判断新加入的商品是否存在，否返回undefind
    let oldProduct = context.state.cartList.find(item => item.iid === payLoad.iid)

    if(oldProduct) {
      // 如果存在，count属性加1
      context.commit(ADD_COUNTER, oldProduct)
    } else {
      // 如果不存在，push进去
      context.commit(ADD_TO_CART, payLoad)
    }
  }
}