<template>
    <section>
      <section class="sticky">
        <div class="max-w-lg px-4 pb-24 mx-auto text-center">
          <div class="flex flex-col items-center justify-center h-full">
  
            <!-- Centered on mobile -->
            <UiSimpleButton :buttonLink="button1Link"><template v-slot:button1 >
              <slot name="button1">
              
            </slot>
      </template></UiSimpleButton>
            <UiSimpleButton :buttonLink="button2Link"><template v-slot:button1 >
              <slot name="button2">
              
            </slot>
      </template></UiSimpleButton>
  

          </div>
        </div>
      </section>
    </section>
  </template>
  <script>

  export default {
    props: {
        button1Link: {
            type: String,
            required: true
        },
        button2Link: {
            type: String,
            required: true
        }
    },
}
  </script>
  
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
  