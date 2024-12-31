<script setup>
import {useSiteStore}  from '/src/stores/site.js'
const siteStore = useSiteStore()
</script>

<template>
  <Transition name="slide" mode="in-out" class="z-40">
    <div v-if="siteStore.navActive" class="md:hidden h-screen text-4xl z-40">
      <ul
        class="pt-[10vh] text-white m-0 h-full font-medium flex flex-col p-4 md:p-0border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-black border-transparent items-center z-40"
      >
        <li>
          <RouterLink
            to="/"
            class="block py-2 px-3  hover:text-red-500 rounded md:bg-transparent md:p-0 transition-colors"
            aria-current="home"
            :active-class="'text-red-600'"
            >Home</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/about"
            class="block py-2 px-3  hover:text-red-500 rounded md:bg-transparent md:p-0 transition-colors"
            aria-current="about"
            :active-class="'text-red-600'"
            >About</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/music"
            class="block py-2 px-3  hover:text-red-500 rounded md:bg-transparent md:p-0 transition-colors"
            aria-current="music"
            :active-class="'text-red-600'"
            >Music</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/merch"
            class="block py-2 px-3  hover:text-red-500 rounded md:bg-transparent md:p-0 transition-colors"
            aria-current="merch"
            :active-class="'text-red-600'"
            >Merch</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/tours"
            class="block py-2 px-3  hover:text-red-500 rounded md:bg-transparent md:p-0 transition-colors"
            aria-current="tours"
            :active-class="'text-red-600'"
            >Tours</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/contact"
            class="block py-2 px-3  hover:text-red-500 rounded md:bg-transparent md:p-0 transition-colors"
            aria-current="contact"
            :active-class="'text-red-600'"
            >Contact</RouterLink
          >
        </li>
      </ul>
    </div>
  </Transition>
</template>
<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-100%);
}
</style>
