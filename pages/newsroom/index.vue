<template>
    <div>
        <PhotoSection>
            <template v-slot:image>
                <img src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                    alt="" class=" absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center">
            </template>
            <template v-slot:content>
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="mx-auto max-w-8xl lg:mx-0">
                        <h2 class="text-4xl font-bold tracking-tight text-center text-white sm:text-6xl">Hear from us</h2>
                        <p class=" justify-center inset-0 mt-6 text-lg leading-8  text-gray-300">Lorem ipsum dolor sit
                            amet, consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse minus aut autem qui sint, necessitatibus omnis reiciendis quo nobis. Doloribus quos cumque molestias dicta magni voluptatem, natus nisi ex perspiciatis, aut, voluptatibus tenetur omnis temporibus optio ea cupiditate facere quam. </p>
                    </div>

                </div>
            </template>
        </PhotoSection>
        <PhotoSection>

            <template v-slot:content>
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="mx-auto max-w-8xl lg:mx-0">
                        <!-- <h2 class="text-4xl font-bold tracking-tight text-center text-white sm:text-6xl"></h2> -->
                        <!-- <p class=" justify-center inset-0 mt-6 text-lg leading-8  text-gray-300">Lorem ipsum dolor sit
                            amet, consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse minus aut autem qui sint, necessitatibus omnis reiciendis quo nobis. Doloribus quos cumque molestias dicta magni voluptatem, natus nisi ex perspiciatis, aut, voluptatibus tenetur omnis temporibus optio ea cupiditate facere quam. </p> -->
                            <blockquote class="twitter-tweet" data-lang="en" data-theme="light"><p lang="en" dir="ltr">Sunsets don&#39;t get much better than this one over <a href="https://twitter.com/GrandTetonNPS?ref_src=twsrc%5Etfw">@GrandTetonNPS</a>. <a href="https://twitter.com/hashtag/nature?src=hash&amp;ref_src=twsrc%5Etfw">#nature</a> <a href="https://twitter.com/hashtag/sunset?src=hash&amp;ref_src=twsrc%5Etfw">#sunset</a> <a href="http://t.co/YuKy2rcjyU">pic.twitter.com/YuKy2rcjyU</a></p>&mdash; US Department of the Interior (@Interior) <a href="https://twitter.com/Interior/status/463440424141459456?ref_src=twsrc%5Etfw">May 5, 2014</a></blockquote> 
                    
                        </div>


                </div>
            </template>
        </PhotoSection>
        <UiEmptySection>
            
        </UiEmptySection>

    </div>
</template>

<script setup>
import PhotoSection from '~/components/landing/PhotoSection.vue';

useHead({
    title: 'Newsroom | Nuxt Template',
    meta: [
      {
        name: 'description', content: 'Newsroom page for the Nuxt 3 template'
      }]
})
</script>