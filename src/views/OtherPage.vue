<script setup>
import Main from '@/components/Main.vue'
import { ref } from 'vue'
import { nanoid } from 'nanoid'
import { useStorage } from '@vueuse/core'
import confetti from 'canvas-confetti'

const newItems = ref('')
const earthtricks = useStorage('earthtricks',[])

const addItems = () => {
  if (newItems.value) {
    earthtricks.value.push({ id: nanoid(), name: newItems.value })
    newItems.value = ''
  }
}

const deleteItems = id => {
  const removeIndex = earthtricks.value.findIndex(earthly => earthly.id === id)
  earthtricks.value.splice(removeIndex, 1)
  confetti({ particleCount: 300, spread: 1000, origin: { y: 1} })
}
</script>

<template>
  <main>
    <form class="newEarthItems" @submit.prevent="addItems">
      <input
       id="newItems"
       autocomplete="off"
       type="text"
       placeholder="Like to add some basic coffee items?"
       v-model="newItems"
       />
    <button id="addButton" type="submit">Add</button>
   </form>
   <ul>
    <li v-for="earthly in earthtricks" @click=deleteItems>{{ earthly.id }}
    {{ earthly.name }}
    </li>
   </ul>
  </main>
</template>

<style lang="postcss" scoped>
main{
  @apply mt-8 flex flex-col justify-center items-center gap-8;
}
form {
  @apply mt-8 flex focus-within:ring-8 focus-within:ring-blue-900 focus-within:rounded-sm;
  input {
    @apply bg-white p-2 w-80 text-2xl rounded-l-md outline-none;
  }
  button {
    @apply bg-blue-900 p-2 text-2xl font-bold rounded-r-md text-white;
    &:hover{
      @apply bg-amber-300 text-black;
    }
  }
}
ul {
  @apply flex flex-col items-center justify-center rounded-lg;
  li {
    @apply bg-white m-2 p-2 w-96 text-center;
    &:hover {
      @apply bg-amber-300 text-blue-900 font-bold;
    }
  }
}
</style>