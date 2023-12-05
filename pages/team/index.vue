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
                        <h2 class="font-extrabold leading-10 tracking-tight pb-10 text-left gradient-text-left text-left sm:leading-none text-4xl sm:text-8xl ">Meet the team!</h2>
                        <p class="mt-6 text-lg leading-8 ml-200 max-w-2xl text-left text-gray-300">Lorem ipsum dolor sit
                            amet, consectetur adipisicing elit. Doloremque sit laudantium animi accusamus dignissimos
                            aspernatur itaque obcaecati aliquid voluptatibus eos. Quisquam illo accusantium, praesentium
                            iure reiciendis molestias consectetur odit velit?</p>
                    </div>

                </div>
            </template>
        </PhotoSection>

        <section class="dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center  lg:py-16 lg:px-6 ">

                <div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                    <TeamMemberProfile linkedinLink="https://www.linkedin.com/in/aminekharrat/" githubLink="https://github.com/AmineKharrat">
                        <template v-slot:image>
                            <img class="mx-auto mb-4 w-36 h-36 rounded-full"
                                src="/pages/team/amine.jpg"
                                alt="Amine Avatar">

                        </template>
                        <template v-slot:name>
                            <a class="text-gray-50">Amine</a>
                        </template>
                        <template v-slot:description>
                            <p>CEO</p>
                        </template>


                    </TeamMemberProfile>
                    <TeamMemberProfile linkedinLink="https://www.linkedin.com/in/karim-siala/" githubLink="https://github.com/karimsiala">
                        <template v-slot:image>
                            <img class="mx-auto mb-4 w-36 h-36 rounded-full"
                                src="/pages/team/karim.jpg"
                                alt="Karim Avatar">

                        </template>
                        <template v-slot:name>
                            <a class="text-gray-50">Karim</a>
                        </template>
                        <template v-slot:description>
                            <p>Nerd</p>
                        </template>


                    </TeamMemberProfile>
                    <TeamMemberProfile linkedinLink="https://www.linkedin.com/in/hazar-karadag/" githubLink="https://github.com/parhasard">
                        <template v-slot:image>
                            <img class="mx-auto mb-4 w-36 h-36 rounded-full"
                                src="/pages/team/hazar.jpg"
                                alt="Hazar Avatar">

                        </template>
                        <template v-slot:name>
                            <a class="text-gray-50">Hazar</a>
                        </template>
                        <template v-slot:description>
                            <p>Queen</p>
                        </template>


                    </TeamMemberProfile>
                    <TeamMemberProfile linkedinLink="https://www.linkedin.com/in/luca-sophie-lamerichs-131104206/" githubLink="https://github.com/openroboverse">
                        <template v-slot:image>
                            <img class="mx-auto mb-4 w-36 h-36 rounded-full"
                                src="/pages/team/luca.jpg"
                                alt="Luca Avatar">

                        </template>
                        <template v-slot:name>
                            <a class="text-gray-50">Luca</a>
                        </template>
                        <template v-slot:description>
                            <p>Luca</p>
                        </template>


                    </TeamMemberProfile>
                    <TeamMemberProfile linkedinLink="https://www.linkedin.com/in/janstrehl/" githubLink="https://github.com/strehljd">
                        <template v-slot:image>
                            <img class="mx-auto mb-4 w-36 h-36 rounded-full"
                                src="/pages/team/jan.jpg"
                                alt="Jan Avatar">

                        </template>
                        <template v-slot:name>
                            <a class="text-gray-50">Jan</a>
                        </template>
                        <template v-slot:description>
                            <p>Dev</p>
                        </template>


                    </TeamMemberProfile>
                    <TeamMemberProfile linkedinLink="https://www.linkedin.com/in/estefania-betancourt-9545531a9/" githubLink="https://github.com/openroboverse">
                        <template v-slot:image>
                            <img class="mx-auto mb-4 w-36 h-36 rounded-full"
                                src="/pages/team/estafania.jpg"
                                alt="Estafania Avatar">

                        </template>
                        <template v-slot:name>
                            <a class="text-gray-50">Estafania</a>
                        </template>
                        <template v-slot:description>
                            <p>Dev</p>
                        </template>


                    </TeamMemberProfile>



                </div>
            </div>
        </section>

    </div>
</template>

<script setup>
import PhotoSection from '~/components/landing/PhotoSection.vue';

useHead({
    title: 'Team | Nuxt Template',
    meta: [
      {
        name: 'description', content: 'Team page for the Nuxt 3 template'
      }]
})
</script>