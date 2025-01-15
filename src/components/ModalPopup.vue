<script setup>
const props = defineProps({
  show: Boolean,
  heading: String,
  text: String
})
props;
</script>

<template>
  <Transition name="fade">
    <div v-if="show" class="flex fixed bg-black bg-opacity-65 w-dvw h-dvh z-[100] items-center justify-center md:p-16 top-0" @click.self="$emit('close')">
      <div class=" flex flex-col items-start max-w-screen-2xl w-full h-full bg-black border border-neutral-800 bg-opacity-100 p-4 md:p-8 rounded-lg">
        <div class="flex justify-end w-full">

          <button @click="$emit('close')" class="text-white hover:bg-neutral-900 rounded-md transition-all duration-200">
            <img src="/assets/icons/close.svg" alt="Close popup" class="w-12 invert brightness-0">
          </button>
        </div>
        <div class="w-full h-full overflow-scroll md:px-8">
          <slot class="w-full"></slot>
        </div>

      </div>
    </div>
  </Transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
