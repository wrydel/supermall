import Toast from './Toast.vue'

const obj ={}

  obj.install = function(Vue) {
    // 1.构建组件构造器，传入组件    
    const toastConstructor = Vue.extend(Toast)

    // 2.new的方式，创建一个组件对象（实例）
    const toast = new toastConstructor()

    // 3.将实例挂载到div元素上
    toast.$mount(document.createElement('div'))

    // 4.将div元素插入dom中
    document.body.appendChild(toast.$el)


    Vue.prototype.$toast = toast;
  }

  export default obj