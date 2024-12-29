<script>
import {RouterLink} from 'vue-router'
</script>
<template>
  <nav class="border-gray-200 bg-black fixed w-full z-50 font-loud text-xl">
    <div class="md:max-w-lg flex flex-wrap items-center justify-between mx-0 md:mx-auto p-4">

      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-black border-gray-700">
          <li>
            <RouterLink to="/"
              class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 md:text-blue-500"
              aria-current="page">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/about"
              class="block py-2 px-3 rounded md:border-0 md:p-0 text-white hover:text-blue-500 hover:bg-gray-700 md:hover:bg-transparent">About</RouterLink>
          </li>
          <li>
            <RouterLink to="/music"
              class="block py-2 px-3 rounded md:border-0 md:p-0 text-white hover:text-blue-500 hover:bg-gray-700  md:hover:bg-transparent">Music</RouterLink>
          </li>
        </ul>
      </div>
      <a class="text-center">
        <img src="/src/assets/logo/logo_square.png" class="h-12 m-0 p-0" alt="Flowbite Logo" />
      </a>
      <div class="hidden w-full md:block md:w-auto">

        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-black border-gray-700">
          <li>
            <RouterLink to="/merch"
              class="block py-2 px-3 rounded md:border-0 md:p-0 text-white hover:text-blue-500 hover:bg-gray-700 md:hover:bg-transparent">Merch</RouterLink>
          </li>
          <li>
            <RouterLink to="/tours"
              class="block py-2 px-3 rounded md:border-0 md:p-0 text-white hover:text-blue-500 hover:bg-gray-700  md:hover:bg-transparent">Tours</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact"
              class="block py-2 px-3 rounded md:border-0 md:p-0 text-white hover:text-blue-500 hover:bg-gray-700 md:hover:bg-transparent">Contact</RouterLink>
          </li>
        </ul>

      </div>
      <button data-collapse-toggle="navbar-default" type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
        aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15" />
        </svg>

      </button>
    </div>
  </nav>
</template>
