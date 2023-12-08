<template>
    <div class="simple-card">

        <h2 class="small-title">
            <slot name="title"></slot>
        </h2>
        <p class="text-xl sm:text-xl lg:text-2xl font-normal text-gray-300 dark:text-gray-400 mb-4">
            <slot name="text"></slot>
        </p>

    </div>
</template>