<template>
  <div>
    <LayoutFrontMatter />
    <CommonCardSection>
      <template v-slot:title>
        We aim to accelerate the
        <span class="gradient-text-right">development in robotics</span> by
        focusing on our
        <span class="gradient-text-left">three pillars</span>:</template
      >
      <p>
        We aim to accelerate the development in by focusing on our three
        pillars:
      </p>
      <template v-slot:left>
        <UiSimpleCard class="reveal">
          <template v-slot:title> Learn </template>
          <template v-slot:text>
            We prioritize a hands-on, community-driven approach to learning. We
            encourage a culture of support where members, regardless of their
            experience level, learn from and assist each other
          </template>
        </UiSimpleCard>
      </template>
      <template v-slot:center>
        <UiSimpleCard class="reveal">
          <template v-slot:title> Network </template>
          <template v-slot:text>
            Our goal is to cultivate a community where robotics enthusiasts can
            meet, collaborate on projects, and share insights, enhancing
            partnerships and idea exchange
          </template>
        </UiSimpleCard>
      </template>
      <template v-slot:right>
        <UiSimpleCard class="reveal">
          <template v-slot:title> Innovate </template>
          <template v-slot:text>
            We aim to contribute to the rapidly evolving field of robotics by
            leveraging the potential of AI and simulation
          </template>
        </UiSimpleCard>
      </template>
    </CommonCardSection>
    <section class="bordered-section">
      <CommonEmptySection class="reveal">
        <template v-slot:mainTitle1> What we're </template>
        <template v-slot:mainTitle2>
          <span class="gradient-text-left">passionately</span> building
        </template>
        <template v-slot:description>
          To support our vision, we are starting with a project that connect our
          three pillars: We're building an open Metaverse focused on robotics
          simulation, where you can explore, get inspired by, and contribute to
          a variety of innovative solutions in a shared virtual space. the open
          robotic metaverse offer the three following modes
        </template>
      </CommonEmptySection>

      <CommonButtonSection
        :button1Link="`/about`"
        :button2Link="`/projects`"
        class="reveal"
      >
        <template v-slot:button1> Who are we? </template>
        <template v-slot:button2> Example projects </template>
      </CommonButtonSection>
    </section>
    <CommonLeftSection :orderFirst="false" class="reveal">
      <template v-slot:title>
        <span class="gradient-text-right">Network</span>
      </template>
      <template v-slot:description>
        Our goal is to cultivate a community where robotics enthusiasts can
        meet, collaborate on projects, and share insights, enhancing
        partnerships and idea exchange.
        <div class="py-6"></div>
        <UiRoundedButton :buttonLink="`/contact`">
          <template v-slot:button> Reach out to us! </template>
        </UiRoundedButton>
      </template>
      <template v-slot:icons>
        <CommonIconList></CommonIconList>
      </template>
      <template v-slot:image>
        <nuxt-img
          class="object-cover rounded-3xl object-center w-full mx-auto bg-gray-300 lg:ml-auto"
          alt="hero"
          provider="cloudinary"
          src="/openroboverse/landing1_uwkslj.png"
        />
      </template>
    </CommonLeftSection>
  </div>
</template>
  
<script setup>
import { onMounted, onBeforeUnmount } from "vue";

const reveal = () => {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 30;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
};

onMounted(() => {
  window.addEventListener("scroll", reveal);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", reveal);
});

useHead({
  title: "Home | open robotic metaverse",
  meta: [
    {
      name: "description",
      content:
        "...an open Metaverse focused on robotics simulation where you can explore, get inspired by, and contribute...",
    },
  ],
});

useJsonld(() => ({
  "@context": "http://schema.org",
  "@type": "EducationalOrganization",
  name: "Open Robotic Metaverse",
  url: "https://www.openroboticmetaverse.org",
  description:
    "A pioneering community in the robotics field, focusing on hands-on learning, networking opportunities, and innovative projects in AI and simulation.",
  areaServed: "Germany",
  sameAs: [
    "https://instagram.com/openroboticmetaverse",
    "https://github.com/openroboverse",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "organisation email",
    email: "openroboticmetaverse@gmail.com",
    // Add more contact details if needed
  },
  logo: "https://www.openroboticmetaverse.org/icon.svg",

  // Add more relevant details here
}));
</script>
  
<style scoped>
.reveal {
  position: relative;
  transform: translateY(150px);
  opacity: 0;
  transition: 1s all ease;
}

.reveal.active {
  transform: translateY(0);
  opacity: 1;
}

.bordered-section::before {
  content: "";
  display: block;
  height: 2px; /* Adjust thickness of your border lines */
  background: linear-gradient(
    to right,
    #aeedcc,
    #aa37e8
  ); /* Replace with your gradient colors */
  margin-bottom: 10px; /* Space between the two lines */
}
.bordered-section::after {
  content: "";
  display: block;
  height: 2px; /* Adjust thickness of your border lines */
  background: linear-gradient(
    to left,
    #aeedcc,
    #aa37e8
  ); /* Replace with your gradient colors */
  margin-bottom: 0px; /* Space between the two lines */
}

@keyframes moveGrid {
  from {
    background-position: 0;
  }
  to {
    background-position: 100%;
  }
}

.bordered-section {
  position: relative;
  overflow: hidden; /* Keeps our moving grid inside the section */
  /* Add other styles for size, etc. as needed */
  background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.2) 1px,
      transparent 1px
    ),
    linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px);
  background-size: 50px 50px; /* Adjust the size of the grid squares */
  animation: moveGrid 30s linear infinite;
}
</style>
  