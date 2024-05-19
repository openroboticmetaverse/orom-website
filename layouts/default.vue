<template>
  <LayoutTheNavbar />
  <div>
    <TheBanner>
      <template v-slot>
        Join our upcoming <span class="gradient-text-right">Robotics Community Meetup</span> on the 19.06.2024 hosted by
        open robotic
        metaverse! Follow <a href="https://instagram.com/openroboticmetaverse"
          class=" !bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 !text-transparent bg-clip-text">@openroboticmetaverse</a>
        for more
        info!
        <br>
        <!-- <a href="https://www.google.com" class="!text-[#61B3BF] ">Register here!</a> -->
      </template>
    </TheBanner>
    <slot />
    <LayoutTheFooter />
  </div>
</template>

<script setup>
import TheBanner from '~/components/layout/TheBanner.vue';
</script>

<style scoped>
* {
  color: white;
}

body {
  padding-top: 60px;
  margin-top: 6vh;
}
</style>
