<script setup>
import { ref } from 'vue'
import {useAuth} from '@/composables/useAuth'

const { isAuthenticated, logout, user } = useAuth()

const brand = ref('🌌Space Coffee Shop☕')

</script>

<template>
  <nav>
    <div class="wrapper">
      <RouterLink :to="{ name: 'Home'}" class="brand">
        <span class="brand-title">{{ brand }}</span>
      </RouterLink>
      <div class="menu">
        <div v-if="isAuthenticated">
          <p v-show="isAuthenticated" class="px-2 py-4">Welcome back <strong><i> {{ user.name }}</i></strong></p>
        <RouterLink :to="{name: 'Coffees'}" href="#" class="menu-item">Coffees</RouterLink>
        <RouterLink :to="{name: 'Settings'}" href="#" class="menu-item">Settings</RouterLink>
        <RouterLink :to="{name: 'Other'}" href="#" class="menu-item">Other</RouterLink>
        <button href="#" class="menu-logout" @click="logout">Logout</button>
        </div>
        <div v-else>
        <RouterLink :to="{name: 'Login'}" href="#" class="menu-login">Login</RouterLink>
        </div>
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
