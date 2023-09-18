<template>
  <div class="p-10 h-full max-w-sm ">
    <div class="flex rounded-lg h-full bg-white p-8 flex-col">
      <div class="image-container mb-4"> <!-- New div for the image -->
        <img class="thumb " :src="`${project.image}`" alt="" />
      </div>
      <div class="flex items-center mb-3 ">
        <h2 class="text-black text-lg font-medium">{{ project.title }}</h2>
      </div>
      <div class="flex flex-col justify-between flex-grow">
        <NuxtLink :to="`/projects/${project.id}`" class="mt-3 min-h-12xl text-black hover:text-blue-600 inline-flex items-center">
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
.thumb{
  min-height: 120px;
  max-height:120px;
  max-width:70%;
  margin: 0 auto;
  w-full:true;
}

.image-container {
  background-color: white; /* White background for the image */
}
</style>