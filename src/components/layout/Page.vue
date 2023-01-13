<script lang="ts" setup>
defineProps<{
	title?: string;
}>()
</script>

<template>
	<section class="bg-movie-black flex h-full min-w-0 flex-1 flex-col overflow-auto">
		<div class="mx-4 my-9 flex justify-between">
			<h1 v-if="title" class="text-4xl font-weight-900 font-bold text-white">{{ title }}</h1>
			<h1 v-else class="text-4xl font-weight-900 font-bold text-white">
				<slot name="title">
				</slot>
			</h1>
			<div>
				<slot name="header"></slot>
			</div>
		</div>
		<div class="mx-4">
			<slot></slot>
		</div>
	</section>
</template>