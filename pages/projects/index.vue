<template>
  <div>
    <CommonEmptySection>
      <template v-slot:mainTitle2>
        Get <span class="gradient-text-right">Inspired!</span>
      </template>
      <template v-slot:description>
        Check out some of our projects! Our main focus now is to build the MVP of our plateform, on top of which we want to develop different projects. All the projects that will be integrated in our open robotic metaverse will also be available here
      </template>
    </CommonEmptySection>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5"
    >
      <div :key="p.id" v-for="p in projects">
        <UiProjectCard :project="p" />
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { ref } from "vue";
// add the projects to the pinia store at /stores/store.ts rather than hardcoding here!!
const projectsStore = useProjectsStore();
const { projects } = storeToRefs(projectsStore);
// add head tags
useHead({
  title: "Projects | open robotic metaverse",
  meta: [
    {
      name: "description",
      content: "Projects | Open Robotic Metaverse",
    },
  ],
});
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
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "CreativeWork",
          name: "Segmentation of Fruits",
          image:
            "https://res.cloudinary.com/dilan3qfq/image/upload/v1702467075/openroboverse/segmentation_full_uw4for.png",
          description:
            "A project focused on the segmentation of fruits using advanced machine learning techniques.",
          // Add more details if available
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "CreativeWork",
          name: "AI based robotic vision",
          image:
            "https://assets.rbl.ms/25585082/origin.jpg",
          description:
            "Developing AI-driven solutions for enhancing robotic vision capabilities.",
          // Add more details if available
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "CreativeWork",
          name: "Robots on the Browser",
          image:
            "https://res.cloudinary.com/dilan3qfq/image/upload/v1702467075/openroboverse/browser_full_dlo5kv.png",
          description:
            "An innovative project bringing robotics simulations to web browsers for greater accessibility.",
          // Add more details if available
        },
      },
      // Add more projects in the same format
    ],
  },
}));
</script>
