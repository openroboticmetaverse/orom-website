<template>
  <div>
    <footer class="bg-gray dark:bg-gray-900">
      <div class="mx-auto w-full max-w-screen-7xl p-9 py-6 lg:py-8">
        <div class="flex justify-between">
          <div class="mb-6 md:mb-0">
            <NuxtLink to="/" class="flex items-center">
              <nuxt-img
                src="w_300,f_auto/openroboverse/logo/icon_voqjko.svg"
                class="h-8 w-30 sm:h-14 mr-3"
                provider="cloudinary"
                alt="open robotic metaverse Logo"
              />
              <span
                class="self-center lg:text-xl text-sm font-semibold whitespace-nowrap dark:text-white lg:block hidden"
              >
                <div>open</div>
                <div>robotic</div>
                <div>metaverse</div>
              </span>
            </NuxtLink>
          </div>
          <div
            class="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white"
          >
            <ul
              class="flex flex-col sm:flex-row text-gray-300 dark:text-gray-400 font-medium"
            >
              <li class="mb-4 sm:mb-0 sm:mr-4">
                <NuxtLink to="/privacy" class="hover:text-white"
                  >Privacy Policy</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/imprint" class="hover:text-white"
                  >Imprint</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
        <hr
          class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
        />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-300 sm:text-center dark:text-gray-400"
            >© 2025 open robotic metaverse e.V. .
            <a href="https://www.netlify.com/" class="hover:text-white"
              >Powered by Netlify</a
            >
          </span>
          <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <a
              href="https://x.com/orom_org"
              class="text-gray-400 hover:text-white dark:hover:text-white"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 50 50"
              >
                <path
                  d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"
                />
              </svg>
              <span class="sr-only">X</span>
            </a>

            <a
              href="https://www.linkedin.com/company/openroboticmetaverse/"
              class="text-gray-400 hover:text-white dark:hover:text-white"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 50 50"
              >
                <path
                  d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
                />
              </svg>
              <span class="sr-only">LinkedIn</span>
            </a>

            <a
              href="https://github.com/openroboticmetaverse"
              class="text-gray-400 hover:text-white dark:hover:text-white"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">GitHub account</span>
            </a>
            <a
              href="https://www.instagram.com/openroboticmetaverse/"
              class="text-gray-400 hover:text-white dark:hover:text-white"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">Instagram account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
</script>
