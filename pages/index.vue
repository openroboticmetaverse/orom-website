<template>
  <div>
    <TheHeader />
    <PhotoSection>
      <template v-slot:image>
        <img src="https://images.unsplash.com/photo-1561634507-b0cd27bf0aa7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
            alt="" class=" absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center">
      </template>
      <template v-slot:content>
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-8xl lg:mx-0">
          <h2 class="text-4xl font-bold tracking-tight text-right text-white sm:text-6xl">Explore the Community</h2>
          <p class="mt-6 text-lg leading-8 ml-200 text-right text-gray-300">Anim aute id magna aliqua ad ad non deserunt
            sunt. Qui irure
            qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
        </div>


        <div class="relative mt-10 ">
          <button
            class="absolute right-0  bg-gray-900 bg-opacity-75 right-0 hover:bg-gray-900 duration-300 text-white-700 font-semibold hover:text-white py-4 px-10 border border-gray-500 hover:border-transparent rounded">
            Explore!
          </button>
        </div>
      </div>
    </template>
    </PhotoSection>

    <PhotoSection>
      <template v-slot:image>
        <img src="https://images.unsplash.com/photo-1581090121489-ff9b54bbee43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
            alt="" class=" absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center">
      </template>
      <template v-slot:content>
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-8xl lg:mx-0">
          <h2 class="text-4xl font-bold tracking-tight text-left text-white sm:text-6xl">Follow Us!</h2>
          <p class="mt-6 text-lg leading-8 ml-200 max-w-2xl text-left text-gray-300">Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Expedita tempora, doloribus quibusdam quae assumenda voluptatem adipisci officia
            deserunt sunt tenetur cum sint voluptatibus velit omnis architecto porro harum inventore voluptatum!</p>
        </div>


        <div class="relative mt-10 flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </div>
      </div>
    </template>
    </PhotoSection>
    <h2 ref="header">Home</h2>
    <div ref="textContainer">
      <p v-for="i in 5" :key="i" class="scroll-trigger">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
        expedita sequi deserunt facere provident, in deleniti. Magnam earum error esse.</p>
    </div>
  </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PhotoSection from '~/components/landing/PhotoSection.vue';

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
  