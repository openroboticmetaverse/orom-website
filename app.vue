<template>
    <div>
      <NuxtLayout>
        <NuxtPage/>
      </NuxtLayout>
    </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const scaleFactor = ref(1);

const adjustScale = () => {
  // Get device pixel ratio
  const ratio = window.devicePixelRatio;

  // Calculate the scale factor
  scaleFactor.value = 2.0 / ratio;

  // Adjust the root font size
  document.documentElement.style.fontSize = `${scaleFactor.value * 100}%`;
};

onMounted(() => {
  adjustScale();
  window.addEventListener('resize', adjustScale);
});

onUnmounted(() => {
  window.removeEventListener('resize', adjustScale);
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