<script setup>
import { RouterLink } from 'vue-router'
import MobileHamburger from './MobileHamburger.vue'
import { useSiteStore } from '/src/stores/site.js'

const siteStore = useSiteStore()

function toggleNav() {
  siteStore.navActive = !siteStore.navActive
  if (siteStore.navActive) siteStore.navActiveClass = 'is-active'
  else siteStore.navActiveClass = ''
}
</script>
<template>
  <nav class="flex flex-row flex-wrap bg-black fixed w-full z-50 font-loud text-xl max-h-24 border-b-2 border-stone-950 space-between justify-between">
    <div class="flex items-center justify-between mx-0 md:mx-auto p-4 w-full max-w-screen-md">
      <div class="w-2 hidden md:block"></div>
      <div class="flex flex-row items-center mx-0">
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-black border-gray-700"
          >
            <li>
              <RouterLink
                to="/"
                class="block py-2 px-3 text-white hover:text-red-500 rounded md:bg-transparent md:p-0 transition-colors"
                aria-current="home"
                :active-class="'md:text-red-600'"
                >Home</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/about"
                class="block py-2 px-3 text-white hover:text-red-500 rounded md:bg-transparent md:p-0 transition-colors"
                aria-current="about"
                :active-class="'md:text-red-600'"
                >About</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/music"
                class="block py-2 px-3 text-white hover:text-red-500 rounded md:bg-transparent md:p-0 transition-colors"
                aria-current="music"
                :active-class="'md:text-red-600'"
                >Music</RouterLink
              >
            </li>
          </ul>
        </div>
        <RouterLink class="text-center z-50 md:px-4" to="/">
          <img
            src="/src/assets/logo/logo_square.png"
            class="h-12 m-0 p-0"
            alt="Stage Fright Logo"
          />
        </RouterLink>
        <div class="hidden w-full md:block md:w-auto">
          <ul
            class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-black border-gray-700"
          >
            <li>
              <RouterLink
                to="/merch"
                class="block py-2 px-3 text-white hover:text-red-500 rounded md:bg-transparent md:p-0 transition-colors"
                aria-current="merch"
                :active-class="'md:text-red-600'"
                >Merch</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/tours"
                class="block py-2 px-3 text-white hover:text-red-500 rounded md:bg-transparent md:p-0 transition-colors"
                aria-current="tours"
                :active-class="'md:text-red-600'"
                >Tours</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/contact"
                class="block py-2 px-3 text-white hover:text-red-500 rounded md:bg-transparent md:p-0 transition-colors"
                aria-current="contact"
                :active-class="'md:text-red-600'"
                >Contact</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="flex items-center z-50 h-auto justify-self-end">
        <RouterLink to="/checkout">
          <button
            id="burger"
            aria-label="Cart"
            class="z-50 inline-flex items-center p-2 justify-center text-sm rounded-lg text-gray-400 hover:bg-neutral-950"
            type="button"
          >
            <img src="/src/assets/icons/cart.svg" class="w-9 invert" alt="Cart" />
          </button>
        </RouterLink>
        <button
          id="burger"
          aria-label="Navigation Burger"
          :class="siteStore.navActiveClass"
          @click="toggleNav"
          class="hamburger hamburger--spin z-50 inline-flex items-center p-2 justify-center text-sm rounded-lg md:hidden text-gray-400 hover:bg-neutral-950"
          type="button"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </div>
    <MobileHamburger :is-active="siteStore.navActive" />
  </nav>
</template>
