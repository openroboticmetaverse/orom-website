<template>
  <div class="relative isolate overflow-hidden bg-black pt-28 sm:py-16">
    <canvas id="canvas" ref="canvas"></canvas>
    <div class="mx-auto max-w-7xl px-2 lg:px-8" style="z-index: 10">
      <div class="mx-auto max-w-4xl lg:mx-0">
        <h2
          class="text-4xl font-bold tracking-tight px-10 sm:text-8xl gradient-text-left"
        >
          <p>together, we shape the future of robotics</p>
        </h2>
        <p
          class="mt-6 text-2xl sm:text-2xl lg:text-4xl px-10 leading-8 text-gray-300"
        >
          Creating a collaborative platform for robotics enthusiasts, beginners,
          and professionals to learn, innovate, and share
        </p>
      </div>

      <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
        <dl
          class="mt-8 grid grid-cols-2 gap-8 px-10 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div class="flex flex-col-reverse">
            <dt class="text-base leading-7 text-gray-300">Open Source</dt>
            <dd class="text-2xl font-bold leading-9 tracking-tight text-white">
              Commitment 
            </dd>
          </div>
          <div class="flex flex-col-reverse">
            <dt class="text-base leading-7 text-gray-300">Robotics</dt>
            <dd class="text-2xl font-bold leading-9 tracking-tight text-white">
              Focus
            </dd>
          </div>
          <div class="flex flex-col-reverse">
            <dt class="text-base leading-7 text-gray-300">Our metaverse</dt>
            <dd class="text-2xl font-bold leading-9 tracking-tight text-white">
              Building
            </dd>
          </div>
        </dl>
        <div class="py-10 px-10 lg:px-8">
          <UiBaseButton :buttonLink="`/team`"
            ><template v-slot:button>
              Meet us!
            </template></UiBaseButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup  lang="ts">
import { ref, onMounted } from "vue";
import type { IThreeHelper } from "@/helpers/threeHelpers/interfaces/IThreeHelper";
import { ThreeHelper } from "@/helpers/threeHelpers/core/ThreeHelper";
import { EnhancedThreeHelper } from "@/helpers/threeHelpers/core/EnhancedThreeHelper";

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
</style>