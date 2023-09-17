<template>
    <div>
        <p>Member details for {{ id }}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit totam quo, reprehenderit omnis aliquid odit at
            voluptatum! Distinctio, architecto eum!</p>
    </div>
</template>

<script setup>
const { id } = useRoute().params

</script>

<style scoped></style>