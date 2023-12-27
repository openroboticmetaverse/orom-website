<template>
  <CommonColorSection>
    <template v-slot:content>
      <section class="bordered-section">
        <section class="py-12">
          <div class="py-4 mx-auto px-10 max-w-screen-2xl">
            <h2
              class="font-bold tracking-tight text-center text-gray-200 text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-10"
            >
              <slot name="title"></slot>
            </h2>
            <h2
              class="tracking-tight text-center text-gray-300 text-xl sm:text-3xl md:text-3xl lg:text-4xl pb-10"
            >
              <slot name="description"></slot>
            </h2>
            <slot name="card-full"></slot>
            <div
              class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <slot name="left"></slot>
              <slot name="center"></slot>
              <slot name="right"></slot>
              <slot name="bottom-left"></slot>
              <slot name="bottom-center"></slot>
              <slot name="bottom-right"></slot>
            </div>
          </div>
        </section>
      </section>
    </template>
  </CommonColorSection>
</template>

<style scoped>
</style>