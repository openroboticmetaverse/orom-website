<template>
  <div>
    <CookieControl></CookieControl>
    <MeetupBanner />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
import RecruitmentBanner from '~/components/RecruitmentBanner.vue';

const {
  cookiesEnabled,
  cookiesEnabledIds,
  isConsentGiven,
  isModalActive,
  moduleOptions,
} = useCookieControl();

const { gtag, grantConsent, revokeConsent } = useGtag();

// watch for the cookie consent/rejection from the user
watch(
  () => cookiesEnabledIds.value,
  (current, previous) => {
    if (
      !previous?.includes("google-analytics") &&
      current?.includes("google-analytics")
    ) {
      grantConsent();
    }
    if (
      previous?.includes("google-analytics") &&
      !current?.includes("google-analytics")
    ) {
      revokeConsent();
      deleteGoogleAnalyticsCookies();
      window.location.reload();
    }
  }
);

const deleteGoogleAnalyticsCookies = () => {
  // List of Google Analytics cookie names
  const gaCookies = [
    "_ga",
    "_gid",
    "_gat",
    "_ga_9W085JKGJT",
    "AMP_TOKEN",
    "__utma",
    "__utmt",
    "__utmb",
    "__utmc",
    "__utmz",
    "__utmv",
  ];

  // Deleting each cookie
  gaCookies.forEach((cookie) => {
    document.cookie = `${cookie}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.openroboticmetaverse.org`;
  });

  console.log("Google Analytics cookies have been escorted out!");
};

// minor adjustment for different devices
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
/* Basic transition on page leave and enter */
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

/* border lines without grids or animation in it */
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