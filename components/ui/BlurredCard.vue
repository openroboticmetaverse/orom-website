<template>
    <div class="blurred-grid p-4 rounded-lg shadow-md">
        <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12">
            <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6" fill="white"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path  d="{{iconPath}}"></path>
            </svg>
        </div>
        <h3 class="mb-2 text-xl font-bold">{{ title }}</h3>
        <p class="text-gray-500 ">{{ description }}</p>
    </div>
</template>

<script>
export default {
    name: 'GridItem',
    props: {
        iconPath: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
};
</script>
  
<style scoped>
.blurred-grid {
    @apply border-gray-200 p-8 md:p-12 backdrop-blur-[2px] bg-white/10 rounded-lg shadow-lg;
}
</style>
  