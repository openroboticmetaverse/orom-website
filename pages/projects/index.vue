<template>
        <div>
            <UiEmptySection>
      <template v-slot:mainTitle2>
        Get Inspired! 
      </template>
      <template v-slot:description>
        Check out some of our projects, contribute your ideas!
      </template>
    </UiEmptySection>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-20">
            <div v-for="p in projects">
                <ProjectCard :project="p" />
            </div>
        </div>
    </div>
</template>
  
<script setup>
import ProjectCard from '~/components/projects/ProjectCard.vue';
//  fetch the products
const projects = ref([
    {
        "id": "1",
        "title": "Segmentation of Fruits",
        "image": "/pages/projects/segmentation.png"
    },
    {
        "id": "2",
        "title": "GAN for Garden Simulation",
        "image": "/pages/projects/gan.png"
    },
    {
        "id": "3",
        "title": "AI based robotic vision",
        "image": "/pages/projects/bridging.png"
    },
    {
        "id": "4",
        "title": "Robots on the Browser",
        "image": "/pages/projects/browser.png"
    },
    // Add more projects here
]);
useHead({
    title: 'Projects | Nuxt Template',
    meta: [
      {
        name: 'description', content: 'Projects page for the Nuxt 3 template'
      }]
})

</script>