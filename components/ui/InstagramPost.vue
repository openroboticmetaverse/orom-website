<template>
    <div class="  sm:p-10 overflow-hidden">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 overflow-hidden gap-6">
        <div
          v-for="src in srcs"
          :key="src"
          class="flex rounded-xl overflow-hidden bg-gradient-to-tr from-teal-600 via-purple-400 to-blue-300 p-0.5 hover:bg-gradient-to-tl hover:shadow-purple-500 duration-300 shadow-md"
        >
          <div class="flex rounded-lg bg-gray-800 p-4 border border-gray-800 flex-col w-full">
            <blockquote
              class="instagram-media instagram-blockquote"
              data-instgrm-captioned
              :data-instgrm-permalink="src"
              data-instgrm-version="14"
            ></blockquote>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  
  const props = defineProps({
    srcs: {
      type: Array,
      required: true,
    },
  });
  
  onMounted(() => {
    // Dynamically load the Instagram embed script
    if (!window.instgrm) {
      const script = document.createElement('script');
      script.async = true;
      script.src = '//www.instagram.com/embed.js';
      script.onload = () => window.instgrm.Embeds.process();
      document.head.appendChild(script);
    } else {
      window.instgrm.Embeds.process();
    }
  });
  </script>
  
  <style scoped>
  .instagram-blockquote {
    background: #FFF;
    border: 0;
    border-radius: 3px;
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.5), 0 1px 10px 0 rgba(0, 0, 0, 0.15);
    margin: 1px;
    max-width:540px; min-width:326px;/* Allows the blockquote to shrink if necessary */
    padding: 0;
    width: 100%; /* Ensures the blockquote takes full width of its container */
  }
  </style>
  