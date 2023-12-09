<template>
  <div>
    <CommonEmptySection>
      <template v-slot:mainTitle2>
        Hear from us!
      </template>
      <template v-slot:description>
        Nothing to show. (yet)
      </template>
    </CommonEmptySection>

  </div>
</template>

<script setup>
useHead({
  title: 'Newsroom | open robotic metaverse',
  meta: [
    {
      name: 'description', content: 'Open Robotic Metaverse Newsroom'
    }]
})
</script>

<style scoped>
.email-wrap {
  word-break: break-all;
}
</style>