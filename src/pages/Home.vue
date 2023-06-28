<script lang="ts" setup>
import { ref } from 'vue'
import Page from '../components/layout/Page.vue'
import Tabs from '../components/Tabs.vue'
import MainBanner from '../components/MainBanner.vue'
import MovieFeed from '../components/MovieFeed.vue'
import FlashNews from '../components/FlashNews.vue'
import ContentRow from '../components/ContentRow.vue'
import { tabsMock } from '../mocks/tabs'

const activeTab = ref<string>(tabsMock[0].id)
const onTabChange = (tabId: string) => {
  activeTab.value = tabId
}
</script>

<template>
  <page>
    <template #title>Home</template>
    <div>
      <tabs :tabs="tabsMock" :active-tab="activeTab" @on-tab-change="onTabChange"></tabs>
    </div>
    <content-row>
      <main-banner />
      <div class="w-full ml-10 max-w-md">
        <flash-news />
      </div>
    </content-row>
    <content-row class="flex-col">
      <h1 class="text-2xl text-white font-bold">Special for you</h1>
      <movie-feed></movie-feed>
    </content-row>
  </page>
</template>
