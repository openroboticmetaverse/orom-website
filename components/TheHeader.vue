<template>
  <div class="relative isolate h-screen overflow-hidden bg-black py-24 sm:py-32 ">
    <canvas id="canvas" ref="canvas"></canvas>

    <div class="mx-auto max-w-7xl px-6 lg:px-8" style="z-index: 10;">
      <div class="mx-auto max-w-4xl lg:mx-0">
        <h2 class="text-4xl font-bold tracking-tight text-white sm:text-8xl gradient-text-left">together, we shape the future of robotics
        </h2>
        <p class="mt-6 text-2xl sm:text-2xl lg:text-4xl leading-8 text-gray-300">Creating a collaborative platform for robotics enthusiasts,
          beginners, and professionals to learn, innovate, and share</p>
      </div>
      <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">

        <dl class="mt-8  grid grid-cols-2 gap-8 sm:mt-12  sm:grid-cols-2 lg:grid-cols-4">

          <div class="flex flex-col-reverse">
            <dt class="text-base leading-7 text-gray-300">Get Inspired</dt>
            <dd class="text-2xl font-bold leading-9 tracking-tight text-white">Imagine</dd>
          </div>
          <div class="flex flex-col-reverse">
            <dt class="text-base leading-7 text-gray-300">Hone your skils</dt>
            <dd class="text-2xl font-bold leading-9 tracking-tight text-white">Develop</dd>
          </div>
          <div class="flex flex-col-reverse">
            <dt class="text-base leading-7 text-gray-300">Inspire Others</dt>
            <dd class="text-2xl font-bold leading-9 tracking-tight text-white">Simulate</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup  lang="ts">

import { ref, onMounted } from 'vue'
import type { IThreeHelper } from '@/helpers/threeHelpers/interfaces/IThreeHelper'
import { ThreeHelper } from '@/helpers/threeHelpers/core/ThreeHelper'
import { EnhancedThreeHelper } from '@/helpers/threeHelpers/core/EnhancedThreeHelper'



const canvas = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  if (canvas.value) {
    const baseThreeHelper = new ThreeHelper(canvas.value)
    const decoratedThreeHelper: IThreeHelper = new EnhancedThreeHelper(baseThreeHelper)
    decoratedThreeHelper.animate()
  }
})

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

</style>