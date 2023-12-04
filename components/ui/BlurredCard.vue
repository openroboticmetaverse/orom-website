<template>
    <div class="blurred-grid">
        <div
            class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-DEFAULT lg:h-12 lg:w-12 ">
            <Icon :name="iconName" :color="iconColor" :size="iconSize" />

        </div>
        <h3 class="mb-2 text-2xl font-light text-sky-600">{{ title }}</h3>
        <p class="text-gray-300">{{ description }}</p>
    </div>
</template>


<script>
export default {
    name: 'GridItem',
    props: {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        iconName: {
            type: String,
            required: true,
        },
        iconColor: {
            type: String,
            required: false,
            default: 'white'
        },
        iconSize: {
            type: String,
            required: true,
        },

    },
    mounted() {
        console.debug('iconSrc:', this.iconSrc);
    },
};
</script>
  
<style scoped>
.blurred-grid {
    @apply border-gray-200 p-8 md:p-12 backdrop-blur-[3px] rounded-lg shadow-lg hover:ring-[1px] hover:ring-[#4898A4] hover:shadow-[#4898A4]/40 bg-gradient-to-b from-white/5 to-gray-500/5 drop-shadow-md;
}
</style>
