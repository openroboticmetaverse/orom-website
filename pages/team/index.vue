<template>
    <div>
        <PhotoSection>
            <template v-slot:image>
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                    alt="" class=" absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center">
            </template>
            <template v-slot:content>
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="mx-auto max-w-8xl lg:mx-0">
                        <h2 class="text-4xl font-bold tracking-tight text-left text-white sm:text-6xl">Meet the Team</h2>
                        <p class="mt-6 text-lg leading-8 ml-200 max-w-2xl text-left text-gray-300">Lorem ipsum dolor sit
                            amet, consectetur adipisicing elit. Doloremque sit laudantium animi accusamus dignissimos
                            aspernatur itaque obcaecati aliquid voluptatibus eos. Quisquam illo accusantium, praesentium
                            iure reiciendis molestias consectetur odit velit?</p>
                    </div>

                </div>
            </template>
        </PhotoSection>

        <section class="dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">

      <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">

        <TeamCard>
            <template v-slot:image>
                <img class="w-full rounded-lg sm:rounded-none max-w-s overflow-hidden sm:rounded-l-lg" src="https://media.kleinezeitung.at/images/thumb/1000x1000/focal0x0-0x0/3/9/5/6194069/Kris-Jenner-arrives-on-the-red-carpet-for-The-Met-Gala-at-The-Metropolitan-Museum-of-Art-celebrating-the-Costume-Instit_1663953438306423.jpg" alt="Bonnie Avatar">

            </template>
            <template v-slot:name>
                <a href="#">Kris</a>
            </template>
            <template v-slot:description>
                <span class="text-gray-500 dark:text-gray-400">CEO</span>
                <p class="mt-3 mb-4 font-light text-gray-500 max-w-xs dark:text-gray-400">Kris drives the technical strategy of the platform and brand.</p>
            </template>

        </TeamCard>
        <TeamCard>
            <template v-slot:image>
                <img class="w-full rounded-lg sm:rounded-none max-w-s overflow-hidden sm:rounded-l-lg" src="https://hips.hearstapps.com/hmg-prod/images/elle-kim-kardashian-met-gala-gettyimages-955778524-1525745624.jpg?crop=0.5xw:1xh;center,top&resize=1000:*" alt="Jese Avatar">

            </template>
            <template v-slot:name>
                <a href="#">Kim</a>
            </template>
            <template v-slot:description>
                <span class="text-gray-500 dark:text-gray-400">Marketing</span>
                <p class="mt-3 mb-4 font-light text-gray-500 max-w-xs dark:text-gray-400">Kim is our brand ambassador, leading marketing expert.</p>
            </template>

        </TeamCard>
        <TeamCard>
            <template v-slot:image>
                <img class="w-full rounded-lg sm:rounded-none max-w-m  sm:rounded-l-lg" src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/05/23/15/gettyimages-1147428861-0.jpg?width=1200&height=1200&fit=crop" alt="Michael Avatar">

            </template>
            <template v-slot:name>
                <a href="#">Kylie</a>
            </template>
            <template v-slot:description>
                <span class="text-gray-500 dark:text-gray-400">Styling & Make-up</span>
                <p class="mt-3 mb-4 font-light text-gray-500 max-w-xs dark:text-gray-400">Kylie's fashion expertise is what sets Roboverse apart.</p>
            </template>

        </TeamCard>
        <TeamCard>
            <template v-slot:image>
                <img class="w-full rounded-lg sm:rounded-none max-w-s sm:rounded-l-lg" src="https://hips.hearstapps.com/hmg-prod/images/khloe-kardashian-gettyimages-470897864-1526129854.jpg?crop=0.5xw:1xh;center,top&resize=1000:*" alt="Sofia Avatar">

            </template>
            <template v-slot:name>
                <a href="#">Khloe</a>
            </template>
            <template v-slot:description>
                <span class="text-gray-500 dark:text-gray-400">Communications</span>
                <p class="mt-3 mb-4 font-light text-gray-500 max-w-xs dark:text-gray-400">Khloe leads the public relations team.</p>
            </template>

        </TeamCard>
         

      </div>  
  </div>
</section>

    </div>
</template>

<script setup>
import PhotoSection from '~/components/landing/PhotoSection.vue';
import ProjectCard from '~/components/projects/ProjectCard.vue';
import TeamCard from '~/components/team/TeamCard.vue'
//  fetch the products
const { data: projects } = await useFetch('https://fakestoreapi.com/products')



</script>