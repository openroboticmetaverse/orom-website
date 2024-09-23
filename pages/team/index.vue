<template>
  <div>
    <div class="pt-24 sm:pt-0 md:pt-0 lg:pt-0"></div>
    <CommonLeftSection :orderFirst="true">
      <template v-slot:title>
        Meet the <span class="gradient-text-left"> team!</span>
      </template>
      <template v-slot:description>
        If you have a passion for robotics and a drive to innovate, you're
        exactly where you need to be. Here, we value diverse talents and
        perspectives, because great ideas don't fit in a box. Join us in shaping
        the future of technology. All enthusiasts welcome!
        <div class="py-6"></div>
        <UiBaseButton :buttonLink="`https://robotics-metaverse-initiative.notion.site/Open-Position-open-robotic-metaverse-376fb2d257c247b1a58dfb7f71144a11?pvs=4`">
          <template v-slot:button> Check our open positions </template>
        </UiBaseButton>
      </template>
      <template v-slot:icons> </template>
      <template v-slot:image>
        <section class="dark:bg-gray-900">
          <div
            class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-0 lg:px-6"
          >
            <div
              class="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
            >
              <UiMemberProfile
                v-for="member in members"
                :key="member.id"
                :linkedinLink="member.linkedin"
                :githubLink="member.github"
              >
                <template v-slot:image>
                  <nuxt-img
                    class="member-pic"
                    provider="cloudinary"
                    :src="member.image"
                    loading="lazy"
                    :alt="`${member.name} Avatar`"
                  />
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

    <!-- New section for Supporters & Alumni -->
    <CommonLeftSection :orderFirst="false">
      <template v-slot:title>
        Supporters & <span class="gradient-text-left">Alumni</span>
      </template>
      <template v-slot:description>
        We're grateful for the invaluable contributions of our supporters and alumni.
      </template>
      <template v-slot:image>
        <section class="dark:bg-gray-900">
          <div
            class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-0 lg:px-6"
          >
            <div
              class="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
            >
              <UiMemberProfile
                v-for="supporter in supportersAndAlumni"
                :key="supporter.id"
                :linkedinLink="supporter.linkedin"
                :githubLink="supporter.github"
              >
                <template v-slot:image>
                  <nuxt-img
                    class="member-pic"
                    provider="cloudinary"
                    :src="supporter.image"
                    loading="lazy"
                    :alt="`${supporter.name} Avatar`"
                  />
                </template>
                <template v-slot:name>
                  <a class="text-gray-50">{{ supporter.name }}</a>
                </template>
                <template v-slot:description>
                  <p>{{ supporter.title }}</p>
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
import { storeToRefs } from "pinia";
// add new members into the pinia store, instead of hardcoding here
const teamStore = useTeamStore();
const { members, supportersAndAlumni } = storeToRefs(teamStore);
// add head tags
useHead({
  title: "Team | open robotic metaverse",
  meta: [
    {
      name: "description",
      content: "Team page | Open Robotic Metaverse",
    },
  ],
});
// add schema.org markup
useJsonld(() => ({
  "@context": "http://schema.org",
  "@type": "EducationalOrganization",
  name: "Open Robotic Metaverse",
  url: "https://www.openroboticmetaverse.org/team",
  description: "Charge in robotics innovation and community engagement.",

  contactPoint: {
    "@type": "ContactPoint",
    contactType: "organisation email",
    email: "openroboticmetaverse@gmail.com",
    // Add more contact details if needed
  },
  logo: "https://www.openroboticmetaverse.org/icon.svg",
  image: [
    "https://res.cloudinary.com/dilan3qfq/image/upload/v1702467037/openroboverse/group_foto_ne6ngk.jpg",
  ],
  member: [
    {
      "@type": "Person",
      name: "Amine",
      jobTitle: "Founder",
      image:
        "https://res.cloudinary.com/dilan3qfq/image/upload/v1702467097/openroboverse/team/amine_ea0ijk.jpg",
      url: "https://www.linkedin.com/in/aminekharrat/",
      sameAs: "https://github.com/AmineKharrat",
    },
    {
      "@type": "Person",
      name: "Karim",
      jobTitle: "Founder",
      image:
        "https://res.cloudinary.com/dilan3qfq/image/upload/v1702467105/openroboverse/team/karim_kddxb5.jpg",
      url: "https://www.linkedin.com/in/karim-siala/",
      sameAs: "https://github.com/karimsiala",
    },
    {
      "@type": "Person",
      name: "Hazar",
      jobTitle: "Founder",
      image:
        "https://res.cloudinary.com/dilan3qfq/image/upload/v1702467101/openroboverse/team/hazar_lhll8y.jpg",
      url: "https://www.linkedin.com/in/hazar-karadag/",
      sameAs: "https://github.com/parhasard",
    },
    {
      "@type": "Person",
      name: "Luca",
      jobTitle: "Founder",
      image:
        "https://res.cloudinary.com/dilan3qfq/image/upload/v1702467107/openroboverse/team/luca_spikki.jpg",
      url: "https://www.linkedin.com/in/luca-sophie-lamerichs-131104206/",
      sameAs: "https://github.com/openroboverse",
    },
    {
      "@type": "Person",
      name: "Jan",
      jobTitle: "Founder",
      image:
        "https://res.cloudinary.com/dilan3qfq/image/upload/v1702467103/openroboverse/team/jan_v4l9n0.jpg",
      url: "https://www.linkedin.com/in/janstrehl/",
      sameAs: "https://github.com/strehljd",
    },
    {
      "@type": "Person",
      name: "Estafania",
      jobTitle: "Founder",
      image:
        "https://res.cloudinary.com/dilan3qfq/image/upload/v1702467099/openroboverse/team/estafania_rkthuw.jpg",
      url: "https://www.linkedin.com/in/estefania-betancourt-9545531a9/",
      sameAs: "https://github.com/openroboverse",
    },
    {
      "@type": "Person",
      name: "Thu Ha",
      jobTitle: "Founder",
      image:
        "https://res.cloudinary.com/dilan3qfq/image/upload/v1702467111/openroboverse/team/thuha_berfop.jpg",
      url: "https://www.linkedin.com/in/thu-ha-dam-b0a7061b5/",
      sameAs: "https://github.com/openroboverse",
    },
    {
      "@type": "Person",
      name: "Marc",
      jobTitle: "Founder",
      image:
        "https://res.cloudinary.com/dilan3qfq/image/upload/v1702467109/openroboverse/team/marc_aj6znt.jpg",
      url: "https://www.linkedin.com/in/marc-andr%C3%A9-weism%C3%BCller/",
      sameAs: "https://github.com/openroboverse",
    },
  ],
}));
</script>