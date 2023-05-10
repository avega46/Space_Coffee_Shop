<script setup>
import MainSearch from './MainSearchBar.vue'
</script>

<template>
    <div class="wrapper">
        <MainSearch />
    </div>
</template>

<style scoped lang="postcss">
.wrapper {
    @apply container mx-auto flex flex-col gap-4 py-4;
}

</style>
