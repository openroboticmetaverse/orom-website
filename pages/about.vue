<template>
    <div>
        <PhotoSection>
            <template v-slot:image>
                <img src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                    alt="" class=" absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center">
            </template>
            <template v-slot:content>
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="mx-auto max-w-8xl lg:mx-0">
                        <h2 class="text-4xl font-bold tracking-tight text-left text-white sm:text-6xl">Who are we?</h2>
                        <p class="mt-6 text-lg leading-8 ml-200 max-w-2xl text-left text-gray-300">Lorem ipsum dolor sit
                            amet, consectetur adipisicing elit. Doloremque sit laudantium animi accusamus dignissimos
                            aspernatur itaque obcaecati aliquid voluptatibus eos. Quisquam illo accusantium, praesentium
                            iure reiciendis molestias consectetur odit velit?</p>
                    </div>

                </div>
            </template>
        </PhotoSection>

    </div>
</template>

<script setup>
import PhotoSection from '~/components/landing/PhotoSection.vue';

useHead({
    title: 'About | Nuxt Template',
    meta: [
      {
        name: 'description', content: 'About page for the Nuxt 3 template'
      }]
})

</script>