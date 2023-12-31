<template>
  <div>
    <CommonEmptySection>
      <template v-slot:mainTitle2>
        <span class="gradient-text-right"> Hear from us!</span>
      </template>
      <template v-slot:description> Nothing to show. (yet) </template>
    </CommonEmptySection>
  </div>
</template>

<script setup>
// add head tag
useHead({
  title: "Newsroom | open robotic metaverse",
  meta: [
    {
      name: "description",
      content: "Newsroom | Open Robotic Metaverse",
    },
  ],
});
</script>

<style scoped>
/* wrap text */
.email-wrap {
  word-break: break-all;
}
</style>