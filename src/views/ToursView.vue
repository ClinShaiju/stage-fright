<script setup>
import { tours } from '@/tours'
import { cart } from '@/cart'
import MiniPopup from '@/components/MiniPopup.vue'
import { ref } from 'vue'

// Reactive states for popup management
const popuped = ref(false) // Controls visibility of the popup
const popupText = ref('') // Text content of the popup

// Function to trigger the popup
async function popup(text) {
  popupText.value = text // Set the text for the popup
  popuped.value = true // Show the popup

  const timeout = setTimeout(() => {
    popuped.value = false // Hide the popup after 2.5 seconds
    clearTimeout(timeout) // Clear the timeout to prevent memory leaks
  }, 2000)
}
</script>

<template>
  <div class="bg-neutral-900 h-auto min-h-dvh w-dvw p-4 md:p-8 flex flex-col items-center">
    <div class="h-[80px]"></div>
    <div class="flex flex-col items-center w-full">
      <MiniPopup :show="popuped" :text="popupText" @close="popuped = false"></MiniPopup>
      <h1 class="text-6xl text-white font-thedark mb-8">TOURS</h1>

      <iframe class="w-full h-96 mb-10 max-w-4xl " src="https://stagefright.travelmap.net" title="Stage Fright Tour Map"></iframe>
      <ul class="flex flex-col items-center w-full">
        <li
          v-for="[id, tour] in tours.entries()"
          :key="id"
          class="flex flex-row text-white border border-neutral-800 mb-8 min-h-32 w-full max-w-5xl p-8 items-center justify-between bg-black"

        >
          <!-- Tour Details -->
          <div
            class="w-full flex flex-col md:flex-row justify-between items-start md:items-center uppercase font-bold md:text-xl"
          >
            <!-- Location -->
            <p class="text-white text-nowrap flex-1">{{ tour.location }}</p>
            <!-- Date -->
            <p class="md:ml-4 text-white text-nowrap flex-1">{{ tour.date }}</p>
            <!-- Price -->
            <p class="text-red-200 text-nowrap flex-1 text-end">${{ tour.price }}</p>
          </div>
          <!-- Tickets Button -->
          <div class="ml-4">
            <button
              class="p-2 font-bold max-w-32 bg-red-800 hover:bg-red-700 hover:scale-105 rounded-sm border border-neutral-700 transition-all"
              @click="popup('Added ticket to cart!');cart.addToCart('price_1QhNE9G0Ux6oILTKCOgFd4Iy', 1)"
            >
              <a class="text-nowrap">BUY TICKET</a>
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
