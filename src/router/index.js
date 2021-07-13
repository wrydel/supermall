import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home.vue');
const Category = () => import('../views/category/Category.vue');
const Shopcart = () => import('../views/shopcart/Shopcart.vue');
const Profile = () => import('../views/profile/Profile.vue');
const Detail = () => import('../views/details/Detail.vue');
// import Home from '../views/home/Home.vue'
// import Shopcart from '../views/shopcart/Shopcart.vue'
// import Category from '../views/category/Category.vue'
// import Profile from '../views/profile/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home,
  },
  {
    path:'/shopcart',
    component:Shopcart,
  },
  {
    path:'/category',
    component:Category,
  },
  {
    path:'/profile',
    component:Profile,
  },
  {
    path:'/detail/:iid',
    component:Detail,
  },
]

const router = new VueRouter ({
  mode:"history",
  routes
})

export default router