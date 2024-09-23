<template>
  <div class="meetup-page">
    <CommonEmptySection class="meetup-header">
      <template v-slot:mainTitle1>
        <div class="reveal">Robotics Community</div>
      </template>
      <template v-slot:mainTitle2>
        <span class="gradient-text-left reveal">Meetup</span>
      </template>
      <template v-slot:description>
        <div class="reveal">
          Our Robotics Community Meetups are designed to foster collaboration, knowledge exchange, and networking 
          within the local robotics community. Join us to connect with like-minded enthusiasts, share ideas, 
          and stay at the forefront of robotics innovation.
        </div>
      </template>
    </CommonEmptySection>

    <CommonLeftSection :orderFirst="true">
      <template v-slot:title>
        What to <span class="gradient-text-right">Expect</span>
      </template>
      <template v-slot:description>
        <ul class="list-disc list-inside space-y-2">
          <li>Networking opportunities with students and professionals</li>
          <li>Short pitches and interactive sessions showcasing latest robotic projects</li>
          <li>Engaging discussions on cutting-edge robotics topics</li>
          <li>Collaborative problem-solving workshops</li>
          <li>Free drinks in a lively atmosphere</li>
        </ul>
      </template>
      <template v-slot:image>
        <div class="image-gallery">
          <div v-for="(image, index) in meetupImages" :key="index" class="gallery-item reveal">
            <nuxt-img
              :src="image.src"
              :alt="image.alt"
              class="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>
      </template>
    </CommonLeftSection>

    <CommonRightSection>
      <template v-slot:title>
        Join Our <span class="gradient-text-left">Next Meetup</span>
      </template>
      <template v-slot:description>
        Don't miss this chance to connect with experts, gain insights into the latest advancements, 
        and grow your professional network. Our meetups are a melting pot of ideas, innovation, and inspiration.
        <div class="mt-6">
          <UiBaseButton :buttonLink="`https://lu.ma/b0hq4agb`">
            <template v-slot:button>Register Now</template>
          </UiBaseButton>
        </div>
      </template>
      <template v-slot:image>
        <nuxt-img
          src="https://res.cloudinary.com/dilan3qfq/image/upload/v1727137785/openroboverse/Meetup/meetup_logo_xt2pev.jpg"
          alt="Next Meetup"
          class="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 reveal"
        />
      </template>
    </CommonRightSection>

    <CommonEmptySection>
      <template v-slot:mainTitle2>
        About <span class="gradient-text-left">open robotic metaverse</span>
      </template>
      <template v-slot:description>
        <div class="reveal">
          open robotic metaverse is an initiative aimed at strengthening collaboration and 
          knowledge exchange within the robotics community. Besides local events, we're working 
          on an open-source project: a web-based collaborative platform designed to encourage 
          exchange between robotic projects in an interactive 3D world.
        </div>
        <div class="mt-6 reveal">
          <UiBaseButton :buttonLink="`/about`">
            <template v-slot:button>Learn More</template>
          </UiBaseButton>
        </div>
      </template>
    </CommonEmptySection>
  </div>
</template>

<script setup lang="ts">
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
  reveal();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", reveal);
});

useHead({
  title: "Newsroom | open robotic metaverse",
  meta: [
    {
      name: "description",
      content: "Stay updated with our Robotics Community Meetups and latest news from open robotic metaverse.",
    },
  ],
});

const meetupImages = [
  {
    src: "https://res.cloudinary.com/dilan3qfq/image/upload/v1727140199/openroboverse/Meetup/meetup_back_cjvymg_c_crop_ar_4_3_frdbru.jpg",
    alt: "Meetup Image 1"
  },
  {
    src: "https://res.cloudinary.com/dilan3qfq/image/upload/v1727139973/openroboverse/Meetup/IMG_4930_un1fsw.jpg",
    alt: "Meetup Image 2"
  },
  {
    src: "https://res.cloudinary.com/dilan3qfq/image/upload/v1727140258/openroboverse/Meetup/meetup_pre_up1_fohztd_c_crop_ar_4_3_gaqsnr.jpg",
    alt: "Meetup Image 3"
  },
  {
    src: "https://res.cloudinary.com/dilan3qfq/image/upload/v1727138102/openroboverse/Meetup/meetup_pre_up3_ojmush.jpg",
    alt: "Meetup Image 4"
  }
];
</script>

<style scoped>
.meetup-page {
  padding-top: 0;
  margin-top: 0;
}

.meetup-header {
  padding-top: 60px; /* Adjust this value as needed to account for the navbar height */
}

.image-gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.gallery-item {
  overflow: hidden;
  border-radius: 0.5rem;
}

.gallery-item img {
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

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

.sliding-text-1,
.sliding-text-2,
.sliding-text-3 {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.sliding-text-1.active,
.sliding-text-2.active,
.sliding-text-3.active {
  opacity: 1;
  transform: translateY(0);
}

.sliding-text-1 {
  transition-delay: 0.1s;
}

.sliding-text-2 {
  transition-delay: 0.3s;
}

.sliding-text-3 {
  transition-delay: 0.5s;
}
</style>
