<template>
  <div class="text-left">
    <div class="sm:px-12 sm:pt-5 md:pt-10 lg:pt-20 ">
      <section class="relative flex items-center w-full">
        <div
          class="relative items-center w-full px-5 mx-auto md:px-9 lg:px-12 max-w-9xl"
        >
          <div class="relative flex-col items-start m-auto align-middle">
            <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-22">
              <div
                class="relative items-center gap-9 m-auto lg:inline-flex md:order-first"
              >
                <div class="max-w-xl text-center lg:text-left">
                  <div>
                    <p
                      class="font-bold tracking-tight text-left px-5 sm:px-0  text-gray-200 pb-4 text-4xl sm:text-4xl md:text-5xl lg:text-5xl"
                    >
                      <slot name="title"></slot>
                    </p>
                    <p class="section-description">
                      <slot name="description"></slot>
                      <slot name="icons"></slot>
                    </p>
                  </div>
                </div>
              </div>
              <div
                v-if="!orderFirst"
                class="order-first block w-full mt-12 px-5 aspect-square lg:mt-20"
              >
                <slot name="image"></slot>
              </div>
              <div v-else class="block w-full sm:mt-12 px-5 aspect-square lg:mt-20">
                <slot name="image"></slot>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <section></section>
  </div>
</template>

<script setup>
const props = defineProps({
  orderFirst: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
</style>