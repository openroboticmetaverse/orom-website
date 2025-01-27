<template>
  <div>
    <div class="py-6 sm:py-0"></div>

    <CommonLeftSection>
      <template v-slot:title>
        Robotics Community
        <span class="gradient-text-left">Meetup</span>
      </template>
      <template v-slot:description>
        Our Robotics Community Meetups are designed to foster collaboration, knowledge exchange, and networking
        within the local robotics community.
        <br />
        Join us to connect with like-minded enthusiasts, share ideas,
        and stay at the forefront of robotics innovation.
        <div class="py-6"></div>

      </template>
      <template v-slot:image>
        <nuxt-img class="object-cover rounded-3xl object-center w-full mx-auto bg-gray-300 lg:ml-auto" alt="Meetup"
          provider="cloudinary" loading="lazy" src="/openroboverse/Meetup/meetup_logo_xt2pev.jpg" />
      </template>
    </CommonLeftSection>

    <CommonPhotoSection>
      <template v-slot:image>
        <nuxt-img
          src="https://images.unsplash.com/photo-1567789884554-0b844b597180?q=80&w=2070&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt="" loading="lazy" class="absolute inset-0 -z-10 h-full object-cover object-right md:object-center" />
      </template>
      <template v-slot:content>
        <CommonRightSection class="reveal">
          <template v-slot:title>
            <span class="gradient-text-right">What to Expect</span>
          </template>
          <template v-slot:description>
            <ul class="list-disc list-inside space-y-2">
              <li>Networking opportunities with students and professionals</li>
              <li>Short pitches and interactive sessions showcasing latest robotic projects</li>
              <li>Engaging discussions on cutting-edge robotics topics</li>
              <li>Collaborative problem-solving workshops</li>
              <li>Free drinks in a lively atmosphere</li>
            </ul>
            <div class="py-6"></div>

          </template>
          <template v-slot:image>
            <div class="image-gallery">
              <div v-for="(image, index) in meetupImages" :key="index" class="gallery-item reveal">
                <nuxt-img :src="image.src" :alt="image.alt"
                  class="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
              </div>
            </div>
          </template>
        </CommonRightSection>
      </template>
    </CommonPhotoSection>

    <CommonLeftSection :orderFirst="true">
      <template v-slot:title>
        Join Our Next
        <span class="gradient-text-left">Meetup</span>
      </template>
      <template v-slot:description>
        <div class="meetup-details">
          <div class="meetup-date-time">
            <div class="date">
              <strong>Wednesday, April 23, 2025</strong>
            </div>
            <div class="time">
              6:30 PM - 9:00 PM
            </div>
          </div>
          <div class="meetup-location">
            <strong>Digital Church</strong>
            <div>Aachen, Nordrhein-Westfalen</div>
          </div>
        </div>
        <div class="mt-6">
          Don't miss this chance to connect with experts, gain insights into the latest advancements,
          and grow your professional network. Our meetups are a melting pot of ideas, innovation, and inspiration.
        </div>
        <div class="py-6"></div>
        <UiBaseButton :buttonLink="`https://lu.ma/b0hq4agb`" :disabled="true" >
          <template v-slot:button>Coming Soon</template>
        </UiBaseButton>
      </template>
      <template v-slot:image>
        <nuxt-img class="object-cover rounded-3xl object-center w-full mx-auto bg-gray-300 lg:ml-auto" alt="Next Meetup"
          provider="cloudinary" loading="lazy"
          src="/openroboverse/Meetup/meetup_pre_up1_fohztd_c_crop_ar_4_3_gaqsnr.jpg" />
      </template>
    </CommonLeftSection>



    <section class="bordered-section animated">
      <CommonEmptySection class="reveal">
        <template v-slot:mainTitle1> About </template>
        <template v-slot:mainTitle2>
          <span class="gradient-text-left">open robotic metaverse</span>
        </template>
        <template v-slot:description>
          open robotic metaverse is an initiative aimed at strengthening collaboration and
          knowledge exchange within the robotics community. Besides local events, we're working
          on an open-source project: a web-based collaborative platform designed to encourage
          exchange between robotic projects in an interactive 3D world.
        </template>
      </CommonEmptySection>
      <div class="reveal flex flex-col items-center gap-5 justify-center h-full mx-auto pb-24">
        <UiBaseButton :buttonLink="`/about`">
          <template v-slot:button> Learn More </template>
        </UiBaseButton>
      </div>
    </section>

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
  reveal();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", reveal);
});

useHead({
  title: "Meetup | open robotic metaverse",
  meta: [
    {
      name: "description",
      content: "Join our Robotics Community Meetups and connect with like-minded enthusiasts in the open robotic metaverse.",
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
</style>