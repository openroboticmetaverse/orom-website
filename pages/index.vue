<template>
  <div>
    <TheHeader />
    <LandingCardSection>
      <template v-slot:description>      <h2 class="text-3xl font-bold tracking-tight text-center gradient-text-1 sm:text-6xl pb-10"> We aim to accelerate the
        development in robotics by focusing on our three pillars:</h2></template>

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
    </LandingCardSection>
    <UiEmptySection>
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
    </UiEmptySection>

    <UiLeftSection>
      <template v-slot:title>
        Network
      </template>
      <template v-slot:description>
        Our goal is to cultivate a
              community where robotics enthusiasts can meet, collaborate on projects, and share insights, enhancing
              partnerships and idea exchange.
      </template>
      <template v-slot:image>
        <img class="object-cover rounded-3xl object-center w-full mx-auto bg-gray-300 lg:ml-auto " alt="hero" src="pages/home/landing1.png" />
      </template>

    </UiLeftSection>

   

    <!-- <h2 ref="header">Home</h2>
    <div ref="textContainer">
      <p v-for="i in 5" :key="i" class="scroll-trigger">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
        expedita sequi deserunt facere provident, in deleniti. Magnam earum error esse.</p>
    </div> -->
  </div>
</template>
  
<script setup>

</script>
  
<style scoped></style>
  