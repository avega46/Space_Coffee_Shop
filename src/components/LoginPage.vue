<script setup>

import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import { useAuth } from '@/composables/useAuth'
const { login, logout } = useAuth()

const router = useRouter()
const route = useRoute()

const username = ref('')
const password = ref('')

const logUserIn = () => {
    if (login(username.value, password.value)) {
        if (router.query.redirect) {
            router.push(route.query.redirect)
        } else {
            router.push({ name: 'Home' })
        }
    } else {
        logout()
    }
}

</script>
<template>
    <form class="login-form" @submit.prevent="logUserIn">
     <input v-model="username" placeholder="Username" />
     <input v-model="password" placeholder="Password" />
     <button type="submit" class="bg-teal-700 px-4 py-2" @click="login('admin', 'admin')">Log In</button>
    </form>
</template>

<style scoped lang="postcss">
.login-form {
 @apply mx-auto mt-80 flex max-w-md flex-col gap-4 rounded-md p-8 bg-white shadow-lg;
 & input {
    @apply rounded-md px-4 py-2 text-xl ring-2 ring-sky-900;
 }
}
</style>