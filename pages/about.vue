<template >
<div>
    <ThreejsCanva />
    

    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold gradient-text-left ">about</h2>
        <p class="sm:text-xl">We are a student initiative currently in the founding process. Our founders are students from
            RWTH Aachen University and FH Aachen and highly motivated to strengthen the robotic community in and outside of
            Aachen, Germany. </p>
    </div>

    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold gradient-text-left ">vision</h2>
        <p class="sm:text-xl">We aim to accelerate the development of robotic applications by making use of the advancements
            in Simulation technology and Artificial Intelligence. We support individuals in acquiring skills and knowledge
            in this field and connect them with companies in search of solution implementers, while building a connected
            passionate community.</p>
    </div>

    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div class="max-w-screen mb-8 lg:mb-16">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold gradient-text-left ">mission</h2>
            <p class="sm:text-xl">Creating a collaborative platform for robotics enthusiasts, beginners, and professionals
                to learn, innovate, and share in a fun, engaging environment. </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <GridItem v-for="item in gridItems" :key="item.title" :iconPath="item.iconPath" :title="item.title"
                :description="item.description" />
        </div>
    </div>

    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div class="max-w-screen mb-8 lg:mb-16">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold gradient-text-left ">the vision we want to achieve</h2>
            <p class="sm:text-xl">orom is forging a new realm at the intersection of robotics and virtual environments. Our
                collective vision is to build a metaverse where innovative minds can develop, share, and explore
                the future of robotics in a collaborative ecosystem.</p>
        </div>

        <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div class="blurred-grid">
                <div
                    class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"></path>
                    </svg>
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">Open-Source</h3>
                <p class="text-gray-500 dark:text-gray-400">Plan it, create it, launch it. Collaborate seamlessly with all
                    the organization and hit your marketing goals every month with our marketing plan.</p>
            </div>
            <div class="blurred-grid">
                <div
                    class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z">
                        </path>
                    </svg>
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">Project Platform</h3>
                <p class="text-gray-500 dark:text-gray-400">Protect your organization, devices and stay compliant with our
                    structured workflows and custom permissions made for you.</p>
            </div>
            <div class="blurred-grid">
                <div
                    class=" flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                            clip-rule="evenodd"></path>
                        <path
                            d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z">
                        </path>
                    </svg>
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">Events and Learning</h3>
                <p class="text-gray-500 dark:text-gray">Auto-assign tasks, send Slack messages, and much more. Now power up
                    with hundreds of new templates to help you get started.</p>
            </div>
            <div class="blurred-grid">
                <div
                    class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z">
                        </path>
                        <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                            clip-rule="evenodd"></path>
                    </svg>
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white ">Incubation & Support</h3>
                <p class="text-gray-500 dark:text-gray-400">Audit-proof software built for critical financial operations
                    like month-end close and quarterly budgeting.</p>
            </div>
            <div class="blurred-grid">
                <div
                    class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z">
                        </path>
                    </svg>
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">Tools and Resources</h3>
                <p class="text-gray-500 dark:text-gray-400">Craft beautiful, delightful experiences for both marketing and
                    product with real cross-company collaboration.</p>
            </div>
            <div class="blurred-grid">
                <div
                    class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                            clip-rule="evenodd"></path>
                    </svg>
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">Community Engagement</h3>
                <p class="text-gray-500 dark:text-gray-400">Keep your company's lights on with customizable, iterative, and
                    structured workflows built for all efficient teams and individual.</p>
            </div>
        </div>
    </div>
</div>
</template>
  
<script setup>
import ThreejsCanva from '~/components/ThreejsCanva.vue';
import GridItem from '~/components/ui/BlurredCard';

const gridItems = ref([
  {
    iconPath: '../assets/icons/community-icon.svg',
    title: 'Community',
    description: 'We are an active community open to professionals, beginners, and enthusiasts alike. We strongly encourage the exchange of knowledge and ideas.'
  },
  {
    iconPath: '../assets/icons/project-platform-icon.svg',
    title: 'Project Platform',
    description: 'In our vision, we aim to create an open Metaverse where solutions are engineered and showcased. This allows everyone to explore various running solutions, draw inspiration or offer support.'
  },
  {
    iconPath: '../assets/icons/facilitation-tools-icon.svg',
    title: 'Facilitation Tools',
    description: 'We provide ready-to-use building blocks that make starting with robotics and simulation quicker and more intuitive.'
  },
  {
    iconPath: '../assets/icons/educational-materials-icon.svg',
    title: 'Educational and Mentorship',
    description: 'We offer an easy-to-follow guide for learning robotics. We encourage a culture of support where members assist each other.'
  },
  {
    iconPath: 'M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z',
    title: 'Bridging Theory and Practice',
    description: 'We strive to bridge the gap between the theoretical knowledge found in academic institutions and the practical needs of the industry.'
  },
  {
    iconPath: 'M 17.226563 46.582031 C 17.105469 46.582031 16.984375 46.5625 16.871094 46.519531 C 7.976563 43.15625 2 34.507813 2 25 C 2 12.316406 12.316406 2 25 2 C 37.683594 2 48 12.316406 48 25 C 48 34.507813 42.023438 43.15625 33.128906 46.519531 C 32.882813 46.613281 32.605469 46.605469 32.363281 46.492188 C 32.121094 46.386719 31.933594 46.183594 31.839844 45.9375 L 26.890625 32.828125 C 26.695313 32.3125 26.953125 31.734375 27.472656 31.539063 C 30.179688 30.519531 32 27.890625 32 25 C 32 21.140625 28.859375 18 25 18 C 21.140625 18 18 21.140625 18 25 C 18 27.890625 19.820313 30.519531 22.527344 31.539063 C 23.046875 31.734375 23.304688 32.3125 23.109375 32.828125 L 18.160156 45.933594 C 18.066406 46.183594 17.878906 46.382813 17.636719 46.492188 C 17.507813 46.554688 17.367188 46.582031 17.226563 46.582031 Z',
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