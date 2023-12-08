<template>
  <div class="p-10 h-full max-w-sm ">
    <div class="flex rounded-lg h-full bg-gray-800 p-2 border border-gray-800 hover:border-gray-400 duration-300   flex-col">
      <div class="image-container mb-4"> <!-- New div for the image -->
        <img class=" " :src="`${project.image}`" alt="" />
      </div>
      <div class="flex items-center mb-3 ">
        <h2 class="text-lg font-medium">{{ project.title }}</h2>
      </div>
      <div class="flex flex-col justify-between flex-grow">
        <!-- <NuxtLink :to="`/projects/${project.id}`" class="mt-3 min-h-12xl hover:text-blue-600 duration-200 inline-flex items-center"> -->
        <NuxtLink :to="`#`" class="mt-3 min-h-12xl hover:text-blue-600 duration-200 inline-flex items-center">
          Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const { project } = defineProps(['project'])
</script>

<style scoped>

.image-container {
  background-color: white; /* White background for the image */
}
</style>