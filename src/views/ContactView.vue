<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  setup() {
    const windowWidth = ref(window.innerWidth);
    const windowHeight = ref(window.innerHeight);

    const updateWindowSize = () => {
      windowWidth.value = window.innerWidth;
      windowHeight.value = window.innerHeight;
    };

    onMounted(() => {
      window.addEventListener('resize', updateWindowSize);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', updateWindowSize);
    });

    return {
      windowWidth,
      windowHeight,
    };
  },
};
</script>

<template>
  <div class="bg-black h-dvh flex">
    <h1 class="flex text-white h-dvh w-dvw items-center justify-center text-3xl">Contact Us</h1>
  </div>
</template>
