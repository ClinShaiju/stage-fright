<script setup>
import { products } from '@/products'
import { cart } from '@/cart'
import MiniPopup from '@/components/MiniPopup.vue'
import { ref } from 'vue'

// Reactive states for popup management
const popuped = ref(false) // Controls visibility of the popup
const popupText = ref('') // Text content of the popup

// Filter products to exclude 'ticket' type
const filteredProducts = Array.from(products.entries()).filter(([, product]) => product.type !== 'ticket')

// Function to trigger the popup
async function popup(text) {
  popupText.value = 'Added ' + text + ' to cart!' // Set the text for the popup
  popuped.value = true // Show the popup

  const timeout = setTimeout(() => {
    popuped.value = false // Hide the popup after 2.5 seconds
    clearTimeout(timeout) // Clear the timeout to prevent memory leaks
  }, 2000)
}
</script>


<template>
  <div class="bg-neutral-900 min-h-dvh w-dvw flex flex-col items-center">
    <div class="h-[80px] w-dvw"></div>
    <div class="flex flex-col max-w-screen-2xl w-full items-center">
      <!-- MiniPopup component -->
      <MiniPopup :show="popuped" :text="popupText" @close="popuped = false" />

      <h1 class="text-white font-thedark text-6xl my-6">Merch</h1>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full justify-items-center p-8 gap-6"
      >
        <!-- Product Cards -->
        <div
          v-for="[id, product] in filteredProducts"
          :key="id"
          class="bg-black max-w-96 border mb-4 rounded-xl border-neutral-800 overflow-hidden hover:scale-105 transition-all duration-300"
          >
          <img :src="product.img.main" :alt="product.name" />
          <div class="flex flex-row p-8 justify-between">
            <div class="flex flex-col">
              <a class="text-white text-xl md:text-2xl font-bold">{{ product.name }}</a>
              <a class="text-xl text-red-400">${{ product.price }}</a>
            </div>
            <div class="flex flex-row items-center justify-end">
              <select
                name="size"
                class="w-16 h-16 text-center mr-4 rounded-md font-bold"
                v-if="product.type !== 'cap'"
              >
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>

              <button
                class="text-white border p-4 border-neutral-700 rounded-md bg-red-800 hover:bg-red-700 font-bold transition-all duration-200"
                @click="cart.addToCart(id, 1); popup(product.name)"
              >
                <img src="/src/assets/icons/cart.png" alt="Add to cart" class="invert w-8" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
