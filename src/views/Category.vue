<template>
    <Main>
        <div class="fixed scroll shadow-sm sm:w-96 w-full px-5 py-3 bg-white">
            <span @click="fetchProduct(item.id)" class="relative px-5 py-3 cursor-pointer" v-for="(item, index) in categories" :key="index">
                {{ item.name }}
                <span v-show="item.id == cateId" :class="{active: item.id == cateId}"></span>
            </span>
        </div>
        <div class='p-2 mt-28'>
            <div class='flex flex-wrap justify-around pb-2'>
                <div v-for="(item, index) in products" :key="index">
                    <Product :item="item" />
                </div>
            </div>
        </div>
    </Main>
</template>

<script>

import Product from '../components/Product.vue'
import Main from '../components/Main.vue'

export default {
    components: {
        Product,
        Main
    },
    props: {
        id: ''
    },
    data() {
        return {
            products: {},
            cateId: ''
        }
    },
    computed: {
        categories() {
            return this.$store.getters['category/getCategories']
        }
    },
    methods: {
        fetchProduct(id) {
            this.cateId = id ?? this.$route.query.id
            this.$store.dispatch('product/fetchProduct', this.cateId)
            .then(response => {
                this.products = response
            })
        }
    },
    mounted() {
        this.fetchProduct()
    }
}
</script>