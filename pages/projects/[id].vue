<template>
  <div>
    <CommonProjectDetails :project="project"></CommonProjectDetails>
  </div>
</template>
  
<script setup>
import { computed } from "vue";
// grab the projects from the pinia store
const projectsStore = useProjectsStore();
const { projects } = storeToRefs(projectsStore);

// to fill head tag based on the selected project
const route = useRoute();
const projectId = route.params.id;
const project = computed(() => {
  return projectsStore.projects.find((p) => p.id === projectId);
});

const baseUrl = "http://res.cloudinary.com/dilan3qfq/image/upload/";
const secureUrl = "https://res.cloudinary.com/dilan3qfq/image/upload/";
const baseImageUrl = project.value ? `${baseUrl}${project.value.image}` : "";
const secureImageUrl = project.value
  ? `${secureUrl}${project.value.image}`
  : "";
// add head tag
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
      property: "og:type",
      content: "website",
    },
    {
      property: "og:site_name",
      content: "open robotic metaverse",
    },
    {
      property: "og:updated_time",
      content: "updatedtime",
    },
    {
      property: "og:image",
      itemprop: "image",
      content: baseImageUrl,
    },
    {
      property: "og:image:secure_url",
      content: secureImageUrl,
    },
    {
      property: "og:image:type",
      content: "image/png",
    },
    {
      property: "og:image:width",
      content: "256",
    },
    {
      property: "og:image:height",
      content: "256",
    },
  ],
});

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: "Project not found" });
}
</script>