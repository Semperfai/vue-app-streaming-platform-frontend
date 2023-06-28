<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import { movies } from '../mocks/movies'
import MovieCard from './MovieCard.vue'
</script>
<template>
  <div class="mt-6">
    <carousel :autoplay="2000" :wrap-around="true" :items-to-show="3.5">
      <slide v-for="movie in movies" :key="movie.id">
        <movie-card v-bind="movie" />
      </slide>
      <template #addons>
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<style>
.carousel__viewport {
  @apply pl-4;
}
</style>
