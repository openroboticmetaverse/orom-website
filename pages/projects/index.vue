<template>
  <div>
    <CommonEmptySection>
      <template v-slot:mainTitle2>
        Get <span class="gradient-text-right">Inspired!</span>
      </template>
      <template v-slot:description>
        Check out some of our projects! Our main focus now is to build the MVP of our platform, on top of which we want to develop different projects. All the projects that will be integrated in our open robotic metaverse will also be available here
      </template>
    </CommonEmptySection>

    <!-- Project cards -->
    <div class="container mx-auto px-4 py-12">
      <div class="flex justify-center">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            v-for="project in projects"
            :key="project.id"
            :project="project"
            class="h-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProjectsStore } from '~/stores/store';
import ProjectCard from '~/components/ui/ProjectCard.vue';

const projectsStore = useProjectsStore();
const projects = projectsStore.projects;

// add schema.org markup
useJsonld(() => ({
  "@context": "http://schema.org",
  "@type": "CollectionPage",
  name: "Projects | Open Robotic Metaverse",
  description:
    "Explore our innovative projects in the field of robotics and AI. Get inspired and contribute your ideas!",
  url: "https://www.openroboticmetaverse.org/projects",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        image: `https://res.cloudinary.com/dilan3qfq/image/upload/${project.fullImage}`,
        description: project.shortDescription,
      },
    })),
  },
}));
</script>

<style scoped>
.grid {
  @apply grid-cols-1 sm:grid-cols-2 lg:grid-cols-3;
}
.grid > * {
  @apply h-full;
}
</style>
