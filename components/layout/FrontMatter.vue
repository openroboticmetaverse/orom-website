<template>
  <div
    class="relative isolate overflow-hidden bg-black h-screen sm:h-auto pt-20 sm:py-20"
  >
    <canvas id="canvas" ref="canvas"></canvas>
    <div class="mx-auto max-w-7xl px-2 lg:px-8" style="z-index: 10">
      <div class="mx-auto max-w-4xl lg:mx-0">
        <h2
          class="text-4xl font-bold tracking-tight px-10 sm:text-8xl gradient-text-left sliding-text-1"
        >
          <p>together, we shape the future of robotics</p>
        </h2>
        <p
          class="mt-6 text-2xl sm:text-2xl lg:text-4xl px-10 leading-8 text-gray-300 sliding-text-2"
        >
          Creating a collaborative platform for robotics enthusiasts, beginners,
          and professionals to learn, innovate, and share
        </p>
      </div>

      <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
        <dl
          class="mt-8 grid grid-cols-2 gap-8 px-10 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div class="flex flex-col-reverse sliding-text-3">
            <dt class="text-base sm:text-xl leading-7 text-gray-300">
              Commitment
            </dt>
            <dd
              class="text-xl sm:text-2xl font-bold leading-9 tracking-tight text-white"
            >
              Open source
            </dd>
          </div>
          <div class="flex flex-col-reverse sliding-text-4">
            <dt class="text-base sm:text-xl leading-7 text-gray-300">Focus</dt>
            <dd
              class="text-xl sm:text-2xl font-bold leading-9 tracking-tight text-white"
            >
              Robotics
            </dd>
          </div>
          <div class="flex flex-col-reverse sliding-text-5">
            <dt class="text-base sm:text-xl leading-7 text-gray-300">
              Supported by
            </dt>
            <dd
              class="text-xl sm:text-2xl font-bold leading-9 tracking-tight text-white"
            >
              The metaverse
            </dd>
          </div>
        </dl>
        <div class="py-10 px-10 lg:px-8"></div>
      </div>
    </div>
  </div>
  <div class="arrow-container" @click="scrollDown">
    <div class="arrow"></div>
  </div>
</template>

<script setup  lang="ts">
import { ref, onMounted } from "vue";
import type { IThreeHelper } from "@/helpers/threeHelpers/interfaces/IThreeHelper";
import { ThreeHelper } from "@/helpers/threeHelpers/core/ThreeHelper";
import { EnhancedThreeHelper } from "@/helpers/threeHelpers/core/EnhancedThreeHelper";

// if arrow is clicked then scroll down
const scrollDown = () => {
  let scrollAmount = window.innerHeight;
  if (window.innerWidth < 1536) {
    scrollAmount *= 1.2;
  }

  window.scrollBy({
    top: scrollAmount,
    behavior: "smooth",
  });
};

// initiate three scene
const canvas = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  const isMobile = ref(window.innerWidth <= 768);
  if (!isMobile.value && canvas.value) {
    const baseThreeHelper = new ThreeHelper(canvas.value);
    const decoratedThreeHelper: IThreeHelper = new EnhancedThreeHelper(
      baseThreeHelper
    );
    decoratedThreeHelper.animate();
  }
  window.addEventListener("resize", () => {
    if (isMobile.value && canvas.value) {
      // Add logic to handle canvas for mobile here
    }
  });
});
</script>

<style scoped>
/* canvas styling */
#canvas {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

@media (max-width: 768px) {
  #canvas {
    display: none;
  }
}


/* front matter text styling */
.sliding-text-1 {
  display: inline-block;
  opacity: 0; /* Start with the text invisible */
  animation: slideText 0.7s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
}
.sliding-text-2 {
  display: inline-block;
  opacity: 0; /* Start with the text invisible */
  animation: slideTextReverse 0.7s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
}
.sliding-text-3 {
  display: inline-block;
  opacity: 0; /* Start with the text invisible */
  animation: slideText 0.3s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
}
.sliding-text-4 {
  display: inline-block;
  opacity: 0; /* Start with the text invisible */
  animation: slideText 0.7s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
}
.sliding-text-5 {
  display: inline-block;
  opacity: 0; /* Start with the text invisible */
  animation: slideText 1s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
}

/* front matter text slide animation */
@keyframes slideText {
  from {
    opacity: 0;
    transform: translateX(-150px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes slideTextReverse {
  from {
    opacity: 0;
    transform: translateX(150px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* arrow styling */
.arrow-container {
  position: relative;
  bottom: 10rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column; /* This is the new line */
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 20px;
  z-index: 9;
}

.arrow {
  border: solid white;
  border-width: 0 4px 4px 0;
  display: inline-block;
  padding: 10px;
  opacity: 0.5;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  animation: bounce 2s infinite;
  margin: 5px 0; /* Adjust this for spacing */
}
/* arrow animation */
@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0) rotate(45deg); /* Ensure rotation stays */
  }
  40% {
    transform: translateY(-30px) rotate(45deg);
  }
  60% {
    transform: translateY(-15px) rotate(45deg);
  }
}
</style>