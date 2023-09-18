<template>
    <div>
        <PhotoSection>
            <template v-slot:image>
                <img src="https://images.unsplash.com/photo-1528747045269-390fe33c19f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                    alt="" class=" absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center">
            </template>
            <template v-slot:content>
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="mx-auto max-w-8xl lg:mx-0">
                        <h2 class="text-4xl font-bold tracking-tight text-right text-white sm:text-6xl">Reach us</h2>
                        <p class="absolute right-10 mt-6 text-lg leading-8 ml-200 max-w-2xl  text-gray-300">Lorem ipsum dolor sit
                            amet, consectetur adipisicing elit. </p>
                    </div>

                </div>
            </template>
        </PhotoSection>

    </div>
</template>

<script setup>
import PhotoSection from '~/components/landing/PhotoSection.vue';
import ProjectCard from '~/components/projects/ProjectCard.vue';
//  fetch the products
const { data: projects } = await useFetch('https://fakestoreapi.com/products')



</script>