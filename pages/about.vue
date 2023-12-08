<template>
    <div>

        <UiLeftSection>
      <template v-slot:title>
        About Open Robotic Metaverse
      </template>
      <template v-slot:description>
        We are a student initiative currently in the founding process. Our founders are students from RWTH Aachen University and FH Aachen and highly motivated to strengthen the robotic community in and outside of Aachen, Germany. 
      </template>
      
      <template v-slot:image>
        <img class="object-cover rounded-3xl object-center w-full mx-auto bg-gray-300 lg:ml-auto " alt="hero" src="/pages/about/group_foto.jpg" />
      </template>
 
    </UiLeftSection>

    <UiRightSection>
          
          <template v-slot:title>
            Vision
          </template>
          <template v-slot:description>
                    We aim to accelerate the development of robotic applications by making use of the advancements in Simulation technology and Artificial Intelligence. We support individuals in acquiring skills and knowledge in this field and connect them with companies in search of solution implementers, while building a connected passionate community.
                </template>

          
          <template v-slot:image>
            <div class="py-10"></div>
            <img class="object-cover rounded-3xl object-center w-full mx-auto bg-gray-300 lg:ml-auto " alt="hero" src="/pages/about/group_foto_2.jpg" />
          </template>
     
            </UiRightSection>

            <LandingCardSection>
      <template v-slot:title> Mission</template>
      
      <template v-slot:description> Creating a collaborative platform for robotics enthusiasts, beginners, and professionals to learn, innovate, and share in a fun, engaging environment. </template>
      <template v-slot:left>
        <UiSimpleCard>
          <template v-slot:title>
            Community
          </template>
          <template v-slot:text>
            We are an active community open to professionals, beginners, and enthusiasts alike. We strongly encourage the exchange of knowledge and ideas.
          </template>
        </UiSimpleCard>
      </template>
      <template v-slot:center>
        <UiSimpleCard>
          <template v-slot:title>
            Project Platform
          </template>
          <template v-slot:text>
            In our vision, we aim to create an open Metaverse where solutions are engineered and showcased. This allows everyone to explore various running solutions, draw inspiration or offer support.
          </template>
        </UiSimpleCard>
      </template>
      <template v-slot:right>
        <UiSimpleCard>
          <template v-slot:title>
            Facilitation Tools
          </template>
          <template v-slot:text>
            We provide ready-to-use building blocks that make starting with robotics and simulation quicker and more intuitive.
          </template>
        </UiSimpleCard>
      </template>
      <template v-slot:bottom-left>
        <UiSimpleCard>
          <template v-slot:title>
            Educational and Mentorship
          </template>
          <template v-slot:text>
            We offer an easy-to-follow guide for learning robotics. We encourage a culture of support where members assist each other.
          </template>
        </UiSimpleCard>
      </template>
      <template v-slot:bottom-center>
        <UiSimpleCard>
          <template v-slot:title>
            Bridging Theory and Practice
          </template>
          <template v-slot:text>
            We strive to bridge the gap between the theoretical knowledge found in academic institutions and the practical needs of the industry.
          </template>
        </UiSimpleCard>
      </template>
      <template v-slot:bottom-right>
        <UiSimpleCard>
          <template v-slot:title>
            Open-Source Involvement
          </template>
          <template v-slot:text>
            We contribute to the open-source community and welcome everyone to join our vision.
          </template>
        </UiSimpleCard>
      </template>
    </LandingCardSection>

    <UiLeftSection :orderFirst="true">
      <template v-slot:title>
        The goal?
      </template>
      <template v-slot:description>
        Open Robotic Metaverse is forging a new realm at the intersection of robotics and virtual environments. Our collective vision is to build a metaverse where innovative minds can develop, share, and explore the future of robotics in a collaborative ecosystem.
       
      </template>
      
      <template v-slot:image>
        <img class="object-cover rounded-3xl object-center w-full mx-auto bg-gray-300 lg:ml-auto " alt="hero" src="/pages/about/roboverse.png" />
      </template>
 
    </UiLeftSection>
    </div>
</template>

<script setup>
useHead({
    title: 'About | open robotic metaverse',
    meta: [
      {
        name: 'description', content: 'Content page for the Nuxt 3 template'
      }]
})


</script>

<style scoped>

.email-wrap {
  word-break: break-all; 
}
</style>