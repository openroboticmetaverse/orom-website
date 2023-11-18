<template>


        <div class=" bg-gray-900 bg-opacity-75 right-0 hover:bg-gray-800 border border-gray-500 hover:border-transparent duration-300 rounded-lg p-8 md:p-12 mb-8">

            <h1 class="gradient-text-left text-center dark:text-white text-8xl md:text-6xl font-extrabold mb-2">
                <slot name="title"></slot>
            </h1>
            <p class="text-lg font-normal text-gray-300 dark:text-gray-400 mb-6">
                <slot name="text"></slot>
            </p>

        </div>


</template>