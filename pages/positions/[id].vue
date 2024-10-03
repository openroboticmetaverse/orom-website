<template>
  <div class="container mx-auto px-4 py-8 max-w-4xl">
    <!-- Back button -->
    <NuxtLink to="/open-positions"
      class="text-teal-300 hover:text-teal-200 mb-6 inline-block group transition-all duration-300">
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        class="w-5 h-5 mr-2 inline transition-transform duration-300 group-hover:-translate-x-1" viewBox="0 0 24 24">
        <path d="M19 12H5M12 19l-7-7 7-7"></path>
      </svg>
      Back to Open Positions
    </NuxtLink>

    <!-- Position details card -->
    <div v-if="position"
      class="bg-gray-900 rounded-lg shadow-lg p-8 border border-cyan-300/30 hover:border-cyan-300/50 transition-all duration-300 relative overflow-hidden">
      <!-- Grid overlay -->
      <div class="grid-overlay absolute inset-0"></div>

      <!-- Content -->
      <div class="relative z-10">
        <h1 class="text-4xl font-bold mb-6 text-white gradient-text-eft">{{ position.title }}</h1>

        <!-- Tags -->
        <div class="flex flex-wrap gap-2 mb-8">
          <span v-for="tag in position.tags" :key="tag"
            class="bg-teal-600/30 text-teal-300 px-2 py-0.5 rounded-full text-sm border border-teal-500/50 transition-all duration-300 hover:bg-teal-600/50">
            {{ tag }}
          </span>
        </div>

        <!-- About Us section -->
        <section class="mb-10">
          <h2 class="text-3xl font-semibold mb-6 gradient-text-title">About Us</h2>
          <p class="text-gray-300 mb-6 leading-relaxed"><b>open robotic metaverse e.V.</b> is an initiative aimed at
            strengthening
            collaboration and knowledge exchange within the robotics community. Besides local events, we're working on
            an open-source project: a web-based collaborative platform designed to encourage exchange between robotic
            projects in an interactive 3D world.</p>

          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-xl font-semibold mb-4 text-teal-300">Why Join Us?</h3>
              <ul class="text-gray-300 mb-4 list-disc pl-5 space-y-2">
                <li>Gain real-world experience in a startup-like environment</li>
                <li>Develop highly sought-after skills</li>
                <li>Be part of an innovative, passionate community</li>
                <li>Shape the direction of an exciting, emerging field</li>
                <li>Network with like-minded people and industry professionals</li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-4 text-teal-300">Who We're Looking For</h3>
              <ul class="text-gray-300 mb-4 leading-relaxed ">
                <li>Motivated people ready to dive into new technologies</li>
                <li> No
                  expert-level skills
                  required just bring your passion and commitment!</li>
              </ul>

              <h3 class="text-xl font-semibold mb-4 text-teal-300">Our Culture</h3>
              <p class="text-gray-300 mb-4 leading-relaxed">Fast-paced, innovative, and collaborative. We value
                initiative, creativity, and
                teamwork.</p>
            </div>
          </div>
        </section>

        <!-- Tasks and Skills section -->
        <section class="mb-10">
          <h2 class="text-3xl font-semibold mb-6 gradient-text-left"> Tasks, and Skills You'll Develop</h2>
          <ul class="text-gray-300 mb-4 list-disc pl-5 space-y-3">
            <li v-for="(item, index) in position.description" :key="index" class="leading-relaxed">
              {{ item }}
            </li>
          </ul>
        </section>

        <!-- Call to Action section -->
        <section class="bg-teal-900/30 p-6 rounded-lg border border-teal-500/50">
          <h2 class="text-3xl font-semibold mb-4 gradient-text">🚀 Ready?</h2>
          <p class="text-gray-300 mb-4 leading-relaxed">Apply now to help
            shape
            the future of robotics!</p>

          <p class="text-gray-300 mb-4 leading-relaxed"><strong>Send us your application now: </strong>
            <a href="mailto:info@openroboticmetaverse.com"
              class="text-teal-300 hover:text-teal-200 underline">info@openroboticmetaverse.com</a>
          </p>

          <p class="text-gray-300 mb-4 italic">Note: We're seeking committed individuals willing to learn and
            contribute.
            Show us your passion!</p>
          <!-- 
          <button
            class="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">
            Apply Now
          </button> -->
        </section>
      </div>
    </div>

    <!-- Fallback for position not found -->
    <div v-else class="text-center py-16">
      <h2 class="text-3xl font-bold text-gray-300 mb-4">Oops! Position not found.</h2>
      <p class="text-gray-400 mb-8">The position you're looking for doesn't seem to exist.</p>
      <NuxtLink to="/open-positions"
        class="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
        View All Positions
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const positionId = parseInt(route.params.id);

