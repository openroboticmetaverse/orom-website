<template>

<div class="text-left">

    <div class='sm:px-12'>
      <section class="relative flex items-center w-full">
        <div class="relative items-center w-full px-5 mx-auto md:px-9 lg:px-12 max-w-9xl">
          <div class="relative flex-col items-start m-auto align-middle">
            <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
              <div class="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
                <div class="max-w-xl text-center lg:text-left">
                  <div>

                    <p class="font-bold tracking-tight gradient-text-left text-4xl sm:text-8xl">
                        <slot name="title"></slot>
                    </p>
                    <p class="max-w-xl mt-4 text-2xl sm:text-2xl lg:text-4xl px-10 sm:px-0 tracking-tight text-gray-300">
                        <slot name="description"></slot>
                        <slot name="icons"></slot>
                    </p>
                  </div>

                </div>
              </div>

              
              <div class="order-first block w-full mt-12 aspect-square lg:mt-0">
                <slot name="image"></slot>
                
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>

    <div class="mt-32" />

    <section>

    </section>

  </div>
</template>