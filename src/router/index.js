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
        path: 'DynamicRouterByProps/:id',
        name: '路由props',
        component: () => import('../views/DynamicRouterByProps.vue'),
        props: (route) => {
          console.log('route:', route)
          return {
            id: route.params.id
          }
        }
      },
      {
        path: 'RouteInfo',
        component: () => import('../views/RouteInfo.vue')
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
  },
  // 404 頁面
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue')
  },
  // 重新導向首頁(指定在某一個頁面如果隨意搜尋，會重新導向首頁)
  {
    path: '/product/:pathMatch(.*)*',
    // redirect: '/'
    redirect: { name: 'home' }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    // console.log(to, from, savedPosition)
    // 在 product 頁面是滾軸到頂端
    if (to.fullPath.match('product')) {
      return {
        top: 0
      }
    }
    return {} // 預設情況下不執行滾動
  }
})

export default router