// This is a placeholder. In a real application, you'd fetch this data from an API or store.
const positions = ref([
  {
    "id": 1,
    "title": "UI/UX Designer",
    "shortDescription": "Create intuitive interfaces for websites and applications.",
    "description": [
      "Learn and apply user-centered design principles",
      "Gain hands-on experience with Figma",
      "Develop skills in user research and usability testing",
      "Create intuitive interfaces for websites and applications"
    ],
    "tags": ["Figma", "User Research", "Usability Testing", "UI/UX"]
  },
  {
    "id": 2,
    "title": "Frontend Developer",
    "shortDescription": "Build responsive and interactive user interfaces using React and TypeScript.",
    "description": [
      "Master React and TypeScript for web development",
      "Learn to build responsive and interactive user interfaces",
      "Explore web performance optimization techniques",
      "Implement user analytics and metrics"
    ],
    "tags": ["React", "TypeScript", "Web Performance", "Frontend"]
  },
  {
    "id": 3,
    "title": "3D Visualization Developer",
    "shortDescription": "Create immersive 3D visualizations using Three.js and React.",
    "description": [
      "Dive into Three.js for 3D graphics programming",
      "Combine 3D rendering with React applications",
      "Optimize 3D visualizations for web browsers",
      "Explore advanced computer graphics techniques"
    ],
    "tags": ["Three.js", "React", "3D Graphics", "WebGL"]
  },
  {
    "id": 4,
    "title": "Backend Developer",
    "shortDescription": "Build robust server-side applications using Django and Python.",
    "description": [
      "Build robust server-side applications with Django and Python",
      "Design and implement RESTful APIs",
      "Work with PostgreSQL databases",
      "Learn about server scalability and security best practices"
    ],
    "tags": ["Django", "Python", "PostgreSQL", "RESTful APIs", "Backend"]
  },
  {
    "id": 5,
    "title": "Website Maintainer",
    "shortDescription": "Manage and update live websites using Vue.js and TypeScript.",
    "description": [
      "Gain practical experience with Vue.js and TypeScript",
      "Manage and update live websites",
      "Implement new features based on user feedback",
      "Ensure cross-browser and cross-device compatibility"
    ],
    "tags": ["Vue.js", "TypeScript", "Website Maintenance", "Frontend"]
  },
  {
    "id": 6,
    "title": "Simulation Developer",
    "shortDescription": "Create physics-based simulations for robotic systems using MuJoCo and Python.",
    "description": [
      "Learn physics-based simulations using MuJoCo and Python",
      "Model robotic systems and environments",
      "Optimize simulation performance",
      "Bridge the gap between simulation and real-world robotics"
    ],
    "tags": ["MuJoCo", "Python", "Robotics", "Physics Simulation"]
  },
  {
    "id": 7,
    "title": "DevOps Engineer",
    "shortDescription": "Manage CI/CD pipelines and automate deployment processes.",
    "description": [
      "Set up and manage CI/CD pipelines",
      "Learn best practices in software testing",
      "Automate deployment processes",
      "Monitor and optimize system performance"
    ],
    "tags": ["CI/CD", "Software Testing", "Automation", "DevOps"]
  },
  {
    "id": 8,
    "title": "3D Model Artist",
    "shortDescription": "Create 3D assets for virtual environments and web technologies.",
    "description": [
      "Develop skills in 3D modeling software",
      "Create assets for virtual environments",
      "Explore new 3D formats and standards",
      "Learn how 3D models integrate with web technologies"
    ],
    "tags": ["3D Modeling", "Virtual Environments", "Web 3D", "Asset Creation"]
  },
  {
    "id": 9,
    "title": "Data Scientist",
    "shortDescription": "Analyze complex datasets and apply machine learning to improve system performance.",
    "description": [
      "Analyze complex datasets from user interactions and simulations",
      "Develop skills in data visualization and reporting",
      "Apply machine learning to improve system performance",
      "Collaborate across teams to drive data-informed decisions"
    ],
    "tags": ["Data Analysis", "Machine Learning", "Data Visualization", "Python"]
  },
  {
    "id": 10,
    "title": "Robotics AI/ML Specialist",
    "shortDescription": "Implement reinforcement learning algorithms for robot task learning using Hugging Face LeRobot.",
    "description": [
      "Collaborate with the simulation team to create realistic training environments",
      "Utilize the Hugging Face LeRobot library for training",
      "Implement reinforcement learning algorithms for robot task learning",
      "Analyze and interpret complex datasets from robotic simulations"
    ],
    "tags": ["Reinforcement Learning", "Hugging Face LeRobot", "MuJoCo", "Robotics", "AI/ML"]
  },
  {
    "id": 11,
    "title": "Marketing Specialist",
    "shortDescription": "Develop and implement marketing strategies for our robotics initiative.",
    "description": [
      "Develop and implement marketing strategies for our initiative",
      "Create engaging content for social media and other digital platforms",
      "Learn to use analytics tools to measure campaign effectiveness",
      "Gain experience in branding and visual communication"
    ],
    "tags": ["Digital Marketing", "Content Creation", "Analytics", "Branding"]
  },
  {
    "id": 12,
    "title": "Business Development Manager",
    "shortDescription": "Identify and manage partnerships in the robotics and tech industry.",
    "description": [
      "Identify and reach out to potential partners in the robotics and tech industry",
      "Negotiate and manage collaborative projects and sponsorships",
      "Develop pitching and presentation skills",
      "Learn about the robotics ecosystem and market trends"
    ],
    "tags": ["Partnership Management", "Robotics Industry", "Business Strategy", "Networking"]
  },
  {
    "id": 13,
    "title": "Finance Manager",
    "shortDescription": "Manage budget allocation and explore fundraising strategies for student projects.",
    "description": [
      "Manage budget allocation and track expenses for the initiative",
      "Learn basic accounting principles and financial reporting",
      "Explore fundraising strategies for student projects",
      "Gain experience in financial decision-making and resource allocation"
    ],
    "tags": ["Budgeting", "Financial Reporting", "Fundraising", "Resource Allocation"]
  },
  {
    "id": 14,
    "title": "Community Manager",
    "shortDescription": "Build and nurture our online and offline community of robotics enthusiasts.",
    "description": [
      "Build and nurture our online and offline community of robotics enthusiasts",
      "Moderate forums, social media groups, and other community platforms",
      "Organize online events like AMAs, webinars, or discussion panels",
      "Develop skills in community engagement and conflict resolution"
    ],
    "tags": ["Community Engagement", "Social Media Management", "Event Organization", "Conflict Resolution"]
  },
  {
    "id": 15,
    "title": "Event Coordinator",
    "shortDescription": "Plan and execute virtual and in-person events for the robotics community.",
    "description": [
      "Plan and execute both virtual and in-person events",
      "Coordinate hackathons, workshops, and tech talks",
      "Manage logistics, including venue selection, scheduling, and budgeting",
      "Develop project management and team coordination skills"
    ],
    "tags": ["Event Planning", "Project Management", "Logistics", "Hackathons"]
  },
  {
    "id": 16,
    "title": "Graphic Designer",
    "shortDescription": "Create visual assets and develop a consistent visual identity for the initiative.",
    "description": [
      "Create visual assets for marketing materials, website, and social media",
      "Develop a consistent visual identity for the initiative",
      "Learn industry-standard design tools and principles",
      "Collaborate with various teams to meet diverse design needs"
    ],
    "tags": ["Graphic Design", "Visual Identity", "Adobe Creative Suite", "Brand Consistency"]
  },
  // Add more positions as needed
]);

const position = computed(() => positions.value.find(p => p.id === positionId));
</script>


<style scoped>
.gradient-text {
  background: linear-gradient(45deg, #4fd1c5, #38b2ac);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.grid-overlay {
  background-image:
    linear-gradient(to right, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  opacity: 0.3;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.bg-gray-800:hover .grid-overlay {
  opacity: 0.4;
  transform: scale(1.05);
}
</style>