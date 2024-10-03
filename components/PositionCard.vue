<template>
  <div class="position-card bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
    <h3 class="text-xl font-semibold mb-2">{{ position.title }}</h3>
    <p class="text-gray-300 mb-4">{{ position.shortDescription }}</p>
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
</template>

<script setup>
import { ref, onMounted } from 'vue';

defineProps({
  position: {
    type: Object,
    required: true,
  },
});

const cardRef = ref(null);

onMounted(() => {
  if (cardRef.value) {
    cardRef.value.style.opacity = '0';
    cardRef.value.style.transform = 'translateY(20px)';
    setTimeout(() => {
      cardRef.value.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      cardRef.value.style.opacity = '1';
      cardRef.value.style.transform = 'translateY(0)';
    }, 100);
  }
});
</script>

<style scoped>
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

.learn-more-link svg {
  transition: transform 0.3s ease;
}

.learn-more-link:hover svg {
  transform: translateX(4px);
}
</style>