<template>
  <div
    class="position-card bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex flex-col h-full relative overflow-hidden border border-cyan-300/30 hover:border-cyan-300/50">
    <div class="grid-overlay absolute inset-0"></div>
    <div class="flex-grow relative z-10">
      <h3 class="text-xl font-semibold mb-2 text-white">{{ position.title }}</h3>
      <p class="text-gray-300 mb-4">{{ position.shortDescription }}</p>
    </div>
    <div class="mt-auto relative z-10">
      <div class="flex flex-wrap gap-2 mb-4">
        <span v-for="tag in position.tags" :key="tag"
          class="bg-teal-600/30 text-teal-300 px-3 py-1 rounded-full text-sm border border-teal-500/50 hover:bg-teal-600/50">
          {{ tag }}
        </span>
      </div>
      <NuxtLink :to="`/positions/${position.id}`"
        class="learn-more-link mt-4 inline-block text-teal-300 hover:text-teal-200 group">
        Learn More
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          class="w-4 h-4 ml-2 inline transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24">
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

<style scoped>
.position-card {
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.1);
}

.grid-overlay {
  background-image:
    linear-gradient(to right, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  opacity: 0.3;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.position-card:hover .grid-overlay {
  opacity: 0.4;
  transform: scale(1.05);
}

.learn-more-link {
  position: relative;
  overflow: hidden;
}

.learn-more-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: currentColor;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.learn-more-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
</style>