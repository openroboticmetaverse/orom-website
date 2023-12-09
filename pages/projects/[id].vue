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

const baseUrl = 'http://www.openroboticmetaverse.org';
const secureUrl = 'https://www.openroboticmetaverse.org';
const fullBaseImageUrl = project.value ? `${baseUrl}${project.value.image}` : '';
const fullSecureImageUrl = project.value ? `${baseUrl}${project.value.image}` : '';
console.log(fullBaseImageUrl)
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
      content: fullBaseImageUrl, 
    },
    {
      property: "og:image:secure_url",
      content: fullSecureImageUrl, 
    },
    {
      property: "og:image:type",
      content: "image/png", 
    },
    {
      property: "og:image:width",
      content: "400",
    },
    {
      property: "og:image:height",
      content: "400", 
    }
  ],
});

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: "Product not found" });
}
</script>