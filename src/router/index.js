import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import NearBy from '../views/NearBy.vue'
import ProductDetail from '../views/ProductDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.APP_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/product-detail/:id',
      name: 'product-detail',
      component: ProductDetail
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/category/:id',
      name: 'categoryById',
      component: Category
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
      // component: profile
    },
  ]
})

export default router
