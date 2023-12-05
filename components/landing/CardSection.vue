<template>
    <LandingPhotoSection>
        <template v-slot:content>
            <section class=" dark:bg-black">
                <div class="py-8  mx-auto px-4 max-w-screen-2xl lg:py-16">
                    <slot name="description"></slot>
                    <slot name="card-full"></slot>
                    <div class="grid md:grid-cols-3 gap-8">
                        <slot name="left"></slot>
                        <slot name="center"></slot>
                        <slot name="right"></slot>
                    </div>
                </div>
            </section>
        </template>

    </LandingPhotoSection>
</template>