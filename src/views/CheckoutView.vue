<script setup>
import { ref } from 'vue'
const cart = ref([])
cart.value.push({ price: 'price_1QcvIQG0Ux6oILTKFM4EMz23', quantity: 5 })
cart.value.push({ price: 'price_1QcvNEG0Ux6oILTKfZCdKYnF', quantity: 2 })
const cartJson = JSON.stringify(cart.value)
console.log(cart.value)
</script>

<template>
  <div class="bg-black h-dvh flex">
    <div class="h-20"></div>
    <div class="flex flex-col md:flex-row flex-grow">
      <div class="w-full border">

      </div>
      <div class="flex items-end justify-center min-w-96 max-w-[500px]">
        <form action="https://api.stagefrightrock.com/create-checkout-session" method="POST" class="flex justify-center items-center">
          <button type="submit" id="checkout-button" class="bg-white items-center justify-center rounded-md p-4 font-bold mb-20">Checkout</button>
          <input type="hidden" name="cart" :value="cartJson" />
        </form>
      </div>
    </div>
  </div>
</template>
