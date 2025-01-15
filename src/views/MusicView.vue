<script setup>
import ModalPopup from '@/components/ModalPopup.vue'
import { musicInfo } from '@/music'
import { ref } from 'vue'

// Reactive states for popup management
const popuped = ref(false) // Controls visibility of the popup
const popupInfo = ref('') // Heading of the popup

// Function to trigger the popup
async function popup(info) {
  popupInfo.value = info
  popuped.value = true // Show the popup
  document.body.classList.add('modal-open')
}

function closePopup() {
  document.body.classList.remove('modal-open')
  popuped.value = false
}
</script>

<template>
  <div class="flex min-h-dvh flex-col items-center justify-center bg-neutral-900">
    <ModalPopup :show="popuped" @close="closePopup()">
      <h1 class="font-loud text-white text-5xl text-center w-full mb-4">
        {{ musicInfo.get(popupInfo).name }}
      </h1>
      <img
        :src="musicInfo.get(popupInfo).img.src"
        :alt="musicInfo.get(popupInfo).img.alt"
        class="h-auto max-w-80 mb-4 rounded-md"
      />
      <p class="text-white text-lg text-center">{{ musicInfo.get(popupInfo).description }}</p>

      <h2 class="font-loud text-white text-4xl text-center w-full my-6">Album Songs</h2>
      <div class="w-full flex flex-col md:flex-row justify-between max-w-screen-md text-center pb-8">
        <div class="text-white text-xl">
          <div
            v-for="(song, index) in Object.values(musicInfo.get(popupInfo).songs).slice(0, 5)"
            :key="`song-${index}`"
          >
            <p>{{ index + 1 }}. {{ song }}</p>
          </div>
        </div>
        <div class="text-white text-xl">
          <div
            v-for="(song, index) in Object.values(musicInfo.get(popupInfo).songs).slice(5)"
            :key="`song-${index + 5}`"
          >
            <p>{{ index + 6 }}. {{ song }}</p>
          </div>
        </div>
      </div>
    </ModalPopup>

    <div class="h-[80px]"></div>
    <div class="flex flex-col w-dvw items-center p-8">
      <h1 class="justify-center font-thedark text-6xl text-white">Listen Now</h1>
      <h2 class="max-w-screen-lg pt-4 px-10 text-center text-white text-lg">
        Stage Fright’s discography is a journey through raw emotion, powerful storytelling, and
        electrifying energy. Dive into their track samples below and experience the highs, the lows,
        and everything in between.
      </h2>
      <div class="flex w-full flex-col items-center justify-center">
        <div class="flex h-full w-dvw flex-col items-center justify-around gap-8 lg:flex-row p-8">
          <div
            class="flex h-auto w-auto flex-col overflow-hidden rounded-lg border bg-black border-neutral-700 transition-all hover:scale-105"
          >
            <p class="p-8 text-center font-loud text-5xl uppercase text-white underline">Escape</p>
            <div class="flex justify-center">
              <img
                src="/assets/images/escape.jpg"
                alt="'Escape' Album Cover"
                class="h-auto max-w-80"
              />
            </div>

            <div class="flex justify-center p-6">
              <div
                class="flex w-full max-w-screen-lg flex-col items-center justify-center rounded-lg bg-neutral-950 p-8 shadow-lg"
              >
                <h1 class="p-6 text-center font-thedark text-4xl text-white">Edge of Night</h1>
                <audio controls class="w-full">
                  <source src="/assets/music/Breaking Free.mp3" type="audio/mp3" />
                </audio>
                <div class="p-6">
                  <button
                    class="font:thin w-full rounded-lg bg-neutral-800 p-6 px-4 py-2 text-white transition-all hover:scale-105 hover:bg-stone-600 active:bg-stone-700"
                    @click="popup('escape')"
                  >
                    About the album
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex h-auto w-auto flex-col overflow-hidden rounded-lg border bg-black border-neutral-700 transition-all hover:scale-105"
          >
            <p class="p-8 text-center font-loud text-5xl uppercase text-white underline">
              Scared to Death
            </p>
            <div class="flex justify-center">
              <img
                src="/assets/images/scared_to_death.jpg"
                alt="'Scared to Death' Album Cover"
                class="h-auto max-w-80"
              />
            </div>
            <div class="flex justify-center p-6">
              <div
                class="flex w-full max-w-screen-lg flex-col items-center justify-center rounded-lg bg-neutral-950 p-8 shadow-lg"
              >
                <h1 class="p-6 text-center font-thedark text-4xl text-white w-full">
                  Ring the Alarm
                </h1>
                <audio controls class="w-full">
                  <source src="/assets/music/Edge of Night.mp3" type="audio/mp3" />
                </audio>
                <div class="p-6">
                  <button
                    class="font:thin w-full rounded-lg bg-neutral-800 p-6 px-4 py-2 text-white transition-all hover:scale-105 hover:bg-stone-600 active:bg-stone-700"
                    @click="popup('scared')"
                  >
                    About the album
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex flex-shrink-0 h-auto flex-col overflow-hidden rounded-lg bg-black border border-neutral-700 transition-all hover:scale-105"
          >
            <p class="p-8 text-center font-loud text-5xl uppercase text-white underline">
              Endorphins
            </p>
            <div class="flex justify-center">
              <img
                src="/assets/images/endorphins.jpg"
                alt="'Endorphins' Album Cover"
                class="h-auto max-w-80"
              />
            </div>
            <div class="flex justify-center p-6">
              <div
                class="flex max-w-screen-lg flex-col items-center justify-center rounded-lg bg-neutral-950 p-8 shadow-lg w-auto sm:min-w-[336px]"
              >
                <h1 class="p-6 text-center font-thedark text-4xl text-white">Alleviate</h1>
                <audio controls class="w-full">
                  <source src="/assets/music/Unstoppable Force.mp3" type="audio/mp3" />
                </audio>
                <div class="p-6">
                  <button
                    class="font:thin w-full rounded-lg bg-neutral-800 p-6 px-4 py-2 text-white transition-all hover:scale-105 hover:bg-stone-600 active:bg-stone-700"
                    @click="popup('endorphins')"
                  >
                    About the album
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="https://open.spotify.com/user/314pmfz6ftbrlmjmgmtacdd5ntx4">
          <button
            class="font-loud mt-16 w-auto rounded-md border border-neutral-700 bg-black p-4 text-3xl text-white transition-all hover:scale-105 hover:bg-neutral-900"
          >
            Check out our Spotify
          </button>
        </a>
      </div>
    </div>
  </div>
</template>
