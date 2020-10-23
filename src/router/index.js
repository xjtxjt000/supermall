import Vue from 'vue';
import VueRouter from 'vue-router';


const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const ShopCart = () => import('../views/shopcart/ShopCart')
const Profile = () => import('../views/profile/Profile')

// 1. 安装插件
Vue.use(VueRouter)

// 2. 创建router
const routes = [
  {
    path:'/',
    redirect: '/home'
  },
  {
    path:'/home',
    component: Home
  },
  {
    path:'/category',
    component: Category
  },
  {
    path:'/shopcart',
    component: ShopCart
  },
  {
    path:'/profile',
    component: Profile
  },
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
