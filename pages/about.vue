<template>
  <div>
    <div class="py-6 sm:py-0"></div>

    <CommonLeftSection>
      <template v-slot:title>
        About
        <span class="gradient-text-left"
          >Open Robotic Metaverse
        </span></template
      >
      <template v-slot:description>
        We are a student initiative currently in the founding process. Our
        founders are students from RWTH Aachen University and FH Aachen and
        highly motivated to strengthen the robotic community in and outside of
        Aachen, Germany.
        <div class="py-6"></div>
        <UiBaseButton :buttonLink="`/contact`">
          <template v-slot:button> Reach out to us! </template>
        </UiBaseButton>
      </template>

      <template v-slot:icons> </template>
      <template v-slot:image>
        <nuxt-img
          class="object-cover rounded-3xl object-center w-full mx-auto bg-gray-300 lg:ml-auto"
          alt="hero"
          provider="cloudinary"
          src="/openroboverse/group_foto_ne6ngk.jpg"
        />
      </template>
    </CommonLeftSection>
    <CommonPhotoSection>
      <template v-slot:image>
        <img
          src="https://images.unsplash.com/photo-1567789884554-0b844b597180?q=80&w=2070&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt=""
          class="absolute inset-0 -z-10 h-full object-cover object-right md:object-center"
        />
      </template>
      <template v-slot:content>
      <CommonRightSection class="reveal">
        <template v-slot:title>
          <span class="gradient-text-right">Vision</span>
        </template>
        <template v-slot:description>
          We aim to accelerate the development of robotic applications by making
          use of the advancements in Simulation technology and Artificial
          Intelligence. We support individuals in acquiring skills and knowledge
          in this field and connect them with companies in search of solution
          implementers, while building a connected passionate community.
          <div class="py-6"></div>
          <UiBaseButton :buttonLink="`/contact`">
            <template v-slot:button> Reach out to us! </template>
          </UiBaseButton>
        </template>
        <template v-slot:image>
          <div class="py-10"></div>
          <nuxt-img
            class="object-cover rounded-3xl object-center w-full mx-auto bg-gray-300 lg:ml-auto"
            alt="hero"
            provider="cloudinary"
            src="/openroboverse/group_foto_2_bqdglp.jpg"
          />
        </template>
      </CommonRightSection>
            </template>
    </CommonPhotoSection>
    <CommonCardSection>
      <template v-slot:title
        >
        <span class="gradient-text-left">Mission</span>
      </template>
      <template v-slot:description>
        <p class="reveal">
          Creating a collaborative platform for robotics enthusiasts, beginners,
          and professionals to
          <span class="gradient-text-left-bright">learn</span>,
          <span class="gradient-text-left-bright">innovate</span>, and
          <span class="gradient-text-left-bright">share</span> in a fun,
          engaging environment.
        </p>
      </template>
      <template v-slot:left>
        <UiBaseCard class="reveal">
          <template v-slot:title> Community </template>
          <template v-slot:text>
            We are an active community open to professionals, beginners, and
            enthusiasts alike. We strongly encourage the exchange of knowledge
            and ideas.
          </template>
        </UiBaseCard>
      </template>
      <template v-slot:center>
        <UiBaseCard class="reveal">
          <template v-slot:title> Project Platform </template>
          <template v-slot:text>
            In our vision, we aim to create an open Metaverse where solutions
            are engineered and showcased. This allows everyone to explore
            various running solutions, draw inspiration or offer support.
          </template>
        </UiBaseCard>
      </template>
      <template v-slot:right>
        <UiBaseCard class="reveal">
          <template v-slot:title> Facilitation Tools </template>
          <template v-slot:text>
            We provide ready-to-use building blocks that make starting with
            robotics and simulation quicker and more intuitive.
          </template>
        </UiBaseCard>
      </template>
      <template v-slot:bottom-left>
        <UiBaseCard class="reveal">
          <template v-slot:title> Educational and Mentorship </template>
          <template v-slot:text>
            We offer an easy-to-follow guide for learning robotics. We encourage
            a culture of support where members assist each other.
          </template>
        </UiBaseCard>
      </template>
      <template v-slot:bottom-center>
        <UiBaseCard class="reveal">
          <template v-slot:title> Bridging Theory and Practice </template>
          <template v-slot:text>
            We strive to bridge the gap between the theoretical knowledge found
            in academic institutions and the practical needs of the industry.
          </template>
        </UiBaseCard>
      </template>
      <template v-slot:bottom-right>
        <UiBaseCard class="reveal">
          <template v-slot:title> Open-Source Involvement </template>
          <template v-slot:text>
            We contribute to the open-source community and welcome everyone to
            join our vision.
          </template>
        </UiBaseCard>
      </template>
    </CommonCardSection>
    <CommonPhotoSection>
      <template v-slot:image>
        <img
          src="https://images.unsplash.com/photo-1561634507-b0cd27bf0aa7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt=""
          class="absolute inset-0 -z-10 h-full object-cover object-right md:object-center"
        />
      </template>
      <template v-slot:content>
        <CommonLeftSection :orderFirst="true" class="reveal">
          <template v-slot:title>
            <span class="gradient-text-left-bright">The goal?</span>
          </template>
          <template v-slot:description>
            Open Robotic Metaverse is forging a new realm at the intersection of
            robotics and virtual environments. Our collective vision is to build
            a metaverse where innovative minds can develop, share, and explore
            the future of robotics in a collaborative ecosystem.
          </template>
          <template v-slot:icons> </template>
          <template v-slot:image>
            <nuxt-img
              class="object-cover rounded-3xl object-center w-full mx-auto h-4/6 bg-gray-300 lg:ml-auto reveal"
              alt="hero"
              provider="cloudinary"
              src="/openroboverse/roboverse_h1tlhw.png"
            />
          </template>
        </CommonLeftSection>
      </template>
    </CommonPhotoSection>
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
  title: "About | open robotic metaverse",
  meta: [
    {
      name: "description",
      content: "About us | Open Robotic Metaverse",
    },
  ],
});

useJsonld(() => ({
  "@context": "http://schema.org",
  "@type": "EducationalOrganization",
  name: "Open Robotic Metaverse",
  url: "https://www.openroboticmetaverse.org/about",
  description: "Charge in robotics innovation and community engagement.",
  sameAs: [
    "https://instagram.com/openroboticmetaverse",
    "https://github.com/openroboverse",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "organisation email",
    email: "openroboticmetaverse@gmail.com",
  },
  logo: "https://www.openroboticmetaverse.org/icon.svg",
  image: [
    "https://www.openroboticmetaverse.org/pages/about/group_foto.jpg",
    "https://www.openroboticmetaverse.org/pages/about/group_foto_2.jpg",
    "https://www.openroboticmetaverse.org/pages/about/roboverse.png",
  ],
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

.description-background {
  background-image: url("/bg.png");
  background-size: cover; /* This ensures your image covers the entire area */
  background-position: center; /* This will help center your image */
  color: #fff; /* Assuming you want white text over your image */
  padding: 20px; /* Add some space inside your description box */
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
</style>