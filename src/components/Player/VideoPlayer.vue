<script setup lang="ts">
import TimeControl from './TimeControl.vue'
import VolumeControl from './VolumeControl.vue'
</script>
<template>
  <div class="player" ref="player">
    <video
      type="vidoe/mp4"
      allowfullscreen
      ref="video"
      preload="auto"
      class="video-screen"
      src="../../assets/video.mp4"
      controls
    />
    <time-control />
    <volume-control />
  </div>
</template>
<style>
.player {
  @apply w-full rounded-lg aspect-video relative object-cover cursor-pointer;
}
.video-screen {
  @apply aspect-video shadow-sm block w-full h-full cursor-pointer bg-movie-black;
}

::-webkit-media-controls {
  display: none;
}
</style>
