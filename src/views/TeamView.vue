<script setup></script>
<template>
  <div class="w-dvw min-h-dvh bg-neutral-900 flex flex-col items-center">
    <div class="h-[80px] w-full"></div>
    <div class="max-w-screen-2xl p-8">
      <h1 class="flex text-white h-auto w-full text-6xl justify-center font-thedark mb-8">Team</h1>
      <p class="text-white text-lg md:mx-16 text-center">
        We are part of the 02-1105 Barbers Hill High School Chapter 1 in Mont Belvieu, Texas during
        the 2024-2025 school year. Our theme for this website is a local up-and-coming rock band,
        Stage Fright.
      </p>
      <div class="w-auto p-4 md:p-8 py-16 flex flex-col justify-center items-center">
        <div
          class="h-full w-fit grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 sm:grid-cols-1 gap-8 justify-items-center"
        >
          <div
            class="max-w-80 bg-black flex flex-col border border-neutral-700 h-auto hover:scale-105 transition-all rounded-md overflow-hidden w-full"
          >
            <img src="/assets/images/clin.jpg" alt="'Escape' Album Cover" class="w-full h-fit" />
            <div class="flex flex-col p-8">
              <p class="text-white text-center text-3xl uppercase font-loud underline">
                Clin Shaiju
              </p>
              <p class="text-white text-center text-xl uppercase font-loud">Technical Manager</p>
            </div>
          </div>
          <div
            class="max-w-80 bg-black flex flex-col border border-neutral-700 h-auto hover:scale-105 transition-all rounded-md overflow-hidden w-full"
          >
            <img
              src="/assets/images/josh.png"
              alt="'Scared To Death' Album Cover"
              class="w-full h-fit"
            />
            <div class="flex flex-col p-8">
              <p class="text-white text-center text-3xl uppercase font-loud underline">
                Joshua Zamora
              </p>
              <p class="text-white text-center text-xl uppercase font-loud">Design Manager</p>
            </div>
          </div>
          <div
            class="max-w-80 bg-black flex flex-col border border-neutral-700 h-auto hover:scale-105 transition-all rounded-md overflow-hidden w-full"
          >
            <img
              src="/assets/images/drew.jpg"
              alt="'Endorphins' Album Cover"
              class="w-full h-fit"
            />
            <div class="flex flex-col p-8">
              <p class="text-white text-center text-3xl uppercase font-loud underline">
                Drew Hunt
              </p>
              <p class="text-white text-center text-xl uppercase font-loud">Art Manager</p>
            </div>
          </div>
          <div
            class="max-w-80 bg-black flex flex-col border border-neutral-700 h-auto hover:scale-105 transition-all rounded-md overflow-hidden w-full"
          >
            <img src="/assets/images/vic.jpg" alt="'Escape' Album Cover" class="w-full h-fit" />
            <div class="flex flex-col p-8">
              <p class="text-white text-center text-3xl uppercase font-loud underline">
                Victoria Novak
              </p>
              <p class="text-white text-center text-xl uppercase font-loud">Content Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
