<template>
    <div class="p-10 h-full max-w-sm">
      <div
        class="flex max-w-sm rounded-xl bg-gradient-to-tr from-teal-600 via-purple-400 to-blue-300 p-0.5 hover:bg-gradient-to-tl hover:shadow-purple-500 duration-300 shadow-md"
      >
        <div
          class="flex rounded-lg h-full bg-gray-800 p-2 border border-gray-800 flex-col"
        >
          <blockquote class="twitter-tweet" data-theme="dark">
            <p v-html="tweetContent"></p>&mdash;
            open robotic metaverse (@orom_org) <a :href="tweetUrl">{{ tweetDate }}</a>
          </blockquote>
          <div ref="tweetEmbedContainer"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  
  const props = defineProps({
    tweetContent: String,
    tweetUrl: String,
    tweetDate: String,
  });
  
  const tweetEmbedContainer = ref<HTMLElement | null>(null);
  
  onMounted(() => {
    // Dynamically load the Twitter widgets script
    const loadTwitterWidgets = () => {
      if (window.twttr) {
        window.twttr.widgets.load();
      } else {
        const script = document.createElement('script');
        script.async = true;
        script.src = "https://platform.twitter.com/widgets.js";
        script.charset = "utf-8";
        script.onload = () => window.twttr.widgets.load();
        document.head.appendChild(script);
      }
    };
  
    loadTwitterWidgets();
  });
  </script>
  
  <style scoped>
  .twitter-tweet {
    background: #1a1a1a !important;
    /* Force dark background */
    color: #ffffff !important;
    /* Force white text */
    border: 1px solid #333333 !important;
    /* Darker border */
    padding: 16px !important;
    /* Add padding */
    border-radius: 8px !important;
    /* Rounded corners */
  }
  
  .twitter-tweet a {
    color: #1da1f2 !important;
    /* Twitter link color */
  }
  </style>
  