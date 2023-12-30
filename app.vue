<template>
  <div>
    <CookieControl> </CookieControl>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";

const {
  cookiesEnabled,
  cookiesEnabledIds,
  isConsentGiven,
  isModalActive,
  moduleOptions,
} = useCookieControl();

const { gtag, grantConsent, revokeConsent } = useGtag()
watch(
  () => cookiesEnabledIds.value,
  (current, previous) => {
    if (
      !previous?.includes("google-analytics") &&
      current?.includes("google-analytics")
    ) {
      // cookie with id `google-analytics` got added
      grantConsent()
      window.location.reload(); // placeholder for your custom change handler
    }
  },
  { deep: true }
);

const scaleFactor = ref(1);
let initialViewportWidth = null;

// This function checks if the device is probably a mobile
const isMobileDevice = () => window.innerWidth <= 768;

const adjustScale = () => {
  const viewportWidth = window.innerWidth;

  if (!initialViewportWidth) {
    initialViewportWidth = viewportWidth;
  }

  scaleFactor.value = viewportWidth / initialViewportWidth;
};

onMounted(() => {
  if (!isMobileDevice()) {
    window.addEventListener("resize", adjustScale);
    adjustScale();
  }
});
</script>
<style>
html {
  background-color: black;
  scroll-behavior: smooth;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.bordered-section::before {
  content: "";
  display: block;
  height: 2px; /* Adjust thickness of your border lines */
  background: linear-gradient(
    to right,
    #aeedcc,
    #aa37e8
  ); /* Replace with your gradient colors */
  margin-bottom: 10px; /* Space between the two lines */
}
.bordered-section::after {
  content: "";
  display: block;
  height: 2px; /* Adjust thickness of your border lines */
  background: linear-gradient(
    to left,
    #aeedcc,
    #aa37e8
  ); /* Replace with your gradient colors */
  margin-bottom: 0px; /* Space between the two lines */
}
</style>