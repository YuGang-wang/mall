import Vue from 'vue'
import Router from 'vue-router'

//1、要通过 Vue.use(插件) 明确地安装路由功能
Vue.use(Router)


//2、创建路由对象
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const ShopCart = () => import('views/shopCart/ShopCart')
const Profile = () => import('views/profile/Profile')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    name: Home
  },
  {
    path: '/category',
    component: Category,
    name: Category
  }
  ,
  {
    path: '/shopcart',
    component: ShopCart,
    name: ShopCart
  }
  ,
  {
    path: '/profile',
    component: Profile,
    name: Profile
  }
]

const router = new Router({
  mode: 'history',
  routes
})

/**
 * 重复加载同一个路由
 * vue报错：Avoided redundant navigation to current location: "/"的解决方法
 */
const originalPush = Router.prototype.push
   Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

//3、导出
export default router