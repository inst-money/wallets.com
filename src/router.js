import Vue from 'vue'
import Router from 'vue-router'

const originalPush = Router.prototype.push

Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(() => {})
}

Vue.use(Router)

const constantRoutes = [
  {
    path: '/loading',
    name: 'loading',
    component: () => import('@/views/loading.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home/index.vue')
  },
  {
    // shopline callback
    path: '/callback',
    name: 'callback',
    component: () => import('@/views/callback/index.vue')
  },
  {
    // shopline callback
    path: '/shopline',
    name: 'shopline',
    component: () => import('@/views/shopline/index.vue')
  },
  {
    path: '/apple',
    name: 'apple',
    component: () => import('@/views/applepay/index.vue')
  },
  {
    path: '/buyerprotection',
    name: 'feedback',
    component: () => import('@/views/feedback/index.vue')
  }
]

const createRouter = () => new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
