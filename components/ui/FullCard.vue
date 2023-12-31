<template>
<!-- a card component that fills the entire width -->
  <div class="full-card">
    <h1
      class="gradient-text-left text-center dark:text-white text-8xl md:text-6xl font-extrabold mb-2"
    >
      <slot name="title"></slot>
    </h1>
    <p class="text-lg font-normal text-gray-300 dark:text-gray-400 mb-6">
      <slot name="text"></slot>
    </p>
  </div>
</template>