<template>

<NuxtLink :to="buttonLink" class="backdrop-blur-sm transition duration-500 ease-in-out bg-[#192033] border border-[#E2E8F0] translate-y-1 text-white hover:bg-neutral-500 text-lg font-semibold py-3 px-6 rounded-3xl inline-flex items-center mb-4">
            <span> <slot name="button"></slot></span>
          </NuxtLink>
</template>

<script>
export default {
  props: {
    buttonLink: {
      type: String,
      required: true
    },
  }
}
</script>