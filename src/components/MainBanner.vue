<script setup lang="ts">
import { Banner } from '../types'
const bannerMock: Banner = {
  title: 'Interstellar',
  plot: 'When Earth became uninhabitable in the feature, a farmer and ex-NASA pilot, Joseph Cooper tasks to pilot spacecraft along with a team if researchers, to finde a new planet for humans',
  year: '2014',
  id: '1',
  genre: 'Fiction',
  duration: '1h 53min',
  poster: 'https://miro.medium.com/v2/resize:fit:1200/1*Pier_1TxinF0QdIXekZpVQ.jpeg'
}
const bg = `url(${bannerMock.poster})`
</script>
<template>
  <div class="banner flex p-8 w-full rounded-2xl drop-shadow-xl cursor-pointer">
    <div class="text-white self-end">
      <h1 class="text-4xl mb-2 font-bold">{{ bannerMock.title }}</h1>
      <p>{{ bannerMock.plot }}</p>
      <div class="mt-6 flex justify-between w-[30%]">
        <span>{{ bannerMock.year }}</span>
        <span>{{ bannerMock.genre }}</span>
        <span>{{ bannerMock.duration }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner {
  background: linear-gradient(rgba(255, 255, 255, 0%), #262c31), v-bind(bg);
  background-size: cover;
}
</style>
