<template>
    <div>

        <UiEmptySection>
      <template v-slot:mainTitle2>
        Hear from us! 
      </template>
      <template v-slot:description>
        Nothing to show. (yet)
      </template>
    </UiEmptySection>

    </div>
</template>

<script setup>
useHead({
    title: 'Newsroom | Nuxt Template',
    meta: [
      {
        name: 'description', content: 'Content page for the Nuxt 3 template'
      }]
})


</script>

<style scoped>

.email-wrap {
  word-break: break-all; 
}
</style>