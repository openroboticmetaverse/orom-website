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
//  fetch the products

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: "Product not found" });
}
</script>