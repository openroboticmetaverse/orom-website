<template>
  <div>
    <TheHeader />
    <SectionOne />
    <h2 ref="header">Home</h2>
    <div ref="textContainer">
      <p v-for="i in 20" :key="i" class="scroll-trigger">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
        expedita sequi deserunt facere provident, in deleniti. Magnam earum error esse.</p>
    </div>
  </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionOne from '~/components/landing/SectionOne.vue';

gsap.registerPlugin(ScrollTrigger);

const header = ref(null);
const textContainer = ref(null);

onMounted(() => {
  gsap.from(header.value, {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: "power3.out"
  });

  const paragraphs = textContainer.value.querySelectorAll('.scroll-trigger');
  paragraphs.forEach((p, index) => {
    gsap.from(p, {
      scrollTrigger: {
        trigger: p,
        start: "top bottom",
        end: "bottom top",
        markers: false,
      },
      duration: 0.5,
      y: 100,
      opacity: 0,
      ease: "power3.out",
      delay: index * 0.02
    });
  });
});
</script>
  
<style scoped>
h2 {
  margin-left: 20px;
  margin-bottom: 20px;
  font-size: 36px;
}

p {
  margin: 20px 0 20px 20px;
}
</style>
  