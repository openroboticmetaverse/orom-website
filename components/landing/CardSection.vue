<template>


    <section class="bg-black dark:bg-black">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
            <slot name="card-full"></slot>
            <div class="grid md:grid-cols-2 gap-8">
                <slot name="left"></slot>
                <slot name="right"></slot>
            </div>
        </div>
    </section>
    
    </template>