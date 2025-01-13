<script setup>
const props = defineProps({
  show: Boolean,
})
props;
</script>

<template>
  <Transition name="fade">
    <div v-if="show" class="flex fixed bg-black bg-opacity-65 w-dvw h-dvh z-[100] items-center justify-center">
      <div class=" max-w-screen-2xl w-full h-96 bg-black bg-opacity-100">
        <button @click="$emit('close')" class="text-white">Close</button>

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
