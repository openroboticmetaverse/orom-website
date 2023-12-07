<template>
    <div>
        <UiLeftSection :orderFirst="true">
      <template class="order-first" v-slot:title>
        Meet the team!
      </template>
      <template v-slot:description>
        <p class="mt-6 text-xl sm:text-3xl leading-8 ml-200 max-w-2xl text-left text-gray-300">
            If you have a passion for robotics and a drive to innovate, you're exactly where you need to be. Here, we value diverse talents and perspectives, because great ideas don't fit in a box. Join us in shaping the future of technology. All enthusiasts welcome!
        </p>
      </template>
      
      <template v-slot:image>
        <section class="dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center  lg:py-16 lg:px-6 ">

                <div class="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">

                    <TeamMemberProfile linkedinLink="https://www.linkedin.com/in/aminekharrat/" githubLink="https://github.com/AmineKharrat">
                        <template v-slot:image>
                            <img class="mx-auto mb-4 w-36 h-auto rounded-full"
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
                            <img class="mx-auto mb-4 w-36 h-auto rounded-full"
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
                            <img class="mx-auto mb-4 w-36 h-auto rounded-full"
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
                            <img class="mx-auto mb-4 w-36 h-auto rounded-full"
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
                            <img class="mx-auto mb-4 w-36 h-auto rounded-full"
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
                            <img class="mx-auto mb-4 w-36 h-auto rounded-full"
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

      </template>
 
    </UiLeftSection>

       
    </div>
</template>

<script setup>

useHead({
    title: 'Team | Nuxt Template',
    meta: [
      {
        name: 'description', content: 'Team page for the Nuxt 3 template'
      }]
})
</script>