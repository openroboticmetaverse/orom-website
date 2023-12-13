<template>
  <div class="p-10 h-full max-w-sm">
    <NuxtLink :to="`/projects/${project.id}`">
      <div class="project-card">
        <div class="image-container mb-4">
          <!-- New div for the image -->
          <nuxt-img class=" " provider="cloudinary" :src="`${project.fullImage}`" alt="" />
        </div>
        <div class="flex items-center mb-3">
          <h2 class="text-lg font-medium">{{ project.title }}</h2>
        </div>
        <div class="flex flex-col justify-between flex-grow">
          <div
            class="mt-3 min-h-12xl hover:text-teal-300 duration-200 inline-flex items-center"
          >
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
const { project } = defineProps(["project"]);
</script>

<style scoped>
.image-container {
  background-color: white; /* White background for the image */
}
</style>