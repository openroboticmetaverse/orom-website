<template>
    <div>
        <div class="pt-12 md:pt-0 lg:pt-0"></div>
        <CommonLeftSection :orderFirst="true">
            <template v-slot:title>
                Meet the team!
            </template>
            <template v-slot:description>
                If you have a passion for robotics and a drive to innovate, you're exactly where you need to be. Here, we
                value diverse talents and perspectives, because great ideas don't fit in a box. Join us in shaping the
                future of technology. All enthusiasts welcome!
            </template>
            <template v-slot:icons>
            </template>
            <template v-slot:image>
                <section class="dark:bg-gray-900">
                    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-0 lg:px-6 ">
                        <div class="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                            <UiMemberProfile v-for="member in members" :key="member.id" :linkedinLink="member.linkedin"
                                :githubLink="member.github">

                                <template v-slot:image>
                                    <img class="member-pic" :src="member.image"
                                        :alt="`${member.name} Avatar`">
                                </template>
                                <template v-slot:name>
                                    <a class="text-gray-50">{{ member.name }}</a>
                                </template>
                                <template v-slot:description>
                                    <p>{{ member.title }}</p>
                                </template>
                            </UiMemberProfile>
                        </div>
                    </div>
                </section>
            </template>
        </CommonLeftSection>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';

const teamStore = useTeamStore();
const { members } = storeToRefs(teamStore)

useHead({
    title: 'Team | open robotic metaverse',
    meta: [
        {
            name: 'description', content: 'Team page for the Nuxt 3 template'
        }]
})

useJsonld(() => ({
    "@context": "http://schema.org",
    "@type": "EducationalOrganization",
    "name": "Open Robotic Metaverse",
    "url": "https://www.openroboticmetaverse.org/team",
    "description": "Charge in robotics innovation and community engagement.",

    "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "organisation email",
        "email": "openroboticmetaverse@gmail.com",
        // Add more contact details if needed
    },
    "logo": "https://www.openroboticmetaverse.org/icon.svg",
    "image": [
        "https://www.openroboticmetaverse.org/pages/about/group_foto.jpg",
        "https://www.openroboticmetaverse.org/pages/about/group_foto_2.jpg",
        "https://www.openroboticmetaverse.org/pages/about/roboverse.png"
    ],
    "member": [
        {
            "@type": "Person",
            "name": "Amine",
            "jobTitle": "Founder",
            "image": "https://www.openroboticmetaverse.org/pages/team/amine.jpg",
            "url": "https://www.linkedin.com/in/aminekharrat/",
            "sameAs": "https://github.com/AmineKharrat"
        },
        {
            "@type": "Person",
            "name": "Karim",
            "jobTitle": "Founder",
            "image": "https://www.openroboticmetaverse.org/pages/team/karim.jpg",
            "url": "https://www.linkedin.com/in/karim-siala/",
            "sameAs": "https://github.com/karimsiala"
        },
        {
            "@type": "Person",
            "name": "Hazar",
            "jobTitle": "Founder",
            "image": "https://www.openroboticmetaverse.org/pages/team/hazar.jpg",
            "url": "https://www.linkedin.com/in/hazar-karadag/",
            "sameAs": "https://github.com/parhasard"
        },
        {
            "@type": "Person",
            "name": "Luca",
            "jobTitle": "Founder",
            "image": "https://www.openroboticmetaverse.org/pages/team/luca.jpg",
            "url": "https://www.linkedin.com/in/luca-sophie-lamerichs-131104206/",
            "sameAs": "https://github.com/openroboverse"
        },
        {
            "@type": "Person",
            "name": "Jan",
            "jobTitle": "Founder",
            "image": "https://www.openroboticmetaverse.org/pages/team/jan.jpg",
            "url": "https://www.linkedin.com/in/janstrehl/",
            "sameAs": "https://github.com/strehljd"
        },
        {
            "@type": "Person",
            "name": "Estafania",
            "jobTitle": "Founder",
            "image": "https://www.openroboticmetaverse.org/pages/team/estafania.jpg",
            "url": "https://www.linkedin.com/in/estefania-betancourt-9545531a9/",
            "sameAs": "https://github.com/openroboverse"
        },
        {
            "@type": "Person",
            "name": "Thu Ha",
            "jobTitle": "Founder",
            "image": "https://www.openroboticmetaverse.org/pages/team/thuha.jpg",
            "url": "https://www.linkedin.com/in/thu-ha-dam-b0a7061b5/",
            "sameAs": "https://github.com/openroboverse"
        },
        {
            "@type": "Person",
            "name": "Marc",
            "jobTitle": "Founder",
            "image": "https://www.openroboticmetaverse.org/pages/team/marc.jpg",
            "url": "https://www.linkedin.com/in/marc-andr%C3%A9-weism%C3%BCller/",
            "sameAs": "https://github.com/openroboverse"
        }
    ],
}));
</script>