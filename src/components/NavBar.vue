<script setup>
import { ref } from 'vue'

const activeClass = ref('')
const active = ref(false)

function toggleNav() {
  active.value = !active.value
  if (active.value) activeClass.value = 'is-active'
  else activeClass.value = ''
}
</script>
<template>
  <nav class="border-gray-200 bg-black fixed w-full z-50 font-loud text-xl">
    <div class="md:max-w-lg flex flex-wrap items-center justify-between mx-0 md:mx-auto p-4">
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
      <a class="text-center">
        <img src="/src/assets/logo/logo_square.png" class="h-12 m-0 p-0" alt="Stage Fright Logo" />
      </a>
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
      <button
        id="burger"
        aria-label="Navigation Burger"
        :class="activeClass"
        @click="toggleNav"
        class="hamburger hamburger--spin inline-flex items-center p-2 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-slate-900 focus:ring-gray-800"
        type="button"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>
  </nav>
</template>
