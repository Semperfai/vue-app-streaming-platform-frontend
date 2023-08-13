<script setup lang="ts">
import { ref } from 'vue'
import TimeControl from './TimeControl.vue'
import VolumeControl from './VolumeControl.vue'

const video = ref()
const player = ref()
const videoDuratiion = ref<number>(0)
const videoCurrentTime = ref<number>(0)
const setVideoData = () => {
  if (video.value.readyState) {
    videoDuratiion.value = video.value.duration
  }
}
const progress = () => {
  videoCurrentTime.value = video.value.currentTime
}

const onTimeChange = (value: number) => {
  video.value.currentTime = value
  progress()
}
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
      @loadedmetadata="setVideoData"
      @progress="progress"
      @timeupdate="progress"
    />
    <time-control
      :video-duratiion="videoDuratiion"
      :current-video-position="videoCurrentTime"
      :is-active="true"
      @on-time-change="onTimeChange"
    />
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
