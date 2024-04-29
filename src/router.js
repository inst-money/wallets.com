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
