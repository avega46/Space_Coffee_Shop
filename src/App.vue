<script setup>
import NavMenu from '@/components/NavMenu.vue'

import { ref, onMounted } from 'vue'
const showHomePage = ref(true)

onMounted(() => {
  if (window.location.pathname === '/') {
    showHomePage.value = true 
  } else {
    showHomePage.value = false
  }
})
</script>


<template>
  <NavMenu />
  <HomePage v-if="showHomePage" />
  <div v-else>
    <h1>This is Another "Page"</h1>
  </div>
  <RouterView />
</template>
