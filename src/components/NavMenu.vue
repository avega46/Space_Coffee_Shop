<script setup>
import { ref } from 'vue'
const brand = ref('🌌Space Coffee Shop☕')

</script>

<template>
  <nav>
    <div class="wrapper">
      <RouterLink :to="{ name: 'Home'}" class="brand">
        <span class="brand-title">{{ brand }}</span>
      </RouterLink>
      <div class="menu">
        <RouterLink :to="{name: 'Home'}" href="#" class="menu-item">Coffees</RouterLink>
        <RouterLink :to="{name: 'Home'}" href="#" class="menu-item">Settings</RouterLink>
        <RouterLink :to="{name: 'Other'}" href="#" class="menu-item">Other</RouterLink>
        <RouterLink :to="{name: 'Login'}" href="#" class="menu-login">Login</RouterLink>
        <RouterLink :to="{name: 'Home'}" href="#" class="menu-logout">Logout</RouterLink>
        
      </div>
      </div>
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
        @apply rounded-md bg-teal-800 px-4 py-2 hover:bg-yellow-500 hover:text-black;
      }
      &-logout {
        @apply rounded-md bg-purple-900 px-4 py-2 hover:bg-red-700 hover:text-black;
      }
    }
  }
}
</style>
