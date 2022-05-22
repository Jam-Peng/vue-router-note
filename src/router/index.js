import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/product',
    name: '新增頁面',
    component: () => import('../views/productView.vue'),
    children: [
      {
        path: 'ChBook',
        component: () => import('../views/ChBook.vue')
      },
      {
        path: 'EnBook',
        component: () => import('../views/EnBook.vue')
      },
      {
        path: 'DynamicRouter/:id',
        component: () => import('../views/DynamicRouter.vue')
      },
      {
        path: 'NamedView',
        component: () => import('../views/NamedView.vue'),
        children: [
          {
            path: 'Art-Design-Shot',
            components: {
              left: () => import('../views/ArtBook.vue'),
              middle: () => import('../views/DesignBook.vue'),
              right: () => import('../views/StreetShoot.vue')
            }
          },
          {
            path: 'Shot-Art-Design',
            components: {
              left: () => import('../views/StreetShoot.vue'),
              middle: () => import('../views/ArtBook.vue'),
              right: () => import('../views/DesignBook.vue')
            }
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
