<template>
  <div>
    <LayoutFrontMatter />
    <CommonCardSection>
      <template v-slot:title> We aim to accelerate the
        development in robotics by focusing on our three pillars:</template>
      We aim to accelerate the development in robotics by focusing on our three pillars:
      <template v-slot:left>
        <UiSimpleCard>
          <template v-slot:title>
            Learn
          </template>
          <template v-slot:text>
            We prioritize a hands-on, community-driven
            approach to learning. We encourage a culture of support where members, regardless of their experience level,
            learn from and assist each other
          </template>
        </UiSimpleCard>
      </template>
      <template v-slot:center>
        <UiSimpleCard>
          <template v-slot:title>
            Network
          </template>
          <template v-slot:text>
            Our goal is to cultivate a community where robotics enthusiasts can meet, collaborate on projects, and share
            insights, enhancing partnerships and idea exchange.
          </template>
        </UiSimpleCard>
      </template>
      <template v-slot:right>
        <UiSimpleCard>
          <template v-slot:title>
            Innovate
          </template>
          <template v-slot:text>
            We aim to contribute to the rapidly evolving field of robotics by leveraging the potential of AI and
            simulation.
          </template>
        </UiSimpleCard>
      </template>
    </CommonCardSection>

    <CommonEmptySection>
      <template v-slot:mainTitle1>
        What we're
      </template>
      <template v-slot:mainTitle2>
        passionately building
      </template>
      <template v-slot:description>
        To support our vision, we are starting with a
        project that connect our three pillars: We're building an open Metaverse focused on robotics simulation,
        where you can explore, get inspired by, and contribute to a variety of innovative solutions in a shared
        virtual space. the open robotic metaverse offer the three following modes
      </template>
    </CommonEmptySection>

    <CommonButtonSection :button1Link="`/about`" :button2Link="`/projects`">
      <template v-slot:button1>
        Who are we?
      </template>
      <template v-slot:button2>
        Example projects
      </template>
    </CommonButtonSection>

    <CommonLeftSection :orderFirst="true">
      <template v-slot:title>
        Network
      </template>
      <template v-slot:description>
        Our goal is to cultivate a
        community where robotics enthusiasts can meet, collaborate on projects, and share insights, enhancing
        partnerships and idea exchange.
        <div class="py-6"></div>
        <UiRoundedButton :buttonLink="`/contact`">
          <template v-slot:button>
            Reach out to us!
          </template> 
        </UiRoundedButton>
      </template>
      <template v-slot:icons>
        <CommonIconList></CommonIconList>
      </template>
      <template v-slot:image>
        <img class=" object-cover rounded-3xl object-center w-full mx-auto bg-gray-300 lg:ml-auto " alt="hero"
          src="/pages/home/landing1.png" />
      </template>
    </CommonLeftSection>

  </div>
</template>
  
<script setup>
useHead({
  title: 'Home | open robotic metaverse',
  meta: [
    {
      name: 'description', content: '...an open Metaverse focused on robotics simulation where you can explore, get inspired by, and contribute...'
    }]
})

useJsonld(() => ({
  "@context": "http://schema.org",
  "@type": "EducationalOrganization",
  "name": "Open Robotic Metaverse",
  "url": "https://www.openroboticmetaverse.org",
  "description": "A pioneering community in the robotics field, focusing on hands-on learning, networking opportunities, and innovative projects in AI and simulation.",
  "areaServed": "Germany",
  "sameAs": [
    "https://instagram.com/openroboticmetaverse",
    "https://github.com/openroboverse",
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "organisation email",
    "email": "openroboticmetaverse@gmail.com",
    // Add more contact details if needed
  },
  "logo": "https://www.openroboticmetaverse.org/icon.svg",



  // Add more relevant details here
}));
</script>
  
<style scoped></style>
  