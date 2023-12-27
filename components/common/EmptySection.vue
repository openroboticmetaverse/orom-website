<template>
  <!-- component -->
  <div>
    <section>
      <section class="sticky">
        <div
          class="max-w-lg px-4 sm:pt-12 pt-2 pb-10 sm:pb-10 mx-auto text-left md:max-w-none md:text-center"
        >
          <h1
            class="font-extrabold leading-10 tracking-tight pb-10 py-20 sm:py-12 text-left text-gray-200 text-center sm:leading-none text-4xl sm:text-6xl"
          >
            <span class="inline md:block">
              <slot name="mainTitle1"></slot>
            </span>
            <span class="relative mt-2 bg-clip-text md:inline-block">
              <slot name="mainTitle2"></slot>
            </span>
          </h1>
          <h2
            class="leading-8 tracking-tight text-left px-5 sm:px-10 sm:text-center sm:leading-none text-lg sm:text-xl lg:text-2xl"
          >
            <span
              class="relative mt-2 bg-clip-text text-gray-300 text-center max-w-8xl md:inline-block"
            >
              <slot name="description"></slot>
            </span>
          </h2>
        </div>
      </section>
    </section>
  </div>
</template>

<style scoped>
.overlay-bottom,
.overlay-top {
  position: absolute;
  left: 0;
  right: 0;
  height: 15%;
  /* Adjust the height as needed */
  z-index: 1;
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