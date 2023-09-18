<template>
    <div>

        <Head>
            <Title>Nuxt Dojo | {{ project.title }}</Title>
            <Meta name="description" :content="project.description" />
        </Head>

        <ProjectDetails :project="project" ></ProjectDetails>
    </div>
</template>
  
<script setup>
import ProjectDetails from '~/components/projects/ProjectDetails.vue';

const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id

//  fetch the products
const { data: project } = await useFetch(uri, { key: id })

if (!project.value) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found' })
}

</script>