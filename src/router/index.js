import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomePage.vue'),
    meta: { title: 'AI NEXUS - The Definitive Gateway to ML' }
  },
  {
    path: '/ai-api',
    name: 'AiApi',
    component: () => import('../views/AiApiPage.vue'),
    meta: { title: 'AI API - Premium Solutions | AI NEXUS' }
  },
  {
    path: '/category/:categoryKey',
    name: 'Category',
    component: () => import('../views/CategoryPage.vue'),
    meta: { title: 'AI Tools | AI NEXUS' }
  },
  {
    path: '/:category/:id',
    name: 'ToolDetail',
    component: () => import('../views/ToolDetailPage.vue'),
    meta: { title: 'Tool Details | AI NEXUS' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFoundPage.vue'),
    meta: { title: 'Page Not Found | AI NEXUS' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
