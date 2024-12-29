<script setup>
import {RouterView} from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <NavBar />
  <main>
    <RouterView />
  </main>
  <FooterSection />
</template>
