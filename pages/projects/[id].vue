<template>
    <div>
        <CommonProjectDetails :project="project"></CommonProjectDetails>
    </div>
</template>
  
<script setup>

const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id

//  fetch the products
const { data: project } = await useFetch(uri, { key: id })

if (!project.value) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found' })
}

</script>