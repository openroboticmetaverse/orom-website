<template>
  <div class="project-card">
    <NuxtLink :to="`/projects/${project.id}`" class="block h-full">
      <div class="card-wrapper">
        <div class="card-content">
          <div class="image-container">
            <nuxt-img
              class="w-full h-full object-cover"
              provider="cloudinary"
              :src="`${project.fullImage}`"
              loading="lazy"
              alt=""
            />
          </div>
          <div class="text-content">
            <h2 class="title">{{ project.title }}</h2>
            <p class="description">{{ project.shortDescription }}</p>
            <div class="learn-more">
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
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
const { project } = defineProps(["project"]);
</script>

<style scoped>
.project-card {
  @apply w-full max-w-sm;
}
.card-wrapper {
  @apply flex rounded-xl bg-gradient-to-tr from-teal-600 via-purple-400 to-blue-300 p-0.5 hover:bg-gradient-to-tl hover:shadow-purple-500 duration-300 shadow-md h-[270px]; /* Reduced height */
}
.card-content {
  @apply flex rounded-lg h-full w-full bg-gray-800 p-2 border border-gray-800 flex-col;
}
.image-container {
  @apply mb-2 h-36 bg-white overflow-hidden; /* Reduced height and margin */
}
.text-content {
  @apply flex flex-col flex-grow;
}
.title {
  @apply text-lg font-medium mb-1 line-clamp-1; /* Reduced to one line */
}
.description {
  @apply text-sm text-gray-300 mb-2 flex-grow line-clamp-2; /* Reduced to two lines */
}
.learn-more {
  @apply mt-auto hover:text-teal-300 duration-200 inline-flex items-center;
}
</style>