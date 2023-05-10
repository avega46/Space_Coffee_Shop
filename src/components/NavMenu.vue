<script setup>
import { ref } from 'vue'
const brand = ref('🌌Space Coffee Shop☕')

</script>

<template>
  <nav>
    <div class="wrapper">
      <div class="brand">
        <span class="brand-title">{{ brand }}</span>
      </div>
      <div class="menu">
        <a href="#" class="menu-item">Home</a>
        <a href="#" class="menu-item">Coffees</a>
        <a href="#" class="menu-item">Settings</a>
        <a href="#" class="menu-item">Other</a>
        <a href="#" class="menu-login">Logout</a>
      </div>
    </div>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/other">Other</RouterLink>
  </nav>
</template>

<style scoped lang="postcss" >
nav {
  @apply flex h-20 bg-yellow-50 text-slate-200;
  .wrapper {
    @apply container mx-auto flex w-full items-center justify-between;
    .brand {
      &-title {
        @apply text-3xl font-bold text-gray-800;
      }
    }
    .menu {
      @apply flex gap-3;
      &-item {
        @apply text-gray-900 rounded-md px-4 py-2 hover:bg-blue-900 hover:text-yellow-50;
      }
      &-login {
        @apply rounded-md bg-purple-900 px-4 py-2 hover:bg-red-700 hover:text-black;
      }
    }
  }
}
</style>
