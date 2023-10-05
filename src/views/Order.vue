<template>
    <Header name="Check Out">
    </Header>
    <div class="mt-16 mb-10 p-2">
        <div v-for="(item,index) in data" :key="index" class="mb-2 rounded-lg border-[1px] border-[#ff6e66]">
            <div class="p-2 bg-[#f7c9c7] rounded-t-md">
                <div class="font-semibold">{{ item.name }}</div>
                <div class="text-[10px] text-gray-600">{{ item.address }}</div>
            </div>  
            <div v-for="(cartItem,index) in item.addToCartList" :key="index" class="shadow rounded-lg m-2 p-2">
                <div class="flex justify-between">
                    <div class="flex flex-row">
                        <img :src="url+'/'+cartItem.image" alt="" class="w-20 h-20 object-cover">
                        <div class="flex flex-col ml-3 self-center">
                            <div>
                                {{ cartItem.name }}
                            </div>
                            <div>
                                <span class="rounded discount-percent">{{ cartItem.percent }} Off</span>
                            </div>
                            <div class="flex-inline py-1">
                                <font-awesome-icon icon="fa-solid fa-coins" class="text-yellow-500" size="lg" />
                                <span class="ml-2">{{ cartItem.point }}</span>
                            </div>
                            <div class="flex flex-inline">
                                <div class="self-center text-green-500" style="font-size: 10px;">
                                    Available
                                </div>
                                <div class="ml-2">
                                    {{ cartItem.available_item }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <font-awesome-icon icon="fa-solid fa-trash" @click="rmItemFromCart(cartItem.id)" class="p-2 cursor-pointer text-gray-400" />
                    </div>
                </div>
                <div class="flex justify-between items-end pt-2">
                    <div class="text-gray-400">
                        Total
                        <span class="special-price text-[#ff6e66]">{{ cartItem.totalPrice }} Ks</span>
                    </div>
                    <div>
                        <span class="bg-[#ff6e66] text-white rounded-md px-2 py-1" @click="addToCart('reduce', cartItem)"><font-awesome-icon icon="fa-solid fa-minus" /></span>
                        <span class="px-3">{{ cartItem.quantity }}</span>
                        <span class="bg-[#ff6e66] text-white rounded-md px-2 py-1" @click="addToCart('add', cartItem)"><font-awesome-icon icon="fa-solid fa-plus" /></span>
                    </div>
                </div>
            </div>
            <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-2 p-2 bg-[#ff9794] rounded-b-md mt-6 text-white">
                <div class="col-span-2 text-left">
                    Sub Total
                </div>
                {{item[index]}}
                <div class="text-right">
                    <!-- {{ (item[index].cartItem.price - item[index].cartItem.discountPrice)*item[index].cartItem.quantity }} MMK -->
                </div>
                <div>
                    Apply Point
                </div>
                <div class="mx-auto">
                    <input v-model="point" type="number" class="px-1 rounded outline-none bg-[#fce2e1] w-24 text-black">
                </div>
                <div class="text-right">
                    {{ point }} MMK
                </div>
                <div></div>
                <div class="text-center">
                    Total Amount
                </div>
                <div class="text-right border-t border-dashed border-white">
                    <!-- {{ item[index].cartItem.price - item[index].cartItem.discountPrice - point }} MMK -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import Header from '../components/Header.vue'

export default {
    components: {
        Header
    },
    data() {
        return {
            data: [],
            url: import.meta.env.VITE_API_URL,
            point: 0
        }
    },
    methods: {
        fetchCartList() {
            this.$store.dispatch('user/fetchCartList')
            .then(response => {
                this.data = response
            })
        },
        addToCart(type, item) {
            if(type = 'reduce' && item.quantity <= 1) {
                this.rmItemFromCart(item.id)
            }
            this.$store.dispatch('user/addToCart', {
                type: type,
                productId: item.productId,
                quantity: 1
            })
            .then(() => {
                this.fetchCartList()
            })
        },
        rmItemFromCart(id) {
            this.$store.dispatch('user/rmItemFromCart', {id: id})
            .then(() => {
                this.fetchCartList()
            })
        }
    },
    mounted() {
        this.fetchCartList()
    }
}
</script>