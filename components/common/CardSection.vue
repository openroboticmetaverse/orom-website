<template>
  <CommonPhotoSection>
    <template v-slot:content>
      <section class="dark:bg-black">
        <div class="py-4 mx-auto px-4 max-w-screen-2xl">
          <h2 class="card-section-title z-20"><slot name="title"></slot></h2>
          <h2
            class="text-xl tracking-tight text-center text-gray-300 sm:text-4xl pb-10"
          >
            <slot name="description"></slot>
          </h2>
          <slot name="card-full"></slot>
          <div class="grid md:grid-cols-3 gap-8">
            <slot name="left"></slot>
            <slot name="center"></slot>
            <slot name="right"></slot>
            <slot name="bottom-left"></slot>
            <slot name="bottom-center"></slot>
            <slot name="bottom-right"></slot>
          </div>
        </div>
      </section>
    </template>
  </CommonPhotoSection>
</template>