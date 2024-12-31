import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useSiteStore = defineStore('counter', () => {
  const navActive = ref(false)
  const navActiveClass = ref('')

  return { navActive, navActiveClass }
})
