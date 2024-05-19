<template>
  <LayoutTheNavbar />
  <div>
    <TheBanner> <template v-slot>
        Join our upcoming Robotics Community Meetup hosted by open robotic metaverse! Follow us on Instagram for more
        info! </template>
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