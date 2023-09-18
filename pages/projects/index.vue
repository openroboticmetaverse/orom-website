<template>
        <div>
    <PhotoSection>
        <template v-slot:image>
            <img src="https://images.unsplash.com/photo-1567789884554-0b844b597180?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                alt="" class=" absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center">
        </template>
        <template v-slot:content>
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-8xl lg:mx-0">
                    <h2 class="text-4xl font-bold tracking-tight text-left text-white sm:text-6xl">Get Inspired!</h2>
                    <p class="mt-6 text-lg leading-8 ml-200 max-w-2xl text-left text-gray-300">Lorem, ipsum dolor sit amet
                        consectetur adipisicing elit. Expedita tempora, doloribus quibusdam quae assumenda!</p>
                </div>

            </div>
        </template>
    </PhotoSection>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <div v-for="p in projects">
                <ProjectCard :project="p" />
            </div>
        </div>
    </div>
</template>
  
<script setup>
import PhotoSection from '~/components/landing/PhotoSection.vue';
import ProjectCard from '~/components/projects/ProjectCard.vue';
//  fetch the products
const { data: projects } = await useFetch('https://fakestoreapi.com/products')



</script>