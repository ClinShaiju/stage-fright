<script setup></script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center bg-stone-900">
    <div class="h-[80px]"></div>
    <h1 class="justify-center font-thedark text-6xl text-white">Listen Now</h1>
    <h2 class="p-4 pl-10 pr-10 text-center font-thin text-white">
      Stage Fright’s discography is a journey through raw emotion, powerful storytelling, and
      electrifying energy. Dive into their track samples below and experience the highs, the lows,
      and everything in between.
    </h2>
    <div class="flex w-auto flex-col items-center justify-center bg-black p-4 py-16 md:p-8">
      <div class="flex h-full w-dvw flex-col items-center justify-around gap-8 lg:flex-row">
        <div
          class="flex h-auto w-fit flex-col overflow-hidden rounded-md border border-neutral-700 transition-all hover:scale-105"
        >
          <p class="p-8 text-center font-loud text-5xl uppercase text-white underline">Escape</p>
          <div class="flex justify-center">
            <img
              src="/public/assets/images/escape.jpg"
              alt="'Escape' Album Cover"
              class="h-fit max-w-80"
            />
          </div>

          <div class="flex justify-center p-6">
            <div
              class="flex w-full max-w-screen-lg flex-col items-center justify-center rounded-lg bg-stone-800 p-8 shadow-lg"
            >
              <h1 class="p-6 text-center font-thedark text-4xl text-white">Edge of Night</h1>
              <audio controls class="w-full">
                <source src="/public/assets/music/Breaking Free.mp3" type="audio/mp3" />
              </audio>
              <div class="p-6">
                <button
                  class="font:thin w-full rounded-lg bg-stone-400 p-6 px-4 py-2 text-white transition-all hover:scale-105 hover:bg-stone-500 active:bg-stone-700"
                >
                  About the album
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex h-auto w-fit flex-col overflow-hidden rounded-md border border-neutral-700 transition-all hover:scale-105"
        >
          <p class="p-8 text-center font-loud text-5xl uppercase text-white underline">
            Scared to Death
          </p>
          <div class="flex justify-center">
            <img
              src="/public/assets/images/scared_to_death.jpg"
              alt="'Escape' Album Cover"
              class="h-fit max-w-80"
            />
          </div>
          <div class="flex justify-center p-6">
            <div
              class="flex w-full max-w-screen-lg flex-col items-center justify-center rounded-lg bg-stone-800 p-8 shadow-lg"
            >
              <h1 class="p-6 text-center font-thedark text-4xl text-white">Ring the Alarm</h1>
              <audio controls class="w-full">
                <source src="/public/assets/music/Edge of Night.mp3" type="audio/mp3" />
              </audio>
              <div class="p-6">
                <button
                  class="font:thin w-full rounded-lg bg-stone-400 p-6 px-4 py-2 text-white transition-all hover:scale-105 hover:bg-stone-500 active:bg-stone-700"
                >
                  About the album
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex h-auto w-fit flex-col overflow-hidden rounded-md border border-neutral-700 transition-all hover:scale-105"
        >
          <p class="p-8 text-center font-loud text-5xl uppercase text-white underline">
            Endorphins
          </p>
          <div class="flex justify-center">
            <img
              src="/public/assets/images/endorphins.jpg"
              alt="'Escape' Album Cover"
              class="h-fit max-w-80"
            />
          </div>
          <div class="flex justify-center p-6">
            <div
              class="flex w-full max-w-screen-lg flex-col items-center justify-center rounded-lg bg-stone-800 p-8 shadow-lg"
            >
              <h1 class="p-6 text-center font-thedark text-4xl text-white">Alleviate</h1>
              <audio controls class="w-full">
                <source src="/public/assets/music/Unstoppable Force.mp3" type="audio/mp3" />
              </audio>
              <div class="p-6">
                <button
                  class="font:thin w-full rounded-lg bg-stone-400 p-6 px-4 py-2 text-white transition-all hover:scale-105 hover:bg-stone-500 active:bg-stone-700"
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
          class="mt-16 w-auto rounded-md border border-neutral-700 bg-black p-4 text-3xl text-white transition-all hover:scale-105 hover:bg-neutral-900"
        >
          Check out our Spotify
        </button>
      </a>
    </div>

    <h1 class="pt-10 p-4 justify-center items-center text-center font-thedark text-6xl text-white">
      Scared to Death
    </h1>
    <h2 class="p-4 pl-10 pr-10 text-center font-thin text-white">
      Fear isn’t the enemy—it’s the fuel that drives us to the edge and beyond.
    </h2>
    <div class="grid grid-cols-1 gap-10 gap-x-12 pb-8 pt-1 lg:grid-cols-2">
      <div class="">
        <h2 class="p-1 font-grunge text-4xl text-white first-letter:text-5xl hover:text-stone-300">
          1. Ring the Alarm
        </h2>
        <h2 class="p-1 font-grunge text-4xl text-white first-letter:text-5xl hover:text-stone-300">
          2. Ring the Alarm
        </h2>
        <h2 class="p-1 font-grunge text-4xl text-white first-letter:text-5xl hover:text-stone-300">
          3. Ring the Alarm
        </h2>
        <h2 class="p-1 font-grunge text-4xl text-white first-letter:text-5xl hover:text-stone-300">
          4. Ring the Alarm
        </h2>
        <h2 class="p-1 font-grunge text-4xl text-white first-letter:text-5xl hover:text-stone-300">
          5. Ring the Alarm
        </h2>
      </div>
      <div class="">
        <h2 class="p-1 font-grunge text-4xl text-white first-letter:text-5xl hover:text-stone-300">
          6. Ring the Alarm
        </h2>
        <h2 class="p-1 font-grunge text-4xl text-white first-letter:text-5xl hover:text-stone-300">
          7. Ring the Alarm
        </h2>
        <h2 class="p-1 font-grunge text-4xl text-white first-letter:text-5xl hover:text-stone-300">
          8. Ring the Alarm
        </h2>
        <h2 class="p-1 font-grunge text-4xl text-white first-letter:text-5xl hover:text-stone-300">
          9. Ring the Alarm
        </h2>
        <h2 class="p-1 font-grunge text-4xl text-white first-letter:text-5xl hover:text-stone-300">
          10. Ring the Alarm
        </h2>
      </div>
    </div>

    <div></div>
  </div>
</template>
