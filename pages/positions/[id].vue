<template>
  <div class="container mx-auto px-4 py-8">
    <NuxtLink to="/open-positions" class="text-teal-300 hover:text-teal-200 mb-4 inline-block">
      &larr; Back to Open Positions
    </NuxtLink>
    <div v-if="position" class="bg-gray-800 rounded-lg shadow-md p-8">
      <h1 class="text-3xl font-semibold mb-4">{{ position.title }}</h1>
      <ul class="text-gray-300 mb-6 list-disc pl-5">
        <li v-for="(item, index) in position.description" :key="index">
          {{ item }}
        </li>
      </ul>
      <div class="flex flex-wrap gap-2 mb-6">
        <span v-for="tag in position.tags" :key="tag" class="bg-teal-600 text-white px-2 py-1 rounded-full text-sm">
          {{ tag }}
        </span>
      </div>
      <!-- Add more detailed information about the position here -->
    </div>
    <div v-else>
      <p>Position not found.</p>
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
