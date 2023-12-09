<template>
  <div>
    <CommonEmptySection>
      <template v-slot:mainTitle2> Get Inspired! </template>
      <template v-slot:description>
        Check out some of our projects, contribute your ideas!
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


const projectsStore = useProjectsStore();
const { projects } = storeToRefs(projectsStore)

useHead({
  title: "Projects | open robotic metaverse",
  meta: [
    {
      name: "description",
      content: "Open Robotic Metaverse Projects",
    },
  ],
});

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
            "https://www.openroboticmetaverse.org/pages/projects/segmentation.png",
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
          name: "GAN for Garden Simulation",
          image: "https://www.openroboticmetaverse.org/pages/projects/gan.png",
          description:
            "Utilizing Generative Adversarial Networks to simulate garden environments in high detail.",
          // Add more details if available
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "CreativeWork",
          name: "AI based robotic vision",
          image:
            "https://www.openroboticmetaverse.org/pages/projects/bridging.png",
          description:
            "Developing AI-driven solutions for enhancing robotic vision capabilities.",
          // Add more details if available
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "CreativeWork",
          name: "Robots on the Browser",
          image:
            "https://www.openroboticmetaverse.org/pages/projects/browser.png",
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