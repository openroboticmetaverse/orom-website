<template>
    <div ref="navbarContainer" class="fixed sticky top-0 z-10 bg-black">
        <nav ref="navbar" class="bg-black">
            <div class="  px-2 sm:px-6 lg:px-8 ">
                <div class="relative flex h-20 items-center justify-between">
                    <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        <!-- Mobile menu button-->
                        <div @click="toggleMenu" class="menu-button" :class="{ 'change': isMenuOpen,  }">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
</div>

                    </div>
                    <div class="flex flex-1  justify-between sm:items-stretch ">
                        <div class="flex flex-shrink-0 ">
                            <img class="h-8  w-auto" src="/icon.svg"
                                alt="Your Company"> 
                                <p class="ml-5 mt-1">Open Robotic Metaverse</p>
                        </div>
                        
                        <div class="hidden sm:ml-6 sm:block ml-auto">
                            <div class="flex space-x-4">
                                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                                <NuxtLink to="/"
                                    class=" text-gray-300 duration-300 link link-underline link-underline-black rounded-md px-3 py-2 text-sm font-medium">
                                    Home</NuxtLink>
                                <NuxtLink to="/about"
                                    class=" text-gray-300 duration-300 link link-underline link-underline-black rounded-md px-3 py-2 text-sm font-medium">
                                    About</NuxtLink>
                                <NuxtLink to="/team"
                                    class=" text-gray-300 duration-300 link link-underline link-underline-black rounded-md px-3 py-2 text-sm font-medium">
                                    Team</NuxtLink>
                                <NuxtLink to="/projects"
                                    class=" text-gray-300 duration-300 link link-underline link-underline-black rounded-md px-3 py-2 text-sm font-medium">
                                    Projects</NuxtLink>
                                <NuxtLink to="/newsroom"
                                    class=" text-gray-300 duration-300 link link-underline link-underline-black rounded-md px-3 py-2 text-sm font-medium">
                                    Newsroom</NuxtLink>
                                <NuxtLink to="/contact"
                                    class=" text-gray-300 duration-300 link link-underline link-underline-black rounded-md px-3 py-2 text-sm font-medium">
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
                <div class="space-y-1 px-2 pb-3 pt-8">
                    <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                    <NuxtLink to="/" @click="toggleMenu"
                        class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-4 text-center text-xl font-medium">
                        Home</NuxtLink>
                    <NuxtLink to="/about" @click="toggleMenu"
                        class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-4 text-center text-xl font-medium">
                        About</NuxtLink>
                    <NuxtLink to="/team" @click="toggleMenu"
                        class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-4 text-center text-xl font-medium">
                        Team</NuxtLink>
                    <NuxtLink to="/projects" @click="toggleMenu"
                        class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-4 text-center text-xl font-medium">
                        Projects</NuxtLink>
                    <NuxtLink to="/newsroom" @click="toggleMenu"
                        class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-4 text-center text-xl font-medium">
                        Newsroom</NuxtLink>
                    <NuxtLink to="/contact" @click="toggleMenu"
                        class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-4 text-center text-xl font-medium">
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

};

const updateGradient = () => {
    const scrolled = window.scrollY;
    if (navbar.value) {
        navbar.value.style.background = `linear-gradient(to top, #192033 ,black ${scrolled / 2}px)`;
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
    window.addEventListener('scroll', updateGradient);
    window.addEventListener('click', handleClickOutside);
    nextTick(() => {
        if (navbarContainer.value) {
            navbarContainer.value.style.height = `${navbar.value.offsetHeight}px`;
        }
    });
});

const navbarContainer = ref(null);

onBeforeUnmount(() => {
    window.removeEventListener('scroll', updateGradient);
    window.removeEventListener('click', handleClickOutside);
});

</script>
<style scoped>
.router-link-exact-active {
    color: white;
}

/* Set a max-height that is higher than what you expect the menu to ever be */
/* For the expanded menu */
.expand {
    max-height: 1000px; /* Large enough to accommodate the content */
    height: 100vh;
    overflow: hidden;
    transition: max-height 0.5s ease-in-out;
}

/* For the collapsed menu */
.collapse {
    height: 0;
    max-height: 1px;
    overflow: hidden;
    transition: height max-height 0.5s ease-in-out;
}

.sticky.top-0.z-10 {
    padding-top: env(safe-area-inset-top);
}

.blurred-background {
    backdrop-filter: blur(10px); /* Feel free to adjust the px to get the desired blur */
}

/* hamburger menu */
.menu-button {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.bar1, .bar2, .bar3 {
    position: absolute;
    width: 35px;
    height: 3px;
    background-color: white;
    transition: all 0.3s ease;
}

.bar1 {
    top: 0;
}

.bar2 {
    top: 11px;
}

.bar3 {
    top: 22px;
}

.change .bar1 {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-9px, 6px);
}

.change .bar2 {
    opacity: 0;
}

.change .bar3 {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
}
/* link underline */

.link-underline {
		border-bottom-width: 0;
		background-image: linear-gradient(transparent, transparent), linear-gradient(#ffffff, #ffffff);
		background-size: 0 3px;
		background-position: 0 100%;
		background-repeat: no-repeat;
		transition: background-size .5s ease-in-out;
	}

	.link-underline-black {
		background-image: linear-gradient(transparent, transparent), linear-gradient(to right,  rgb(34, 248, 255), rgb(34, 86, 255))
	}

	.link-underline:hover {
		background-size: 100% 3px;
		background-position: 0 100%
	}
</style>