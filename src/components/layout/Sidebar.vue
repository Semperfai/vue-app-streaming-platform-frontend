<script lang="ts" setup>
import { HomeIcon, FilmIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import { useRoute } from 'vue-router';
import {
	HomeIcon as HomeSolidIcon,
	FilmIcon as FilmSolidIcon,
	CogIcon as CogSolidIcon,
	MagnifyingGlassCircleIcon as MagnifyingGlassSolidIcon
} from '@heroicons/vue/24/solid'
const menu = [
	{
		to: '/', icon: HomeIcon, activeIcon: HomeSolidIcon
	},
	{
		to: '/search', icon: MagnifyingGlassIcon, activeIcon: MagnifyingGlassSolidIcon
	},
	{
		to: '/movies/1', icon: FilmIcon, activeIcon: FilmSolidIcon
	},
]

const route = useRoute()
</script>

<template>
	<nav class="block bg-movie-black-200">
		<div class="relative flex w-30 flex-col p-10 space-y-3 ">
			<router-link v-for="{ to, icon, activeIcon } 
			in menu" :to="to" :key="to"
				:class="[route.path === to ? 'bg-[#282c31] text-white' : 'text-gray-600 hover:bg-[#282c31]', 'flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-lg']">
				<component :is="route.path === to ? activeIcon : icon" class="h-6 w-6"></component>
			</router-link>
		</div>
	</nav>
</template>