import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import NearBy from '../views/NearBy.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Profile from '../views/Profile.vue'
import Login from '../views/Login.vue'
import Order from '../views/Order.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.APP_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/product-detail',
      name: 'product-detail',
      component: ProductDetail,
      props: route => ({
        product: route.query.data
      })
    },
    {
      path: '/category',
      name: 'category',
      component: Category,
      props: route => ({
        id: route.query.id
      })
    },
    {
      path: '/voucher',
      name: 'voucher',
      // component: Category
    },
    {
      path: '/near-by',
      name: 'nearBy',
      component: NearBy
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      meta: {
        requiresAuth: true
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user && user.token) {
      next()
    }
    else {
      next('/login')
    }
  }
  else {
    next();
  }
})

export default router
