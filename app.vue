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
      grantConsent()
      window.location.reload(); 
    }
    if (
      previous?.includes("google-analytics") &&
      !current?.includes("google-analytics")
    ) {
      revokeConsent(); 
      deleteGoogleAnalyticsCookies(); 
      window.location.reload();
    }
  },
  { deep: true }
);

const deleteGoogleAnalyticsCookies = () => {
  // List of Google Analytics cookie names
  const gaCookies = ['_ga', '_gid', '_gat', '_ga_9W085JKGJT', 'AMP_TOKEN', '__utma', '__utmt', '__utmb', '__utmc', '__utmz', '__utmv'];

  // Deleting each cookie
  gaCookies.forEach(cookie => {
    document.cookie = `${cookie}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  });

  console.log("Google Analytics cookies have been escorted out!");
};

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