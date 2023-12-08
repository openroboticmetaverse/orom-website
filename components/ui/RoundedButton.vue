<template>

<NuxtLink :to="buttonLink" class="btn">
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