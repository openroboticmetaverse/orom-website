<template >
    <div class="font-poppins">
        <ThreejsCanva />


        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <h2 class="mb-4 text-6xl tracking-tight font-extralight gradient-text-left ">about</h2>
            <p class="sm:text-xl">We are a student initiative currently in the founding process. Our founders are students
                from
                RWTH Aachen University and FH Aachen and highly motivated to strengthen the robotic community in and outside
                of
                Aachen, Germany. </p>
        </div>

        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <h2 class="mb-4 text-6xl tracking-tight font-extralight gradient-text-left ">vision</h2>
            <p class="sm:text-xl">We aim to accelerate the development of robotic applications by making use of the
                advancements
                in Simulation technology and Artificial Intelligence. We support individuals in acquiring skills and
                knowledge
                in this field and connect them with companies in search of solution implementers, while building a connected
                passionate community.</p>
        </div>

        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div class="max-w-screen mb-8 lg:mb-16">
                <h2 class="mb-4 text-6xl tracking-tight font-extralight gradient-text-left ">mission</h2>
                <p class="sm:text-xl">Creating a collaborative platform for robotics enthusiasts, beginners, and
                    professionals
                    to learn, innovate, and share in a fun, engaging environment. </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                <GridItem v-for="item in firstGridItems" :key="item.title" :iconName="item.iconName"
                    :iconColor="item.iconColor" :iconSize="item.iconSize" :title="item.title"
                    :description="item.description" />
            </div>
        </div>

        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div class="max-w-screen mb-8 lg:mb-16">
                <h2 class="mb-4 text-6xl tracking-tight font-extralight gradient-text-left ">the vision we want to achieve
                </h2>
                <p class="sm:text-xl">orom is forging a new realm at the intersection of robotics and virtual environments.
                    Our
                    collective vision is to build a metaverse where innovative minds can develop, share, and explore
                    the future of robotics in a collaborative ecosystem.</p>
            </div>

            <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                <GridItem v-for="item in firstGridItems" :key="item.title" :iconName="item.iconName"
                    :iconColor="item.iconColor" :iconSize="item.iconSize" :title="item.title"
                    :description="item.description" />
            </div>
        </div>
    </div>
</template>
  
<script setup>
import ThreejsCanva from '~/components/ThreejsCanva.vue';
import GridItem from '~/components/ui/BlurredCard';
const firstGridItems = ref([
    {
        iconName: 'mdi:human-capacity-decrease',
        iconSize: '40px',
        title: 'Community',
        description: 'We are an active community open to professionals, beginners, and enthusiasts alike. We strongly encourage the exchange of knowledge and ideas.'
    },
    {
        iconName: 'mdi:hand-heart',
        iconSize: '25px',
        title: 'Project Platform',
        description: 'In our vision, we aim to create an open Metaverse where solutions are engineered and showcased. This allows everyone to explore various running solutions, draw inspiration or offer support.'
    },
    {
        iconName: 'uil:github',
        iconSize: '25px',
        title: 'Facilitation Tools',
        description: 'We provide ready-to-use building blocks that make starting with robotics and simulation quicker and more intuitive.'
    },
    {
        iconName: 'uil:github',
        iconSize: '25px',
        title: 'Educational and Mentorship',
        description: 'We offer an easy-to-follow guide for learning robotics. We encourage a culture of support where members assist each other.'
    },
    {
        iconName: 'uil:github',
        iconSize: '25px',
        title: 'Bridging Theory and Practice',
        description: 'We strive to bridge the gap between the theoretical knowledge found in academic institutions and the practical needs of the industry.'
    },
    {
        iconName: 'uil:github',
        iconSize: '25px',
        title: 'Open-Source Involvement',
        description: 'We contribute to the open-source community and welcome everyone to join our vision.'
    }
]);

useHead({
    title: 'About | open robotic metaverse',
    meta: [
        {
            name: 'description',
            content: 'Discover Open Robotic Metaverse, an initiative by students from RWTH Aachen University and FH Aachen dedicated to advancing robotics.'
        }
    ]
})

</script>
  
<style scoped>
.btn-explore {
    @apply bg-[#5FA7A4] text-white font-semibold py-4 px-10 border border-gray-500 hover:border-transparent rounded;
}

.card-title {
    @apply text-2xl font-bold tracking-tight text-white;
}

.blurred-grid {
    @apply border-gray-200 p-8 md:p-12 backdrop-blur-[2px] bg-white/10 rounded-lg shadow-lg;
}


.card-text {
    @apply text-lg font-normal text-gray-300;
}
</style>  