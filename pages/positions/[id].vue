<template>
  <div class="container mx-auto px-4 py-8">
    <NuxtLink to="/open-positions" class="text-teal-300 hover:text-teal-200 mb-4 inline-block">
      &larr; Back to Open Positions
    </NuxtLink>
    <div v-if="position" class="bg-gray-800 rounded-lg shadow-md p-8">
      <h1 class="text-3xl font-semibold mb-4">{{ position.title }}</h1>
      <p class="text-gray-300 mb-6">{{ position.description }}</p>
      <div class="flex flex-wrap gap-2 mb-6">
        <span v-for="tag in position.tags" :key="tag" class="bg-teal-600 text-white px-2 py-1 rounded-full text-sm">
          {{ tag }}
        </span>
      </div>
      <!-- Add more detailed information about the position here -->
    </div>
    <div v-else>
      <p>Position not found.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const positionId = parseInt(route.params.id);

// This is a placeholder. In a real application, you'd fetch this data from an API or store.
const positions = ref([
  {
    id: 1,
    title: 'Frontend Developer',
    description: 'Join our team to create amazing user interfaces for our robotics platform.',
    tags: ['Vue.js', 'JavaScript', 'CSS'],
  },
  {
    id: 2,
    title: 'Robotics Engineer',
    description: 'Help design and develop cutting-edge robotic systems.',
    tags: ['ROS', 'C++', 'Python'],
  },
  // Add more positions as needed
]);

const position = computed(() => positions.value.find(p => p.id === positionId));
</script>
