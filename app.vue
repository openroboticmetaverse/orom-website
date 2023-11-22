<template>
    <div>
      <NuxtLayout>
        <NuxtPage/>
      </NuxtLayout>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';

const scaleFactor = ref(1);
let initialViewportWidth = null;

// This function checks if the device is probably a mobile
const isMobileDevice = () => window.innerWidth <= 768;

const adjustScale = () => {
  const viewportWidth = window.innerWidth;

  if (!initialViewportWidth) {
    initialViewportWidth = viewportWidth;
  }

  scaleFactor.value = viewportWidth / initialViewportWidth;
};

onMounted(() => {
  if (!isMobileDevice()) {
    window.addEventListener('resize', adjustScale);
    adjustScale();
  }
});
</script>
<style>
html {
  background-color: black;
}

.gradient-text-left {
  background: linear-gradient(45deg, #4bb8a6,#085ba0 );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.gradient-text-right {
  background: linear-gradient(45deg,#085ba0, #4bb8a6 );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.gradient-text-1 {
  background: linear-gradient(45deg,#fafafa, #4bb8a6 );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

</style>