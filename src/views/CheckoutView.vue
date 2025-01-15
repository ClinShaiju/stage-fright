<script setup>
import { useSiteStore } from '@/stores/site'
import { cart } from '@/cart'

const siteStore = useSiteStore()
function checkoutButton() {
  if (siteStore.cart.length == 0) {
    return 'bg-zinc-800 text-white cursor-default'
  } else return 'bg-red-700 text-white hover:bg-red-600 hover:scale-105'
}
function buttonType() {
  if (siteStore.cart.length == 0) {
    return 'button'
  } else return 'submit'
}
</script>

<template>
  <div class="bg-neutral-900 flex flex-col h-vdh items-center">
    <div class="h-[80px] w-dvw flex-shrink-0"></div>
    <div class="flex w-dvw max-h-[75vh] md:max-h-[calc(100vh-80px)] justify-center h-screen">
      <div
        class="flex flex-col lg:flex-row w-dvw max-h-[calc(100vh-80px)] bg-neutral-950 border-b-0"
      >
        <div class="w-full p-8 overflow-scroll flex-grow">
          <h1
            v-if="siteStore.cart.length == 0"
            class="text-4xl font-loud text-white m-auto w-full h-full text-center text"
          >
            No products in cart
          </h1>
          <ul class="overflow-scroll" v-if="siteStore.cart.length != 0">
            <li
              v-for="product in siteStore.cart"
              :key="product.price"
              class="text-white border border-neutral-800 bg-black mb-4 p-2 sm:p-6 rounded-lg text-xl"
            >
              <div class="flex flex-row h-full w-full">
                <div class="flex max-w-48 w-auto h-full aspect-square justify-center self-center">
                  <img
                    :src="cart.lookupProduct(product.price).img.main"
                    :alt="cart.lookupProduct(product.price).name"
                    class="w-full h-auto"
                  />
                </div>
                <div class="flex flex-col sm:flex-row justify-between w-full flex-grow">
                  <div class="flex flex-col ml-4">
                    <div>
                      <p>
                        <a class="font-bold">Name: </a>
                        <a>{{ cart.lookupProduct(product.price).name }}</a>
                      </p>
                    </div>
                    <div>
                      <p>
                        <a class="font-bold">Price: </a>$<a>{{
                          cart.lookupProduct(product.price).price
                        }}</a>
                      </p>
                    </div>
                  </div>
                  <div
                    class="flex ml-2 flex-row items-end sm:items-baseline justify-end rounded-lg"
                  >
                    <div class="inline-flex h-12 w-auto self-end rounded-lg">
                      <button
                        class="text-center aspect-square w-auto h-full border border-neutral-600 flex items-center justify-center"
                        @click="cart.decrQty(product.price)"
                      >
                        -
                      </button>
                      <input
                        type="text"
                        v-model="product.quantity"
                        class="text-black text-center w-12 sm:w-16"
                        @change="cart.validateQuantity(product.price)"
                      />
                      <button
                        class="text-center aspect-square w-auto h-full border border-neutral-600 flex items-center justify-center"
                        @click="cart.incrQty(product.price)"
                      >
                        +
                      </button>
                    </div>
                    <!-- <div class="flex flex-grow"></div> -->
                    <button
                      class="group rounded-md border border-red-600 hover:bg-red-700 mt-4 h-12 w-12 flex items-center justify-center self-end transition-all duration-200 ml-2"
                      @click="cart.removeFromCart(product.price)"
                    >
                      <img
                        src="/assets/icons/trash.png"
                        class="w-full group-hover:brightness-0 group-hover:invert transition-all duration-200"
                        :alt="`Delete ${cart.lookupProduct(product.price).name} from cart`"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div
          class="flex flex-col justify-center items-center lg:min-w-96 lg:max-w-[500px] md:border-l border-t border-neutral-800 p-4 bg-black"
        >
          <p class="text-white font-bold text-2xl mb-4 md:mb-12" key="cart.getTotal()">
            Cart Total: <a class="font-normal">${{ cart.getTotal() }}</a>
          </p>
          <p class="text-white text-xl mb-2" key="cart.getTotal()">
            Checkout securely with Stripe:
          </p>
          <form
            action="https://api.stagefrightrock.com/create-checkout-session"
            method="POST"
            class="flex justify-center items-center"
          >
            <button
              :type="buttonType()"
              id="checkout-button"
              class="flex flex-row items-center justify-center rounded-md p-3 w-64 text-white font-bold transition-all duration-300"
              :class="checkoutButton()"
            >
              <img src="/assets/icons/stripe.svg" class="grayscale w-7" alt="" />
              <a class="ml-4">Checkout</a>
            </button>
            <input type="hidden" name="cart" :value="cart.exportCart()" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
