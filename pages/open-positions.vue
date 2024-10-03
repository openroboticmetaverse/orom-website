<template>
  <div class="py-4 sm:py-6 md:py-8">
    <div class="mb-4 sm:mb-6 md:mb-8 text-center">
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        Open <span class="gradient-text-left">Positions</span>
      </h1>
      <p class="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
        Join our team and help shape the future of robotics! Check out our current openings below.
      </p>
    </div>

    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PositionCard 
          v-for="(position, index) in positions" 
          :key="position.id" 
          :position="position"
          :style="{ animationDelay: `${index * 100}ms` }"
          class="fade-in-up"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import PositionCard from '~/components/PositionCard.vue';

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
</script>

<style scoped>
.fade-in-up {
  animation: fadeInUp 0.5s ease forwards;
  opacity: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
