<script>
import MainCoffeeSingle from './MainCoffeeSingle.vue';
</script>

<template>
    <div class="wrapper">
        <MainCoffeeSingle v-for="n in 20" />
    </div>
</template>

<style scoped lang="postcss">
.wrapper {
    @apply container mx-auto flex flex-col gap-4 py-4;
}
</style>