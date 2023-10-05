<template>
    <div class='nav fixed sm:w-96 w-full flex justify-between p-3 z-10 top-0'>
        <div>
            <img src='../assets/images/hohodidi.png' width='70' height='30' alt="" />
        </div>
        <div class='flex flex-row gap-1 self-center'>
            <router-link to='order' class="relative p-2">
                <font-awesome-icon icon="fa-solid fa-cart-shopping" size="xl" class='' />
                <div v-show="cartCount > 0" class="absolute rounded-full bg-red-500 text-white w-5 h-5 right-0 -top-1 text-center">{{ cartCount }}</div>
            </router-link>
            <div class="p-2">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" size="xl" class='' />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        cartCount() {
            return this.$store.getters['user/getCartCount']
        }
    }
}
</script>