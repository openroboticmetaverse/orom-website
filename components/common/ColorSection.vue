<template>
<!-- a section with a background of colored polygons -->
  <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-24">
    <slot name="image"></slot>

    <div class="overlay-bottom"></div>
    <div class="overlay-top"></div>
    <div
      class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      aria-hidden="true"
    >
      <div
        class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#9800ff] to-[#085ba0] opacity-20"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      ></div>
    </div>
    <div
      class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      aria-hidden="true"
    >
      <div
        class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#000] to-[#9800ff] opacity-20"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      ></div>
    </div>
    <div
      class="absolute -top-0 left-1 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-2rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      aria-hidden="true"
    >
      <div
        class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#9800ff] to-[#085ba0] opacity-20"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      ></div>
    </div>
    <slot name="content"></slot>
  </div>
</template>


<script setup>
</script>

<style scoped>
/* add smooth transitions via a black to transparent overlay */
.overlay-bottom,
.overlay-top {
  position: absolute;
  left: 0;
  right: 0;
  height: 15%;
  /* Adjust the height as needed */
  z-index: -1;
}
/* on mobile device, overlay size needs reducing */
@media (max-width: 640px) {
  .overlay-bottom,
  .overlay-top {
    height: 10%; /* Adjust the height for mobile devices */
  }
}

.overlay-bottom {
  bottom: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
}

.overlay-top {
  top: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
}
</style>