<template>
    <Main>
        <div class='p-1'>
            <img src='../assets/images/sc.jpeg' width=300 height=100 class='rounded m-auto' />
        </div>
        <div class='grid grid-cols-4 py-3 w-full'>
            <div v-for="(item, index) in categories" :key="index" class="bg-gray-100 h-24 p-1 m-auto rounded category-box">
                <Category :id="item.id" :image="item.image" :name="item.name" />
            </div>
        </div>
        <div class='p-2 text-lg font-semibold'>
            Hot Deals 
        </div>
        <div class='p-2'>
            <div class='flex flex-wrap justify-around pb-2'>
                <div v-for="(item, index) in hotDeals" :key="index">
                    <Product :item="item" />
                </div>
            </div>
        </div>
        <Modal v-show="showModal" @close="showModal=false" />
    </Main>
</template>

<script>
import Category from '../components/Category.vue'
import Product from '../components/Product.vue'
import Main from '../components/Main.vue'
import Modal from '../components/Modal.vue'

export default {
    components: {
        Category,
        Product,
        Main,
        Modal
    },
    data() {
        return {
            hotDeals: [],
            showModal: false
        }
    },
    computed: {
        categories() {
            return this.$store.getters['category/getCategories']
        }
    },
    methods: {
        fetchHotDeals() {
            this.$store.dispatch('product/fetchHotDeals')
            .then(response => {
                this.hotDeals = response
            })
        }
    },
    mounted() {
        this.fetchHotDeals()
    }
}
</script>