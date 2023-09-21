<template>
    <div class='nav fixed sm:w-96 w-full flex justify-between py-2 z-10 top-0'>
        <div class="flex flex-row">
            <div class="self-center">
                <router-link to="/" class="p-4 pr-5">
                    <font-awesome-icon icon="fa-solid fa-caret-left" size="xl" />
                </router-link>
            </div>
            <div class="label self-center">
                {{ name }}
            </div>
        </div>
        <div class=''>
            <div class="p-3">
                <font-awesome-icon icon="fa-solid fa-cart-shopping" size="xl" class='' />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        }
    }
}
</script>

