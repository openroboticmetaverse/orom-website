<template>
    <div>
        <PhotoSection>
            
            <template v-slot:content>
                <div class="mx-auto max-w-7xl px-4 lg:px-8">
                    <div class="mx-auto max-w-8xl lg:mx-0">
                        <!-- Increased header size and improved contrast -->
                        <h2 class="text-4xl font-bold tracking-tight text-left text-white sm:text-6xl mb-4 gradient-text-right">About</h2>
                        <h3 class="text-2xl font-semibold tracking-tight text-left text-white sm:text-5xl mt-2 ml-3">Who are we?
                        </h3>
                        <p class="mt-2 text-lg leading-8 text-left text-gray-100 mb-12 ml-12 mr-20">
                            We are open robotic metaverse, a student initiative currently in the founding process. Our
                            founders are students from RWTH Aachen University and FH Aachen and highly motivated to
                            strengthen the robotic community in and outside of Aachen, Germany.
                        </p>
                        <h3 class="text-2xl font-bold tracking-tight text-left text-white sm:text-5xl mt-6 ml-3">Vision</h3>
                        <p class="mt-2 text-lg leading-8 text-left text-gray-100 mb-12 ml-12 mr-20">
                            We aim to <strong>accelerate the development of robotic applications</strong> by making use of
                            the advancements in Simulation technology and Artificial Intelligence. We support individuals in
                            acquiring skills and knowledge in this field and connect them with companies in search of
                            solution implementers, while building a connected passionate community.
                        </p>
                        <h3 class="text-2xl font-bold tracking-tight text-left text-white sm:text-5xl mt-6 ml-3">Mission</h3>
                        <p class="mt-2 text-lg leading-8 text-left text-gray-100 mb-8 mb-12 ml-12 mr-20">
                            Creating a collaborative platform for robotics enthusiasts, beginners, and professionals to
                            learn, innovate, and share in a fun, engaging environment.
                        </p>
                        <!-- Call to Action button -->
                        <div class="relative mt-10 ">
                            <button
                                class="absolute right-0  bg-gray-900 bg-opacity-75 right-0 hover:bg-gray-900 duration-300 text-white-700 font-semibold hover:text-white py-4 px-10 border border-gray-500 hover:border-transparent rounded">
                                Explore!
                            </button>
                        </div>

                    </div>

                </div>

            </template>
        </PhotoSection>
        <PhotoSection>
            <template v-slot:image>
                <!-- Adjusted image opacity for better contrast -->
                <img src="../assets/dalle-about.png"
                    alt="A dynamic background image representing our vision in the open robotic metaverse"
                    class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-5">
            </template>
            <template v-slot:content>
                <div class="mx-auto max-w-7xl px-4 lg:px-8">
                    <div class="mx-auto max-w-8xl lg:mx-0">

                        <!-- Key Features Section -->
                        <h3 class="text-2xl font-bold tracking-tight text-left text-white sm:text-5xl mt-6 mb-4">Key Features
                        </h3>
                        <ul class="mt-2 text-lg leading-8 text-left text-gray-100 mb-12 ml-12 mr-20 list-disc list-inside">
                            <li><strong>Community:</strong> We are an active community open to professionals, beginners, and
                                enthusiasts alike. We strongly encourage the exchange of knowledge and Ideas.</li>
                            <li><strong>Project Platform:</strong> Our platform enables users to explore different robotics
                                projects, find inspiration, share their projects, or discover collaboration opportunities.
                                <em>In our vision, we aim to create an open Metaverse where solutions are engineered and
                                    showcased. This allows everyone to explore various running solutions, draw inspiration
                                    or offer support.</em></li>
                            <li><strong>Facilitation Tools:</strong> We provide ready-to-use building blocks that make
                                starting with robotics and simulation quicker and more intuitive.</li>
                            <li><strong>Educational Materials and Mentorship:</strong> We offer an easy-to-follow guide for
                                learning robotics. We encourage a culture of support where the more experienced members
                                assist those newer in the field and we believe that we all can always learn from each other.
                            </li>
                            <li><strong>Bridging Theory and Practice:</strong> We strive to bridge the gap between the
                                theoretical knowledge found in academic institutions and the practical needs of the
                                industry.</li>
                            <li><strong>Open-Source Involvement:</strong> We contribute to the open-source community and
                                welcome everyone to join our vision.</li>
                        </ul>

                        
                    </div>
                </div>
            </template>
        </PhotoSection>
        <PhotoSection>
            
            <template v-slot:content>
                <section class="dark:bg-gray-900">

                    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                        <h3 class="text-2xl font-bold tracking-tight text-left text-white sm:text-5xl mt-6 mb-4">Our Approach
                        </h3>

                        <div class="grid md:grid-cols-2 gap-8">
                            <!-- Card 1: Development -->
                            <div
                                class="bg-gray-900 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8 backdrop-blur-sm bg-[#6AB6A6]/10">
                                <h3 class="dark:text-white text-3xl md:text-4xl font-extrabold mb-2">Development</h3>
                                <p class="text-lg font-normal dark:text-gray-400 mb-6 text-justify">
                                    We are committed to developing valuable building blocks for simulation environments and
                                    robotic applications. Furthermore, we encourage the use of open-source libraries to
                                    prevent redundant work.
                                </p>
                            </div>

                            <!-- Card 2: Education and Learning -->
                            <div
                                class="bg-gray-900 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8 backdrop-blur-sm bg-[#32699C]/10">
                                <h3 class="dark:text-white text-3xl md:text-4xl font-extrabold mb-2">Learning
                                </h3>
                                <p class="text-lg font-normal dark:text-gray-400 mb-6 text-justify">
                                    We are dedicated contributors to our learning platform, emphasizing both content and
                                    practical insights.
                                </p>
                            </div>
                        </div>

                        <div class="grid md:grid-cols-2 gap-8">
                            <!-- Card 3: Event Organization and Participation -->
                            <div
                                class="bg-gray-900 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8 backdrop-blur-sm bg-[#D43773]/10">
                                <h3 class="dark:text-white text-3xl md:text-4xl font-extrabold mb-2">Events</h3>
                                <p class="text-lg font-normal dark:text-gray-400 mb-6 text-justify">
                                    We host relevant events, including presentations from researchers or startups in the
                                    field, as well as hackathons combined with social events to foster community spirit.
                                    Additionally, we aim to actively participate in external events such as ROSCon or
                                    Automatica.
                                </p>
                            </div>

                            <!-- Card 4: Collaboration -->
                            <div
                                class="bg-gray-900 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8 backdrop-blue-md bg-[#E69735]/10 hover:shadow-inner">
                                <h3 class="dark:text-white text-3xl md:text-4xl font-extrabold mb-2">Collaboration</h3>
                                <p class="text-lg font-normal dark:text-gray-400 mb-6 text-justify">
                                    We maintain active communication with institutes and researchers in the robotics field.
                                    This ensures we remain updated with the latest technologies while also collaborating
                                    with the industry to address relevant use cases.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </template>
        </PhotoSection>

    </div>
</template>

<script setup>
import PhotoSection from '~/components/landing/PhotoSection.vue';

useHead({
    title: 'About Us | Open Robotic Metaverse',
    meta: [
        {
            name: 'description', content: 'Discover Open Robotic Metaverse, an initiative by students from RWTH Aachen University and FH Aachen dedicated to advancing robotics.'
        }]
})

</script>

<style scoped>/* Add additional styles if needed */</style>
