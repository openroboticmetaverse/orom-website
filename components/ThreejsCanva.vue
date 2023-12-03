<template>
    <canvas id="canvas" ref="canvas" class="fixed top-0 left-0 w-full h-full"></canvas>
  </template>
  
  <script setup lang="ts">
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
      position: fixed; /* Ensures the canvas is fixed relative to the viewport */
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
  </style>
  