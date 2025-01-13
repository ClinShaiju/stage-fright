<script setup>
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
  <div class="flex flex-col bg-neutral-900 items-center min-h-dvh ">
    <div class="h-[80px] w-dvw"></div>
    <div class="mt-8 flex flex-col items-center justify-end mb-16">
      <MiniPopup :show="popuped" :text="popupText" @close="popuped = false"></MiniPopup>
      <h1 class="flex text-white h-auto w-dvw text-6xl justify-center font-thedark">
        Contact Us
      </h1>
      <h2 class="flex text-white h-auto text-2xl w-dvw justify-center  font-loud text-center">
        Leave a message below or contact us directly!
      </h2>
    </div>
    <div class="flex flex-col-reverse  w-dvw max-w-7xl  md:flex-row  ">
      <div class="flex flex-col w-full md:w-1/2  p-6 text-center">
        <h2 class="flex text-6xl text-white font-thedark justify-center">Online Inquiry</h2>
        <h2 class="flex text-xl text-white font-thin justify-center mt-3 ">Our team will get back to you soon!</h2>
        <form class="flex flex-col items-center m-4 gap-4">
          <input
            id="name"
            type="text"
            class="block  rounded-md p-2 text-black w-full"
            placeholder="Name"
          />

          <input
            id="name"
            type="text"
            class="block  rounded-md p-2 text-black w-full"
            placeholder="Email"
          />

          <textarea
            id="message"
            type="text"
            class="block  rounded-md p-2 text-black w-full h-32 md:h-40 "
            placeholder="Message"
          ></textarea>

          <button
            type="button"
            class="transition-all hover:scale-[1.1] px-24 py-2.5 text-xl text-white font-semibold rounded-full border border-white hover:text-white hover:bg-red-700 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 w-auto"
          @click="popup('Your message has been submitted!')"
            >
            Submit
          </button>
        </form>
      </div>
      <div class="w-full md:w-1/2 p-6 text-center">
        <h2 class="flex text-6xl text-white font-thedark justify-center">Contact Details</h2>
        <div class="mb-4">
          <h2 class="flex text-2xl text-white justify-center font-bold mb-1 mt-3">Support</h2>
          <h2 class="flex text-xl text-white font-thin justify-center hover:underline hover:text-red-600 hover:font-bold transition-all"><a href="mailto:support@stagefrightrock.com" title="Stage Fright's support email">support@stagefrightrock.com</a></h2>
        </div>
        <div class="mb-4">
          <h2 class="flex text-2xl text-white justify-center font-bold mb-1">Feedback</h2>
          <h2 class="flex text-xl text-white font-thin justify-center hover:underline hover:text-red-600 hover:font-bold transition-all"><a href="mailto:feedback@stagefrightrock.com" title="Stage Fright's support email">feedback@stagefrightrock.com</a></h2>
        </div>
        <div class="mb-4">
          <h2 class="flex text-2xl text-white justify-center font-bold mb-1">Booking</h2>
          <h2 class="flex text-xl text-white font-thin justify-center hover:underline hover:text-red-600 hover:font-bold transition-all"><a href="mailto:booking@stagefrightrock.com" title="Stage Fright's support email">booking@stagefrightrock.com</a></h2>
        </div>
        <div class="mb-4">
          <h2 class="flex text-2xl text-white justify-center font-bold mb-1">Phone Number</h2>
          <h2 class="flex text-xl text-white font-thin justify-center hover:underline hover:text-red-600 hover:font-bold transition-all"><a href="tel:+8329842275" title="Stage Fright's phone number">(832) 329-ROCK</a> </h2>
        </div>
      </div>
    </div>
  </div>
</template>
