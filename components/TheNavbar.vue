<template>
    <div ref="navbarContainer" class="fixed sticky top-0 z-10">
        <nav ref="navbar" class="bg-black">
            <div class="  px-2 sm:px-6 lg:px-8 ">
                <div class="relative flex h-20 items-center justify-between">
                    <div class="absolute inset-y-0 right-0 flex items-center sm:hidden ">
                        <!-- Mobile menu button-->
                        <button type="button" @click="toggleMenu" ref="menuButton"
                            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu" aria-expanded="false">
                            <span class="absolute -inset-0.5"></span>
                            <span class="sr-only">Open main menu</span>
                            <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          -->
                            <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          -->
                            <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div class="flex flex-1  justify-between sm:items-stretch ">
                        <div class="flex flex-shrink-0 ">
                            <img class="h-10 w-auto" src="../assets/icon-with-text.png"
                                alt="open robotic metaverse logo">
                        </div>
                        <div class="hidden sm:ml-6 sm:block ml-auto">
                            <div class="flex space-x-4">
                                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                                <NuxtLink to="/"
                                    class="nav-underline">
                                    Home</NuxtLink>
                                <NuxtLink to="/about"
                                    class="nav-underline">
                                    About</NuxtLink>
                                <NuxtLink to="/team"
                                    class="nav-underline">
                                    Team</NuxtLink>
                                <NuxtLink to="/projects"
                                    class="nav-underline">
                                    Projects</NuxtLink>
                                <NuxtLink to="/newsroom"
                                    class="nav-underline">
                                    Newsroom</NuxtLink>
                                <NuxtLink to="/contact"
                                    class="nav-underline">
                                    Contact</NuxtLink>
                            </div>
                        </div>
                    </div>

                    <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          -->

                </div>
            </div>

            <!-- Mobile menu, show/hide based on menu state. -->
            <div :class="isMenuOpen ? 'expand' : 'collapse'"
                class="sm:hidden transition-all ease-in-out duration-500 overflow-hidden" id="mobile-menu" role="menu">
                <div class="space-y-1 px-2 pb-3 pt-2">
                    <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                    <NuxtLink to="/" @click="toggleMenu"
                        class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                        Home</NuxtLink>
                    <NuxtLink to="/about" @click="toggleMenu"
                        class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                        About</NuxtLink>
                    <NuxtLink to="/team" @click="toggleMenu"
                        class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                        Team</NuxtLink>
                    <NuxtLink to="/projects" @click="toggleMenu"
                        class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                        Projects</NuxtLink>
                    <NuxtLink to="/newsroom" @click="toggleMenu"
                        class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                        Newsroom</NuxtLink>
                    <NuxtLink to="/contact" @click="toggleMenu"
                        class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                        Contact</NuxtLink>

                </div>
            </div>

        </nav>
    </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';

const isMenuOpen = ref(false);
const navbar = ref(null);
const mobileMenu = ref(null);
const menuButton = ref(null); // New ref to store the menu button element

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
    const mainContent = document.getElementById('main-content');
    if (isMenuOpen.value) {
        mainContent.classList.add('blurred-background');
    } else {
        mainContent.classList.remove('blurred-background');
    }
};

const updateGradient = () => {
    const scrolled = window.scrollY;
    if (navbar.value) {
        navbar.value.style.background = `linear-gradient(180deg, rgba(0,0,0,${Math.min(scrolled * 0.0005, 0.8)}) 0%, rgba(0,0,0,0) 100%)`;
    }
};

const updateNavbarStyle = () => {
    const scrolled = window.scrollY;
    const blurIntensity = Math.min(scrolled * 0.1, 10); // Max blur at 2px
    const backgroundColorOpacity = Math.min(scrolled * 0.001, 0.05); // Max opacity at 0.1 (10%)

    if (navbar.value) {
        navbar.value.style.backdropFilter = `blur(${blurIntensity}px)`;
        navbar.value.style.backgroundColor = `rgba(255, 255, 255, ${backgroundColorOpacity})`;
    }
};

const handleClickOutside = (event) => {
    if (menuButton.value && menuButton.value.contains(event.target)) {
        return;
    }
    if (mobileMenu.value && !mobileMenu.value.contains(event.target)) {
        isMenuOpen.value = false;
    }
};

onMounted(() => {
    window.addEventListener('scroll', updateNavbarStyle);
    window.addEventListener('click', handleClickOutside);
    nextTick(() => {
        if (navbarContainer.value) {
            navbarContainer.value.style.height = `${navbar.value.offsetHeight}px`;
        }
    });
});

const navbarContainer = ref(null);

onBeforeUnmount(() => {
    window.removeEventListener('scroll', updateNavbarStyle);
    window.removeEventListener('click', handleClickOutside);
});

</script>
<style scoped>
.router-link-exact-active {
    color: white;
}

/* Set a max-height that is higher than what you expect the menu to ever be */
.expand {
    max-height: 500px;
}

/* Set max-height to 0 and hide the overflow */
.collapse {
    max-height: 0;
}

.sticky.top-0.z-10 {
    padding-top: env(safe-area-inset-top);
}

.blurred-background {
    backdrop-filter: blur(10px); /* Feel free to adjust the px to get the desired blur */
}

nav {
    backdrop-filter: blur(0px); /* Adjust initial blur if needed */
}

/* Tailwind CSS class using @apply for base styles */
.nav-underline {
  @apply inline-block relative text-gray-300 duration-300 hover:text-white px-3 py-2 text-sm font-medium;
}

/* Custom CSS for the animated underline using pseudo-element */
.nav-underline::after {
  content: '';
  display: block;
  width: 0;
  height: 2px; /* Thickness of the underline */
  background: currentColor; /* Uses the text color */
  transition: width 0.2s ease-in-out; /* Animation for the underline */
  position: absolute;
  bottom: 0; /* Position at the bottom of the element */
  left: 0;
}

/* Change the width of the pseudo-element on hover to create the underline effect */
.nav-underline:hover::after,
.nav-underline:focus::after {
  width: 80%;
}

</style>