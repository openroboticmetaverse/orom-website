<template>
  <LayoutTheNavbar />
  <div>
    <slot />
    <LayoutTheFooter />
  </div>
</template>

<script setup>
</script>

<style scoped>
* {
  color: white;
}
body {
  padding-top: 60px;
  margin-top: 6vh;
}
</style>