import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSiteStore = defineStore('counter', () => {
  const navActive = ref(false)
  const navActiveClass = ref('')

  const cart = ref([])

  return { navActive, navActiveClass, cart }
})
