<template >
    <div class="">
        <!-- <ThreejsCanva /> -->


        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <h2 class="about-title">about</h2>
            <p class="about-text">We are a student initiative currently in the founding process. Our founders are students
                from
                RWTH Aachen University and FH Aachen and highly motivated to strengthen the robotic community in and outside
                of
                Aachen, Germany. </p>
        </div>

        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <h2 class="about-title">vision</h2>
            <p class="about-text">We aim to accelerate the development of robotic applications by making use of the
                advancements
                in Simulation technology and Artificial Intelligence. We support individuals in acquiring skills and
                knowledge
                in this field and connect them with companies in search of solution implementers, while building a connected
                passionate community.</p>
        </div>

        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div class="max-w-screen mb-8 lg:mb-16">
                <h2 class="about-title">mission</h2>
                <p class="about-text">Creating a collaborative platform for robotics enthusiasts, beginners, and
                    professionals
                    to <b>learn</b>, <b>innovate</b>, and <b>share</b> in a fun, engaging environment. </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                <GridItem v-for="item in missionGridItems" :key="item.title" :iconName="item.iconName"
                    :iconColor="item.iconColor" :iconSize="item.iconSize" :title="item.title"
                    :description="item.description" />
            </div>
        </div>

        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div class="max-w-screen mb-8 lg:mb-16">
                <h2 class="about-title">approach</h2>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-8">
                <GridItem v-for="item in approachGridItems" :key="item.title" :iconName="item.iconName"
                    :iconColor="item.iconColor" :iconSize="item.iconSize" :title="item.title"
                    :description="item.description" />
            </div>
        </div>


        <!-- <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div class="max-w-screen mb-8 lg:mb-16">
                <h2 class="mb-4 text-6xl tracking-tight font-extralight gradient-text-title ">the vision we want to achieve
                </h2>
                <p class="about-text">orom is forging a new realm at the intersection of robotics and virtual environments.
                    Our
                    collective vision is to build a metaverse where innovative minds can develop, share, and explore
                    the future of robotics in a collaborative ecosystem.</p>
            </div>

            <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                <GridItem v-for="item in firstGridItems" :key="item.title" :iconName="item.iconName"
                    :iconColor="item.iconColor" :iconSize="item.iconSize" :title="item.title"
                    :description="item.description" />
            </div>
        </div> -->
    </div>
</template>
  
<script setup>
import ThreejsCanva from '~/components/ThreejsCanva.vue';
import GridItem from '~/components/ui/BlurredCard';
const missionGridItems = ref([
    {
        iconName: 'mdi:human-capacity-decrease',
        iconSize: '40px',
        title: 'Community',
        description: 'We are an active community open to professionals, beginners, and enthusiasts alike. We strongly encourage the exchange of knowledge and ideas.'
    },
    {
        iconName: 'carbon:platforms',
        iconSize: '40px',
        title: 'Project Platform',
        description: 'In our vision, we aim to create an open Metaverse where solutions are engineered and showcased. This allows everyone to explore various running solutions, draw inspiration or offer support.'
    },
    {
        iconName: 'fluent:window-dev-tools-24-regular',
        iconSize: '40px',
        title: 'Facilitation Tools',
        description: 'We provide ready-to-use building blocks that make starting with robotics and simulation quicker and more intuitive.'
    },
    {
        iconName: 'mdi:hand-heart',
        iconSize: '40px',
        title: 'Educational and Mentorship',
        description: 'We offer an easy-to-follow guide for learning robotics. We encourage a culture of support where members assist each other.'
    },
    {
        iconName: 'eos-icons:machine-learning-outlined',
        iconSize: '40px',
        title: 'Bridging Theory and Practice',
        description: 'We strive to bridge the gap between the theoretical knowledge found in academic institutions and the practical needs of the industry.'
    },
    {
        iconName: 'ri:open-source-fill',
        iconSize: '40px',
        title: 'Open-Source Involvement',
        description: 'We contribute to the open-source community and welcome everyone to join our vision.'
    }
]);

const approachGridItems = ref([
    {
        iconName: 'mdi:code-block-tags',
        iconSize: '40px',
        title: 'Development',
        description: 'We are committed to developing valuable building blocks for simulation environments and robotic applications. Furthermore, we encourage the use of open-source libraries to prevent redundant work.'
    },
    {
        iconName: 'carbon:machine-learning-model',
        iconSize: '40px',
        title: 'Learning',
        description: 'We are dedicated contributors to our learning platform, emphasizing both content and practical insights.'
    },
    {
        iconName: 'material-symbols:calendar-today-outline',
        iconSize: '40px',
        title: 'Events',
        description: 'We host relevant events, including presentations from researchers or startups in the field, as well as hackathons combined with social events to foster community spirit. Additionally, we aim to actively participate in external events such as ROSCon or Automatica.'
    },
    {
        iconName: 'mdi:hand-heart',
        iconSize: '40px',
        title: 'Collaboration',
        description: 'We maintain active communication with institutes and researchers in the robotics field. This ensures we remain updated with the latest technologies while also collaborating with the industry to address relevant use cases.'
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
    @apply text-xl font-light tracking-tight text-white;
}

.about-title {
    @apply mb-4 text-6xl tracking-tight font-extralight gradient-text-title;
}
.about-text {
    @apply text-xl font-normal text-gray-300;
}

.blurred-grid {
    @apply border-gray-200 p-8 md:p-12 backdrop-blur-[2px] bg-white/10 rounded-lg shadow-lg;
}

.gradient-text-title {
  /* background: linear-gradient(90deg, #4bb8a6, #085ba0 );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent; */
  @apply bg-gradient-to-r from-[#4bb8a6] to-[#085ba0] bg-clip-text text-transparent;
}
.gradient-text-title-1 {
  background: linear-gradient(45deg,#085ba0, #4bb8a6 );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.card-text {
    @apply text-lg sm:text-xl font-normal text-gray-300;
}
</style>  