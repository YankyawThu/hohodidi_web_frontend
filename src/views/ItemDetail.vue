<template>
    <div class='nav fixed sm:w-96 w-full flex justify-between p-3 z-10'>
        <Header name="Item Detail" />
        <div class=''>
            <div>
                <font-awesome-icon icon="fa-solid fa-cart-shopping" size="xl" class='' />
            </div>
        </div>
    </div>
</template>

<script>

import Header from '../components/Header.vue'

export default {
    components: {
        Header
    }
}
</script>