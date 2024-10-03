<template>
  <div class="project-details">
    <div v-if="project.idea" class="project-section">
      <h2 class="section-title">Project Idea</h2>
      <div v-for="(point, index) in project.idea" :key="index" class="mb-4">
        <p>{{ point }}</p>
      </div>
    </div>

    <div v-if="project.milestones && project.milestones.length > 0" class="project-section">
      <h2 class="section-title">Milestones</h2>
      <ul class="list-none">
        <li v-for="(milestone, index) in project.milestones" :key="index" class="mb-3 flex items-start">
          <span class="text-teal-300 mr-2">•</span>
          {{ milestone }}
        </li>
      </ul>
    </div>

    <div v-if="project.algorithms && project.algorithms.length > 0" class="project-section">
      <h2 class="section-title">Algorithms</h2>
      <ul class="list-none">
        <li v-for="(algorithm, index) in project.algorithms" :key="index" class="mb-3 flex items-start">
          <span class="text-teal-300 mr-2">•</span>
          {{ algorithm }}
        </li>
      </ul>
    </div>

    <div v-if="project.challenges && project.challenges.length > 0" class="project-section">
      <h2 class="section-title">Challenges</h2>
      <ul class="list-none">
        <li v-for="(challenge, index) in project.challenges" :key="index" class="mb-3 flex items-start">
          <span class="text-teal-300 mr-2">•</span>
          {{ challenge }}
        </li>
      </ul>
    </div>

    <div v-if="project.materials" class="project-section">
      <h2 class="section-title">Materials</h2>
      <div v-if="project.materials.datasets" class="subsection">
        <h3 class="subsection-title">Datasets</h3>
        <ul class="list-none">
          <li v-for="(dataset, key) in project.materials.datasets" :key="key" class="mb-3 flex items-start">
            <span class="text-teal-300 mr-2">•</span>
            <a :href="dataset.url" target="_blank" rel="noopener noreferrer" class="link">{{ dataset.title }}</a>
          </li>
        </ul>
      </div>
      <div v-if="project.materials.sources" class="subsection">
        <h3 class="subsection-title">Sources</h3>
        <ul class="list-none">
          <li v-for="(source, key) in project.materials.sources" :key="key" class="mb-3 flex items-start">
            <span class="text-teal-300 mr-2">•</span>
            <a :href="source.url" target="_blank" rel="noopener noreferrer" class="link">{{ source.title }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.project-section {
  @apply mb-8;
}

.section-title {
  @apply text-2xl font-bold mb-4 text-white;
  background: linear-gradient(to right, #4fd1c5, #63b3ed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subsection-title {
  @apply text-xl font-semibold mb-3 text-teal-300;
}

.link {
  @apply text-blue-400 hover:text-blue-300 transition duration-300;
}

p, li {
  @apply text-base text-gray-300 leading-relaxed;
}
</style>
