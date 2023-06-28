<script setup lang="ts">
interface MovieFeed {
  title: string
  poster: string
  year: string
  id: string
  rate: string
  link?: string
}

defineProps<MovieFeed>()
</script>
<template>
  <div class="mr-8">
    <img :src="poster" alt="movie poster" class="h-48 w-96 rounded-lg" />
    <div class="flex mt-4 justify-between">
      <h2 class="text-white text-xl">{{ title }}</h2>
    </div>
  </div>
</template>

<style scoped></style>
