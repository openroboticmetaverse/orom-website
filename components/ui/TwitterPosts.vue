<template>
  <div class="p-4 sm:p-10 max-w-3xl mx-auto">
    <div class="flex flex-col sm:flex-row sm:space-x-4 sm:space-y-0 space-y-4">
      <!-- First tweet -->
      <div
        class="flex-1 sm:min-w-[320px] rounded-xl bg-gradient-to-tr from-teal-600 via-purple-400 to-blue-300 p-0.5 hover:bg-gradient-to-tl hover:shadow-purple-500 duration-300 shadow-md"
      >
        <div class="flex rounded-lg h-full bg-gray-800 p-4 border border-gray-800 flex-col">
          <blockquote class="twitter-tweet" data-theme="dark">
            <p lang="en" dir="ltr">
              We are excited!
              <a href="https://t.co/whEmDBLVCD">https://t.co/whEmDBLVCD</a>
            </p>
            &mdash; open robotic metaverse (@orom_org)
            <a href="https://twitter.com/orom_org/status/1796533281162412065?ref_src=twsrc%5Etfw">May 31, 2024</a>
          </blockquote>
        </div>
      </div>
      <!-- Second tweet -->
      <div
        class="flex-1 sm:min-w-[320px] rounded-xl bg-gradient-to-tr from-teal-600 via-purple-400 to-blue-300 p-0.5 hover:bg-gradient-to-tl hover:shadow-purple-500 duration-300 shadow-md"
      >
        <div class="flex rounded-lg h-full bg-gray-800 p-4 border border-gray-800 flex-col">
          <blockquote class="twitter-tweet" data-theme="dark">
            <p lang="en" dir="ltr">
              Hello X.<br /><br />
              We heard the biggest open-source robotic community is here
            </p>
            &mdash; open robotic metaverse (@orom_org)
            <a href="https://twitter.com/orom_org/status/1783650954086072763?ref_src=twsrc%5Etfw">April 26, 2024</a>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  // Dynamically load the Twitter widgets script
  const loadTwitterWidgets = () => {
    if (window.twttr) {
      window.twttr.widgets.load();
    } else {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://platform.twitter.com/widgets.js';
      script.charset = 'utf-8';
      script.onload = () => window.twttr.widgets.load();
      document.head.appendChild(script);
    }
  };

  loadTwitterWidgets();
});
</script>

<style scoped>
.twitter-tweet {
  background: #1a1a1a !important; /* Force dark background */
  color: #ffffff !important; /* Force white text */
  border: 1px solid #333333 !important; /* Darker border */
  padding: 16px !important; /* Add padding */
  border-radius: 8px !important; /* Rounded corners */
}

.twitter-tweet a {
  color: #1da1f2 !important; /* Twitter link color */
}
</style>
