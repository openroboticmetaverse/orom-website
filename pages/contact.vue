<template>
  <div>
    <CommonRightSection>
      <template v-slot:title>
        <span class="gradient-text-left-bright">Reach us!</span>
      </template>
      <template v-slot:description>
        Ready to Make a Difference? Reach out to us and start your journey
        today!
        <div class="py-10"></div>
      </template>
      <template v-slot:email>
        <a
          href="mailto:openroboticmetaverse@gmail.com"
          class="gradient-text-right hover:text-teal-200 duration-500 ease-in-out email-wrap"
          >openroboticmetaverse@gmail.com</a
        >
      </template>
      <template v-slot:icons>
        <UiSocialMediaIcons></UiSocialMediaIcons>
      </template>
      <template v-slot:image>
        <div class="py-10"></div>
        <nuxt-img
          class="object-cover rounded-3xl object-center w-full mx-auto bg-gray-300 lg:ml-auto"
          provider="cloudinary"
          alt="hero"
          loading="lazy"
          src="/openroboverse/contact_r3zvl5.png"
        />
      </template>
    </CommonRightSection>
  </div>
</template>

<script setup>
// add head tags
useHead({
  title: "Contact | open robotic metaverse",
  meta: [
    {
      name: "description",
      content: "Contact us! | Open Robotic Metaverse",
    },
  ],
});
// add schema.org markup
useJsonld(() => ({
  "@context": "http://schema.org",
  "@type": "EducationalOrganization",
  name: "Open Robotic Metaverse",
  url: "https://www.openroboticmetaverse.org/contact",
  description: "Charge in robotics innovation and community engagement.",
  sameAs: [
    "https://instagram.com/openroboticmetaverse",
    "https://github.com/openroboverse",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "organisation email",
    email: "openroboticmetaverse@gmail.com",
    // Add more contact details if needed
  },
  logo: "https://www.openroboticmetaverse.org/icon.svg",
  // Add more relevant details here
}));
</script>

<style scoped>
.email-wrap {
  word-break: break-all;
}
</style>