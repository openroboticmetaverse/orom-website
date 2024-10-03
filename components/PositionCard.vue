<template>
  <div class="position-card bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex flex-col h-full">
    <div class="flex-grow">
      <h3 class="text-xl font-semibold mb-2">{{ position.title }}</h3>
      <p class="text-gray-300 mb-4">{{ position.shortDescription }}</p>
    </div>
    <div class="mt-auto">
      <div class="flex flex-wrap gap-2 mb-4">
        <span v-for="tag in position.tags" :key="tag" class="bg-teal-600 text-white px-2 py-1 rounded-full text-sm">
          {{ tag }}
        </span>
      </div>
      <NuxtLink :to="`/positions/${position.id}`" class="learn-more-link mt-4 inline-block text-teal-300 hover:text-teal-200">
        Learn More
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2 inline" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  position: {
    type: Object,
    required: true,
  },
});
</script>