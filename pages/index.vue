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
        We aim to accelerate the development in robotics by focusing on our
        three pillars:
      </p>
      <template v-slot:left>
        <UiBaseCard class="reveal">
          <template v-slot:title> Learn </template>
          <template v-slot:text>
            We prioritize a hands-on, community-driven approach to learning. We
            encourage a culture of support where members, regardless of their
            experience level, learn from and assist each other
          </template>
        </UiBaseCard>
      </template>
      <template v-slot:center>
        <UiBaseCard class="reveal">
          <template v-slot:title> Connect </template>
          <template v-slot:text>
            Our goal is to cultivate a community where robotics enthusiasts can
            meet, collaborate on projects, and share insights, enhancing
            partnerships and idea exchange
          </template>
        </UiBaseCard>
      </template>
      <template v-slot:right>
        <UiBaseCard class="reveal">
          <template v-slot:title> Innovate </template>
          <template v-slot:text>
            We aim to contribute to the rapidly evolving field of robotics by
            leveraging the potential of AI and simulation.
          </template>
        </UiBaseCard>
      </template>
    </CommonCardSection>

    <CommonEmptySection>
      <template v-slot:mainTitle1>
        <div class="reveal">One step towards</div></template
      >
      <template v-slot:mainTitle2>
        <span class="gradient-text-left reveal">intelligent robots</span>
      </template>
      <template v-slot:description>
        <div class="reveal">
          Our objective is to advance the field of embodied AI (AKA intelligent
          robotics) by utilizing recent advancements in
          <span class="gradient-text-right">deep learning</span> and available
          large datasets. The goal is to develop robotic agents capable of
          <span class="gradient-text-left">sensing</span>,
          <span class="gradient-text-right">reasoning</span> and
          <span class="gradient-text-left">acting</span> within their physical
          environments, supporting projects that includes at least one of these
          capabilities.
        </div>
      </template>
    </CommonEmptySection>
    <div class="py-16"></div>
    <section class="bordered-section animated">
      <CommonEmptySection class="reveal">
        <template v-slot:mainTitle1> What we're </template>
        <template v-slot:mainTitle2>
          <span class="gradient-text-left">passionately</span> building
        </template>
        <template v-slot:description>
          To support our vision, we are starting with a project that connects
          our three pillars: We're building an open metaverse centered around
          robotics simulation, where we can
          <span class="gradient-text-right">explore</span>, get
          <span class="gradient-text-right">inspired</span> by, and
          <span class="gradient-text-right">contribute</span> to a variety of
          innovative solutions in a shared virtual space. The open robotic
          metaverse offers the following three modes: Explore, create a
          challenge or deploy a solution.
        </template>
      </CommonEmptySection>
      <div
        class="reveal flex flex-col items-center gap-5 justify-center h-full mx-auto pb-24"
      >
        <UiBaseButton :buttonLink="`/projects`">
          <template v-slot:button> Learn more </template>
        </UiBaseButton>
      </div>
    </section>
    <CommonRightSection class="reveal">
      <template v-slot:title>
        Integrating robotics into
        <span class="gradient-text-left">everyday tasks</span>
      </template>
      <template v-slot:description>
        We strive to contribute to this evolving domain by exploring
        applications in computer vision, natural language processing, and
        reinforcement learning. Our primary focus centers on use-cases many can
        relate to: household and gardening tasks. Additionally, we encourage the
        exploration and integration of open-source libraries.
        <div class="py-6"></div>
      </template>
      <template v-slot:image>
        <div class="py-10"></div>
        <nuxt-img
          class="object-cover rounded-3xl object-center w-full h-4/6 object-top mx-auto bg-gray-300 lg:ml-auto"
          alt="hero"
          provider="cloudinary"
          loading="lazy"
          src="/openroboverse/ezgif.com-crop_j5flvn.png"
        />
      </template>
    </CommonRightSection>
    <CommonPhotoSection>
      <template v-slot:image>
        <nuxt-img
          src="https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=2071&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt=""
          loading="lazy"
          class="absolute inset-0 -z-10 h-full object-cover object-right md:object-center"
        />
      </template>
      <template v-slot:content>
        <CommonLeftSection :orderFirst="false" class="reveal">
          <template v-slot:title>
            <span class="gradient-text-right">Curious?</span>
          </template>
          <template v-slot:description>
            Join us in shaping the future of robotics. Don't hesitate to contact
            us today and be part of this exciting journey. We welcome motivated
            enthusiasts who want to learn, and experts who wish to share and
            grow with the community. Your contribution matters!
            <div class="py-6"></div>
            <UiBaseButton :buttonLink="`/contact`">
              <template v-slot:button> Reach out! </template>
            </UiBaseButton>
          </template>
          <template v-slot:icons>
            <UiSocialMediaIcons></UiSocialMediaIcons>
          </template>
          <template v-slot:image>
            <nuxt-img
              class="object-cover rounded-3xl object-center w-full mx-auto h-4/6 bg-gray-300 lg:ml-auto"
              alt="hero"
              provider="cloudinary"
              loading="lazy"
              src="/openroboverse/meeting-robots_sxxmwg.png"
            />
          </template>
        </CommonLeftSection>
      </template>
    </CommonPhotoSection>
  </div>
</template>
  
<script setup>
import { onMounted, onBeforeUnmount } from "vue";

// reveal each component as they are scrolled on to
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

// add head tags
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

// add schema.org markup
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
    "https://github.com/openroboticmetaverse",
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

@keyframes moveGrid {
  from {
    background-position: 0;
  }
  to {
    background-position: 100%;
  }
}

/* bordered-section class styling are otherwise applied globally on app.vue */
.bordered-section.animated {
  position: relative;
  overflow: hidden; /* Keeps the moving grid inside the section */
  /* Add other styles for size, etc. as needed */
  background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.1) 1px,
      transparent 1px
    ),
    linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px; /* Adjust the size of the grid squares */
  animation: moveGrid 50s linear infinite;
}

/* different speed needed on mobile devices otherwise too overwhelming */
@media (max-width: 640px) {
  .bordered-section {
    animation: moveGrid 20s linear infinite;
  }
}
</style>
  
