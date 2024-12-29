<script setup>
import {RouterView} from 'vue-router'
import NavBar from './components/Navbar.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <NavBar />
  <main>
    <RouterView />
  </main>
  <FooterSection />
</template>
