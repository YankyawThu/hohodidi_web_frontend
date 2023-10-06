<template>
    <Header name="Check Out">
    </Header>
    <div class="mt-16 mb-24 p-2">
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
                <div class="text-right">
                    {{ priceEachShop[index] }} Ks
                </div>
                <div>
                    Apply Point
                </div>
                <div class="mx-auto">
                    <input v-model="point[index]" type="number" min="0" onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))" class="px-1 rounded outline-none bg-[#fce2e1] w-24 text-black">
                </div>
                <div class="text-right">
                    {{ point[index] }} Ks
                </div>
                <div></div>
                <div class="text-center">
                    Total Amount
                </div>
                <div class="text-right border-t border-dashed border-white">
                    {{ totalEachShop[index] }} Ks
                </div>
            </div>
        </div>
    </div>
    <div class='footer fixed sm:w-96 w-full text-center bottom-0 bg-white z-10 px-5 py-2'>
        <div class="flex justify-between py-2 mb-2">
            <div>
                <span class="text-gray-400">Net Amount</span>
                <span class="text-[#ff6e66] ml-2">{{ netAmount }} Ks</span>
            </div>
            <div class="flex-inline">
                <span class="text-black">{{ user.point }}</span>
                <font-awesome-icon icon="fa-solid fa-coins" class="text-yellow-500 ml-3" size="lg" />
            </div>
        </div>
        <div class="text-center bg-[#ff6e66] p-2 text-white rounded" @click="checkOut()">
            Check Out
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
            point: [],
            priceEachShop: [],
            totalEachShop: [],
            netAmount: 0
        }
    },
    watch: {
        point: {
            handler(value) {
                let amount = 0
                value.forEach((val, index) => {
                    this.totalEachShop[index] = this.priceEachShop[index] - val
                    amount += this.totalEachShop[index]
                    this.netAmount = amount
                })
            },
            deep: true
        }
    },
    computed: {
        user() {
            return this.$store.getters['user/getUser']
        }
    },
    methods: {
        fetchCartList() {
            this.$store.dispatch('user/fetchCartList')
            .then(response => {
                this.data = response
                let amount = 0
                this.data.forEach((shop, index) => {
                    this.priceEachShop[index] = shop.addToCartList.reduce((price,item) => {
                        this.point[index] = 0
                        return price + item.totalPrice
                    }, 0)
                    this.totalEachShop[index] = this.priceEachShop[index]
                    amount += this.totalEachShop[index]
                    this.netAmount = amount
                })
            })
        },
        addToCart(type, item) {
            if(type == 'reduce' && item.quantity <= 1) {
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
        },
        checkOut() {
            let checkOutInfo = {shops: [], products: []}
            checkOutInfo.name = this.user.name
            checkOutInfo.phone = this.user.phone
            checkOutInfo.address = this.user.address
            checkOutInfo.type = 'transfer'
            this.data.forEach((shop, index) => {
                let cartItem = {}
                checkOutInfo.shops[index] = {
                    shopId: shop.id,
                    usedPoint: this.point[index]
                }
                shop.addToCartList.map(item => {
                    cartItem.addToCartId = item.id
                    checkOutInfo.products[index] = cartItem
                })
            })
            console.log(checkOutInfo)
            this.$store.dispatch('user/checkout', checkOutInfo)
            .then(response => {
                console.log(response)
            })
        }
    },
    mounted() {
        this.fetchCartList()
    }
}
</script>