<template>
    <section>
      <section class="sticky">
        <div class="max-w-lg px-4 pb-24 mx-auto text-center">
          <div class="flex flex-col items-center justify-center h-full">
  
            <!-- Centered on mobile -->
            <button class="backdrop-blur-sm transition duration-500 ease-in-out bg-[#192033] border border-[#E2E8F0] translate-y-1 text-white hover:bg-neutral-500 text-lg font-semibold py-3 px-6 rounded-3xl inline-flex items-center mb-4">
              <span> Explore opportunities</span>
            </button>
  
            <!-- Centered on mobile -->
            <button class="backdrop-blur-sm transition duration-500 ease-in-out bg-white border border-[#E2E8F0] translate-y-1 text-[#16161d] hover:bg-neutral-200 text-lg font-semibold py-3 px-6 rounded-3xl inline-flex items-center mb-4">
              <span> Example Projects </span>
            </button>
          </div>
        </div>
      </section>
    </section>
  </template>
  
  <style scoped>
  @media (min-width: 768px) {
    /* Adjust behavior for screens wider than 768px */
    .flex-col {
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .mb-4 {
      margin-bottom: 0; /* Remove margin between buttons */
      margin-right: 1rem; /* Add margin to separate buttons horizontally */
    }
  }
  </style>
  