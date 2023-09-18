<template>
  <div class="card">
    <div class="grid md:grid-cols-2 grid-cols-1 gap-10">
      <div class="p-7">
        <img :src="`${project.image}`" class="mx-auto my-7 w-full md:max-w-md" />
      </div>
      <div class="p-7">
        <h2 class="text-4xl my-7">{{ project.title }}</h2>
        <p class="text-xl my-7">Price - ${{ project.price }}</p>
        <h3 class="font-bold border-b-2 mb-4 pb-2">Product description:</h3>
        <p class="mb-7">{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  const { project } = defineProps(['project'])
</script>

<style scoped>
  @media (max-width: 768px) {
    img {
      max-width: 100%;
    }
  }
</style>
