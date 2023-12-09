<template>
  <div class="card">
    <span
      class="inline-flex pt-12 sm:pt-2 md:pt-2 lg:pt-2 items-center mt-3 min-h-12xl hover:text-teal-300 duration-200"
    >
      <svg
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        class="w-4 h-4 mr-2 transform rotate-180"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
      <NuxtLink
        to="/projects"
        class="transition-colors duration-200 ease-in-out"
      >
        Back
      </NuxtLink>
    </span>

    <div class="grid md:grid-cols-2 grid-cols-1 gap-10">
      <div class="p-7">
        <img :src="project.image" class="mx-auto my-7 w-full md:max-w-md" />
      </div>
      <div class="p-7">
        <h2 class="text-4xl my-0 sm:my-7">{{ project.title }}</h2>
        <h3 class="font-bold gradient-text-left border-b-2 py-2 mb-4 pb-2">
          Project Description:
        </h3>
        <div v-for="(idea, index) in project.idea" :key="'idea-' + index">
          <p class="mb-7">{{ idea }}</p>
        </div>
        <h3 class="font-bold gradient-text-left border-b-2 py-4 mb-4 pb-2">
          Algorithms:
        </h3>
        <ul>
          <li
            v-for="(algorithm, index) in project.algorithms"
            :key="'algorithm-' + index"
          >
            {{ algorithm }}
          </li>
        </ul>
        <h3 class="font-bold gradient-text-left border-b-2 py-4 mb-4 pb-2">
          Milestones:
        </h3>
        <ul>
          <li
            v-for="(milestone, index) in project.milestones"
            :key="'milestone-' + index"
          >
            {{ milestone }}
          </li>
        </ul>
        <h3 class="font-bold gradient-text-left border-b-2 py-4 mb-4 pb-2">
          Challenges:
        </h3>
        <ul>
          <li
            v-for="(challenge, index) in project.challenges"
            :key="'challenge-' + index"
          >
            {{ challenge }}
          </li>
        </ul>
        <h3 class="font-bold gradient-text-left border-b-2 py-4 mb-4 pb-2">
          Materials:
        </h3>
        <div class="pt-6" v-if="Object.keys(project.materials.datasets).length">
          <h4 class="font-bold pb-3">Datasets:</h4>
          <ol>
            <li
              v-for="(dataset, index) in project.materials.datasets"
              :key="'dataset-' + index"
            >
              <a
                :href="dataset.url"
                class="px-6 hover:text-teal-200 duration-500 ease-in-out"
                target="_blank"
                >{{ dataset.title }}</a
              >
            </li>
          </ol>
        </div>
        <div class="pt-6" v-if="Object.keys(project.materials.sources).length">
          <h4 class="font-bold pb-3">Sources:</h4>
          <ol>
            <li
              v-for="(source, index) in project.materials.sources"
              :key="'source-' + index"
            >
              <a
                :href="source.url"
                class="px-6 underline hover:text-teal-200 duration-500 ease-in-out"
                target="_blank"
                >[{{ index }}] {{ source.title }}</a
              >
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { project } = defineProps(["project"]);
</script>

<style scoped>
@media (max-width: 768px) {
  img {
    max-width: 100%;
  }
}
</style>
