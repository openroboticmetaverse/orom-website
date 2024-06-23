<template>
    <div class="p-4 sm:p-10 max-w-sm">
      <div
        class="flex max-w-sm rounded-xl bg-gradient-to-tr from-teal-600 via-purple-400 to-blue-300 p-0.5 hover:bg-gradient-to-tl hover:shadow-purple-500 duration-300 shadow-md"
      >
        <div class="flex rounded-lg h-full bg-gray-800 p-4 border border-gray-800 flex-col">
          <iframe
            :src="src"
            height="100%"
            width="100%"
            frameborder="0"
            allowfullscreen=""
            title="Embedded post"
            class="w-full h-96 rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    src: {
      type: String,
      required: true,
    },
  });
  </script>
  