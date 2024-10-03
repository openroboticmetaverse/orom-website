<template>
  <div class="project-page bg-gray-900 text-white">
    <div class="container mx-auto px-4 py-12">
      <NuxtLink to="/projects" class="back-button mb-6 inline-block">
        <span class="inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Projects
        </span>
      </NuxtLink>
      
      <div class="project-content flex flex-col md:flex-row gap-12">
        <div class="project-text md:w-1/2">
          <h1 class="project-title text-4xl font-bold mb-4">
            {{ project.title }}
          </h1>
          <p class="project-description text-xl text-gray-300 leading-relaxed mb-8">
            {{ project.shortDescription }}
          </p>
          
          <CommonProjectDetails :project="project" />
        </div>
        
        <div class="project-images md:w-1/2 space-y-8">
          <NuxtImg
            v-if="project.fullImage"
            provider="cloudinary"
            :src="project.fullImage"
            alt="Project main image"
            class="w-full h-auto rounded-lg shadow-lg"
          />
          <!-- Add more images here if available -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useProjectsStore } from '~/stores/store';

const projectsStore = useProjectsStore();
const route = useRoute();
const projectId = route.params.id;

const project = computed(() => {
  return projectsStore.projects.find((p) => p.id === projectId);
});

// Head meta tags
useHead({
  title: computed(() => `${project.value?.title || 'Project'} | Open Robotic Metaverse`),
  meta: [
    {
      name: "description",
      content: computed(() => project.value?.shortDescription || 'Project details'),
    },
    // Add other meta tags as needed
  ],
});

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: "Project not found" });
}
</script>

<style scoped>
.project-page {
  min-height: 100vh;
}

.back-button {
  @apply text-teal-300 hover:text-teal-400 transition duration-300 ease-in-out text-lg;
}

.project-title {
  @apply text-white;
  background: linear-gradient(to right, #4fd1c5, #63b3ed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>