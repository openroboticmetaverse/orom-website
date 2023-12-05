<template>
    <div class=" bg-gray-900 bg-opacity-75 right-0 hover:bg-gray-800 border border-gray-500 hover:border-transparent duration-300  rounded-lg p-8 md:p-12">

        <h2 class="gradient-text-left text-center dark:text-white text-5xl font-extrabold mb-2">
            <slot name="title"></slot>
        </h2>
        <p class="text-2xl font-normal text-gray-300 dark:text-gray-400 mb-4">
            <slot name="text"></slot>
        </p>

    </div>
</template>