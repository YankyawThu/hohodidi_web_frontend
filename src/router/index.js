import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import NearBy from '../views/NearBy.vue'
import ItemDetail from '../views/ItemDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/item-detail/:id',
      name: 'item-detail',
      component: ItemDetail
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
