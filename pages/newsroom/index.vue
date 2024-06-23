<template>
  <div>
    <CommonEmptySection>
      <template v-slot:mainTitle2>
        <span class="gradient-text-right">Hear from us!</span>
      </template>
    </CommonEmptySection>
    <div class="min-h-screen bg-black text-white p-8 grid grid-cols-1">
      <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
        <div class="w-full">
          <h2 class="text-2xl font-bold text-center mb-6 flex justify-center items-center space-x-2">
            We are on
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
              id="Layer_1" width="24px" height="24px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;"
              xml:space="preserve" class="w-8 h-8 mx-4">
              <path
                d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z"
                fill="#FFFFFF" />
            </svg>
            !
          </h2>
          <UiTwitterPosts />
        
        </div>
        <div class="w-full  h-full">
          <h2 class="text-2xl font-bold text-center mb-6 flex justify-center items-center space-x-2">
            Follow us on
            <svg fill="#000000" height="24px" width="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 310 310" xml:space="preserve"
              class="w-8 h-8 mx-4">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g id="XMLID_801_">
                  <path id="XMLID_802_" fill="white"
                    d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73 C77.16,101.969,74.922,99.73,72.16,99.73z">
                  </path>
                  <path id="XMLID_803_" fill="white"
                    d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4 c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z">
                  </path>
                  <path id="XMLID_804_" fill="white"
                    d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599 c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319 c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995 C310,145.43,300.549,94.761,230.454,94.761z">
                  </path>
                </g>
              </g>
            </svg>
          </h2>
          <UiLinkedinPosts />
        </div>

      </div>
      <div class="w-full  py-16">
            <h2 class="text-2xl font-bold text-center mb-6 flex justify-center items-center space-x-2">
              Check us on
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50" class="w-8 h-8 mx-4">
                <path fill="white"
                  d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z">
                </path>
              </svg>
            </h2>
            <UiInstagramPost :srcs="instagramPosts" />
          </div>
    </div>
  </div>
</template>

<script setup>
// add head tag
useHead({
  title: "Newsroom | open robotic metaverse",
  meta: [
    {
      name: "description",
      content: "Newsroom | Open Robotic Metaverse",
    },
  ],
});

const instagramPosts = [
  'https://www.instagram.com/reel/C8NTdvho303/?utm_source=ig_embed&amp;utm_campaign=loading',
  'https://www.instagram.com/p/C0sAYhQonbr/?utm_source=ig_embed&utm_campaign=loading',
  'https://www.instagram.com/p/C65WjDGoiGE/?utm_source=ig_embed&amp;utm_campaign=loading',

];
</script>


<style scoped>
.email-wrap {
  word-break: break-all;
}
</style>
