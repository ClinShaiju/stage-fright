import { useSiteStore } from '/src/stores/site.js'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Stage Fright' },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: { title: 'About Us | Stage Fright' },
    },
    {
      path: '/music',
      name: 'music',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MusicView.vue'),
      meta: { title: 'Music | Stage Fright' },
    },
    {
      path: '/merch',
      name: 'merch',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MerchView.vue'),
      meta: { title: 'Merch | Stage Fright' },
    },
    {
      path: '/tours',
      name: 'tours',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ToursView.vue'),
      meta: { title: 'Tours | Stage Fright' },
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactView.vue'),
      meta: { title: 'Contact Us | Stage Fright' },
    },
    {
      path: '/checkout',
      name: 'checkout',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CheckoutView.vue'),
      meta: { title: 'Checkout | Stage Fright' },
    },
    {
      path: '/attributions',
      name: 'attributions',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AttributionsView.vue'),
      meta: { title: 'Attributions | Stage Fright' },
    },
    {
      path: '/team',
      name: 'team',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TeamView.vue'),
      meta: { title: 'Team | Stage Fright' },
    },
    {
      path: '/accessibility',
      name: 'accessibility',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AccessibilityView.vue'),
      meta: { title: 'Accessibility | Stage Fright' },
    },
    {
      path: "/:pathMatch(.*)*",
      name: 'ErrorView',
      component: () => import('../views/ErrorView.vue'),
    },
  ],
})

router.beforeEach((to) => {
  document.title = to.meta?.title ?? 'Stage Fright'
  const siteStore = useSiteStore()
  siteStore.navActive = false
  siteStore.navActiveClass = ''
  // console.log(store.navActive)
})


export default router
