<template>
<div class="relative inline-flex group">
        <div
            class="absolute transitiona-all duration-1000 opacity-40 -inset-px bg-gradient-to-r from-[#00e9ff] via-[#85f7f3] to-[#a13ad8] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
        </div>
  <div class="simple-card ">
    <h2 class="small-title">
      <slot name="title"></slot>
    </h2>
    <p
      class="text-base sm:text-lg lg:text-xl font-normal text-gray-300 dark:text-gray-400 mb-4"
    >
      <slot name="text"></slot>
    </p>
  </div>
  </div>
</template>