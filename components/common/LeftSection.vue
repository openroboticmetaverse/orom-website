<template>
  <div class="text-left">

    <div class='sm:px-12 sm:pt-5 md:pt-10 lg:pt-20'>
      <section class="relative flex items-center w-full">
        <div class="relative items-center w-full px-5 mx-auto md:px-9 lg:px-12 max-w-9xl">
          <div class="relative flex-col items-start m-auto align-middle">
            <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
              <div class="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
                <div class="max-w-xl text-center lg:text-left">
                  <div>
                    <p class="font-bold tracking-tight gradient-text-left pb-4 text-4xl sm:text-8xl">
                      <slot name="title"></slot>
                    </p>
                    <p
                      class="max-w-xl mt-4 mb-12 text-2xl sm:text-2xl lg:text-4xl px-10 sm:px-0 tracking-tight text-gray-300">
                      <slot name="description"></slot>
                      <slot name="icons"></slot>
                    </p>
                  </div>
                </div>
              </div>
              <div v-if="!orderFirst" class=" order-first block w-full mt-12 aspect-square lg:mt-20">
                <slot name="image"></slot>
              </div>
              <div v-else class="block w-full mt-12 aspect-square lg:mt-20">
                <slot name="image"></slot>
              </div>
            </div>  
          </div>
        </div>
      </section>

    </div>


    <section>

    </section>

  </div>
</template>

<script>
export default {
  props: {
    orderFirst: {
      type: Boolean,
      default: false, // By default, the "order-first" class is not applied
    },
  },
};
</script>