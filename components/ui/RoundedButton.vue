<template>
<div class="relative inline-flex  group">
        <div
            class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#fff] via-teal-300 to-purple-600 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
        </div>
  <NuxtLink :to="buttonLink" class="btn">
    <span> <slot name="button"></slot></span>
  </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    buttonLink: {
      type: String,
      required: true,
    },
  },
};
</script>