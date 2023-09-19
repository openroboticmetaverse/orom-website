<template>
<div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 " >

  <video v-if="!videoFailed" alt="" class=" absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" id="video" autoplay loop muted playsinline>
      <source src="/pages/home/automation.mp4" type="video/mp4">
    </video>
    <img v-else src="/path/to/fallback-image.jpg" alt="Fallback Image">
  <div class="video-overlay"></div>
  <div class="overlay-bottom"></div>
      <div class="overlay-top"></div>
  <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
    <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
  </div>
  <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
    <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
  </div>
  <div class="absolute -top-50 left-1 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-2rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
    <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
  </div>
  <div class="mx-auto max-w-7xl px-6 lg:px-8" style="z-index: 10;">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl ">Be a part of the Roboverse</h2>
      <p class="mt-6 text-lg leading-8 text-gray-300">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
    </div>
    <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">

      <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">

        <div class="flex flex-col-reverse">
          <dt class="text-base leading-7 text-gray-300">Different projects per each semester</dt>
          <dd class="text-2xl font-bold leading-9 tracking-tight text-white">4</dd>
        </div>
        <div class="flex flex-col-reverse">
          <dt class="text-base leading-7 text-gray-300">Projects till now</dt>
          <dd class="text-2xl font-bold leading-9 tracking-tight text-white">40+</dd>
        </div>
        <div class="flex flex-col-reverse">
          <dt class="text-base leading-7 text-gray-300">Personal growth</dt>
          <dd class="text-2xl font-bold leading-9 tracking-tight text-white">Unlimited</dd>
        </div>
      </dl>
    </div>
  </div>
</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const videoFailed = ref(false);

onMounted(() => {
  const videoElement = document.getElementById("video");

  videoElement.addEventListener("error", () => {
    videoFailed.value = true;
  });

  videoElement.play().catch(() => {
    videoFailed.value = true;
  });
});

</script>

<style scoped>
.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7); /* Adjust the opacity as needed */
  z-index: -9;
}

.overlay-bottom, .overlay-top {
    position: absolute;
    left: 0;
    right: 0;
    height: 15%; /* Adjust the height as needed */
    z-index: 1;
  }
  .overlay-bottom {
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }

  .overlay-top {
    top: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }
</style>