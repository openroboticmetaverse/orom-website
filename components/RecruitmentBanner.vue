<template>
  <div v-if="!dismissed" class="bg-yellow-400 bg-opacity-80 text-black py-1 px-4 overflow-hidden">
    <div class="container mx-auto flex items-center justify-between">
      <div class="flex-1 overflow-hidden">
        <div class="animate-marquee whitespace-nowrap">
          Are you an innovator? Are you a leader? Come and build the future with us! We are actively recruiting. Check our 
          <NuxtLink to="/open-positions" class="underline font-semibold hover:text-gray-800">open positions</NuxtLink> now!
        </div>
      </div>
      <div class="flex items-center space-x-2 flex-shrink-0">
        <NuxtLink
          to="/open-positions"
          class="bg-black text-yellow-400 px-3 py-1 rounded-full text-sm font-semibold hover:bg-gray-800 transition duration-300"
        >
          Join now!
        </NuxtLink>
        <button @click="dismissBanner" class="text-black hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const dismissed = ref(false);

const dismissBanner = () => {
  dismissed.value = true;
};
</script>

<style scoped>
@keyframes marquee {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}

.animate-marquee {
  display: inline-block;
  animation: marquee 20s linear infinite;
}
</style>
