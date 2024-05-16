<template>
    <div v-if="isVisible"
        class="banner flex justify-between items-center fixed top-10 left-1/2 transform -translate-x-1/2 w-4/5 max-w-lg bg-gradient-to-r

from-[#6b5dec54]  to-[#60a5fa42] bg-opacity-40 backdrop-blur-xl text-white p-4 border border-white border-opacity-10 rounded-lg shadow-lg z-50 mt-20 ">
        <slot>
            <p class="m-0 flex-grow text-white font-normal	">{{ message }}</p>
        </slot>
        <button @click="dismissBanner"
            class="ml-4 px-2 py-1 bg-transparent text-white rounded cursor-pointer hover:bg-blue-700">&times;</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    message: {
        type: String,
        default: 'This is a banner message',
    },
});

const isVisible = ref(true);

const dismissBanner = () => {
    isVisible.value = false;
};
</script>

<style scoped>
.banner {
    box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.1), 0 10px 20px -5px rgba(34, 86, 255, 0.2);
}

.banner p {
    color: #ffffff;
    font-size: 1rem;
    line-height: 1.5;
}

.banner button {
    font-size: 1.25rem;
    line-height: 1.5;
}
</style>
