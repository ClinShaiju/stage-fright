<script setup>
const props = defineProps({
  show: Boolean,
  text: String,
})
props
</script>

<template>
    <Transition name="fade">
      <div
        v-show="show"
        class="fixed m-8 z-[100] md:right-0 md-right-1/2 flex flex-row w-72 h-16 bg-green-200 bg-opacity-100 rounded-md border-green-700 border border-r-3 border-b-4 items-center justify-between p-4 hover:cursor-pointer"
        @click="$emit('close')"
      >
        <p class="text-green-800 font-bold">{{ text }}</p>
        <button class="text-green-800 font-bold"><a>X</a></button>
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
