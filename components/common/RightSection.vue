<template>
  <div class="text-left z-50">
    <div class="sm:px-12 sm:pt-5 md:pt-10 lg:pt-20">
      <section class="relative flex items-center w-full">
        <div
          class="relative items-center w-full px-5 mx-auto md:px-9 lg:px-12 max-w-9xl"
        >
          <div class="relative flex-col items-start m-auto align-middle">
            <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-22">
              <div class="order-first block w-full px-4 aspect-square">
                <slot name="image"></slot>
              </div>
              <div
                class="relative items-center gap-12 m-auto lg:inline-flex md:order-first"
              >
                <div class="max-w-xl text-center lg:text-left">
                  <div>
                    <p
                      class="font-bold tracking-tight text-left px-5 sm:px-0 text-gray-200 pt-6 pb-6 text-4xl sm:text-4xl md:text-5xl lg:text-5xl"
                    >
                      <slot name="title"></slot>
                    </p>
                    <p class="section-description">
                      <slot name="description"></slot>
                      <slot name="email"></slot>
                      <slot name="icons"></slot>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section></section>
  </div>
</template>