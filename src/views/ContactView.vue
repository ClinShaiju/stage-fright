<script setup>
import MiniPopup from '@/components/MiniPopup.vue'
import { ref } from 'vue'

const popuped = ref(false)
const popupText = ref('')
const form = ref({
  name: '',
  email: '',
  message: '',
})

async function popup(text) {
  popupText.value = text
  popuped.value = true

  const timeout = setTimeout(() => {
    popuped.value = false
    clearTimeout(timeout)
  }, 2000)
}

function handleSubmit() {
  if (!form.value.name || !form.value.email || !form.value.message) {
    popup('Please fill out all fields!')
    return
  }
  popup('Your message has been submitted!')

  // Reset the form fields
  form.value = {
    name: '',
    email: '',
    message: '',
  }
}
</script>

<template>
  <div class="flex flex-col bg-neutral-900 items-center min-h-dvh">
    <div class="h-[80px] w-dvw"></div>
    <div class="mt-8 flex flex-col items-center justify-end mb-8">
      <MiniPopup :show="popuped" :text="popupText" @close="popuped = false"></MiniPopup>
      <h1 class="flex text-white h-auto w-dvw text-6xl justify-center font-thedark">Contact Us</h1>
      <h2 class="flex text-white h-auto text-2xl w-dvw justify-center font-loud text-center">
        Leave a message below or contact us directly!
      </h2>
    </div>
    <div class="flex flex-col-reverse w-dvw max-w-7xl md:flex-row">
      <div class="flex flex-col w-full md:w-1/2 p-6 text-center">
        <h2 class="flex text-5xl text-white font-loud justify-center">Online Inquiry</h2>
        <h2 class="flex text-xl text-white font-thin justify-center mt-3">
          Our team will get back to you soon!
        </h2>
        <form class="flex flex-col items-center m-4 gap-4" onsubmit="return false">
          <input
            id="name"
            type="text"
            v-model="form.name"
            class="block rounded-md p-2 text-black w-full"
            placeholder="Name"
            required
          />
          <input
            id="email"
            type="text"
            v-model="form.email"
            class="block rounded-md p-2 text-black w-full"
            placeholder="Email"
            required
          />
          <textarea
            id="message"
            v-model="form.message"
            class="block rounded-md p-2 text-black w-full h-32 md:h-40"
            placeholder="Message"
            required
          ></textarea>
          <button
            type="button"
            class="transition-all hover:scale-[1.1] px-24 py-2.5 text-xl text-white font-semibold rounded-full border border-white hover:text-white hover:bg-red-700 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 w-auto"
            @click="handleSubmit"
          >
            Submit
          </button>
        </form>
      </div>
      <div class="w-full md:w-1/2 p-6 text-center">
        <h2 class="flex text-5xl text-white font-loud justify-center">Contact Details</h2>
        <div class="mb-4">
          <h2 class="flex text-2xl text-white justify-center font-bold mb-1 mt-3">Support</h2>
          <h2
            class="flex text-xl text-white font-thin justify-center hover:underline hover:text-red-600 hover:font-bold transition-all"
          >
            <a href="mailto:support@stagefrightrock.com" title="Stage Fright's support email"
              >support@stagefrightrock.com</a
            >
          </h2>
        </div>
        <div class="mb-4">
          <h2 class="flex text-2xl text-white justify-center font-bold mb-1">Feedback</h2>
          <h2
            class="flex text-xl text-white font-thin justify-center hover:underline hover:text-red-600 hover:font-bold transition-all"
          >
            <a href="mailto:feedback@stagefrightrock.com" title="Stage Fright's support email"
              >feedback@stagefrightrock.com</a
            >
          </h2>
        </div>
        <div class="mb-4">
          <h2 class="flex text-2xl text-white justify-center font-bold mb-1">Booking</h2>
          <h2
            class="flex text-xl text-white font-thin justify-center hover:underline hover:text-red-600 hover:font-bold transition-all"
          >
            <a href="mailto:booking@stagefrightrock.com" title="Stage Fright's support email"
              >booking@stagefrightrock.com</a
            >
          </h2>
        </div>
        <div class="mb-4">
          <h2 class="flex text-2xl text-white justify-center font-bold mb-1">Phone Number</h2>
          <h2
            class="flex text-xl text-white font-thin justify-center hover:underline hover:text-red-600 hover:font-bold transition-all"
          >
            <a href="tel:+8329842275" title="Stage Fright's phone number">(832) 329-ROCK</a>
          </h2>
        </div>
      </div>
    </div>

    <h2 class="text-white font-loud text-5xl p-16 text-center">Frequently Asked Questions</h2>

    <div class="flex flex-col px-8">
      <div
        class="max-w-3xl my-4 space-y-6 bg-gray-200 rounded-lg p-8 hover:scale-105 transition-all"
      >
        <p class="font-bold text-black text-[22px]">
          How can I book Stage Fright for a concert or event?
        </p>
        <p class="text-black">
          Booking Stage Fright for your event is easy! Simply email our booking team with details
          about your event, including date, location, and expected audience size. We’ll get back to
          you with availability and pricing information.
        </p>
      </div>

      <div
        class="max-w-3xl my-4 space-y-6 bg-gray-200 rounded-lg p-8 hover:scale-105 transition-all"
      >
        <p class="font-bold text-black text-[22px]">
          Can I request a song for the band to perform at a show?
        </p>
        <p class="text-black">
          While we can’t accommodate every song request, we do occasionally take fan requests for
          specific songs during our concerts. Be sure to check our setlist for the tour, and feel
          free to shout your request at the show!
        </p>
      </div>

      <div
        class="max-w-3xl my-4 space-y-6 bg-gray-200 rounded-lg p-8 hover:scale-105 transition-all"
      >
        <p class="font-bold text-black text-[22px]">
          How do I stay updated with Stage Fright news and releases?
        </p>
        <p class="text-black">
          The best way to stay in the loop is to follow us on our social media platforms (Instagram,
          Youtube, Facebook) and subscribe to our newsletter. We send out the latest news, album
          releases, tour dates, and exclusive content to our fans!
        </p>
      </div>

      <div
        class="max-w-3xl my-4 space-y-6 bg-gray-200 rounded-lg p-8 hover:scale-105 transition-all"
      >
        <p class="font-bold text-black text-[22px]">
          What makes Stage Fright different from other bands in the death metal scene?
        </p>
        <p class="text-black">
          Stage Fright has become a global powerhouse by blending technical musicianship, raw
          emotion, and a relentless live presence. We push the boundaries of extreme metal while
          maintaining a deep connection with our dedicated fanbase. Our shows are known for their
          intensity, energy, and unforgettable atmosphere.
        </p>
      </div>

      <div
        class="max-w-3xl my-4 space-y-6 bg-gray-200 rounded-lg p-8 hover:scale-105 transition-all"
      >
        <p class="font-bold text-black text-[22px]">What is the band's tour schedule?</p>
        <p class="text-black">
          Our global tour schedule is updated regularly on our website and social media channels.
          Follow us on Instagram, Youtube, and Facebook to stay updated on our upcoming shows near
          you!
        </p>
      </div>
    </div>
  </div>
</template>
