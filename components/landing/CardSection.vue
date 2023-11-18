<template>
    <LandingPhotoSection>
        <template v-slot:content>
            <section class=" dark:bg-black">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
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