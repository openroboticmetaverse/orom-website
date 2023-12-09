<template>
  <div>
    <CommonProjectDetails :project="project"></CommonProjectDetails>
  </div>
</template>
  
<script setup>
import { computed } from "vue";
const route = useRoute();
const projectsStore = useProjectsStore();
const { projects } = storeToRefs(projectsStore);


const projectId = route.params.id;

const project = computed(() => {
  return projectsStore.projects.find((p) => p.id === projectId);
});

const baseUrl = 'https://www.openroboticmetaverse.org';
const fullImageUrl = project.value ? `${baseUrl}${project.value.image}` : '';

useHead({
  title: `${project.value.title} | open robotic metaverse `,
  meta: [
    {
      name: "description",
      content: `${project.value.title} | Open Robotic Metaverse`,
    },
        {
      property: "og:title",
      content: `${project.value.title} | Open Robotic Metaverse`,
    },
    {
      property: "og:description",
      content: `${project.value?.idea[1]}`, 
    },
    {
      property: "og:image",
      content: fullImageUrl, 
    },
    {
      property: "og:image:width",
      content: "1200",
    },
    {
      property: "og:image:height",
      content: "630", 
    }
  ],
});

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: "Product not found" });
}
</script>