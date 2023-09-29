<template>
    <section>
        <Header name="Product Detail" />
        <div class="product-detail mt-20 mb-10">
            <div class="product-card p-2 m-2 rounded-lg shadow">
                <div class="p-2 pt-1 font-semibold text-gray-500">
                    {{ data.name }}
                </div>
                <div class="flex flex-row">
                    <div>
                        <img v-show="data.image" :src="url+'/'+data.image" alt="" class="w-32 h-32 object-cover rounded">
                    </div>
                    <div class="flex flex-col ml-3 self-center">
                        <div class="flex-inline">
                            <span class="line-through text-gray-500">{{ data.price }} Ks</span>
                            <span class="special-price text-lg ml-3">{{ data.price - data.discount_price }} Ks</span>
                        </div>
                        <div>
                            <span class="rounded discount-percent">{{ data.percent }} Off</span>
                        </div>
                        <div class="flex-inline py-2">
                            <font-awesome-icon icon="fa-solid fa-coins" class="text-yellow-500" size="lg" />
                            <span class="ml-2">{{ data.point }}</span>
                        </div>
                        <div class="flex flex-inline">
                            <div class="flex flex-col">
                                <div class="text-green-500" style="font-size: 10px;">
                                    Available
                                </div>
                                <div>
                                    {{ data.available_item }}
                                </div>
                            </div>
                            <div class="bg-gray-500 h-3 self-center mx-4" style="width: 1px;"></div>
                            <div class="flex flex-col">
                                <div class="text-red-500" style="font-size: 10px;">
                                    Expired
                                </div>
                                <div>
                                    {{ data.expireDate }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tabs grid grid-cols-3 text-center border-b border-gray-100 sm:w-96 mt-10 w-full bg-white">
                <span class="tab relative px-5 py-3 cursor-pointer">
                    Description
                    <span class='active'></span>
                </span>
                <span class="tab relative px-5 py-3 cursor-pointer">
                    Shop
                    <span class=''></span>
                </span>
                <span class="tab relative px-5 py-3 cursor-pointer">
                    photos
                    <span class=''></span>
                </span>
            </div>
            <div class="tabsContainer">
                <div class="tabsContent sm:w-96 w-full">
                    <div class="tabContent">
                        <p class="p-3 leading-loose desc-bg">
                            {{ data.description }}
                        </p>
                    </div>
                    <div class="tabContent">
                        <div class="shop-bg p-3 mb-3 rounded">
                            <div class="flex flex-row mb-3">
                                <div>
                                    <img v-show="data?.shop?.image" :src="url+'/'+data?.shop?.image" alt="" class="w-10 h-10 rounded-full">
                                </div>
                                <div class="flex flex-col ml-3">
                                    <div class="font-semibold">{{ data?.shop?.name }}</div>
                                    <div class="text-gray-500">{{ data?.shop?.description }}</div>
                                </div>
                            </div>
                            <div class="flex flex-row">
                                <div>
                                    <div class="py-1">
                                        <font-awesome-icon icon="fa-solid fa-phone" class="text-gray-400" />
                                    </div>
                                    <div class="py-1">
                                        <font-awesome-icon icon="fa-solid fa-location-dot" class="text-gray-400" />
                                    </div>
                                </div>
                                <div class="ml-3">
                                    <div class="py-1">
                                        {{ data?.shop?.phone }}
                                    </div>
                                    <div class="py-1">
                                        {{ data?.shop?.address }}
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-row py-1">
                                <div>
                                    <font-awesome-icon icon="fa-solid fa-circle-info" class="text-gray-400" />
                                </div>
                                <div class="ml-3">
                                    {{ data?.shop?.remark }}
                                </div>
                            </div>
                        </div>
                        <div class="shop-bg p-3 mb-3 rounded">
                            <div>
                                <span style="font-size: 10px;">Opening hours:</span> {{ data?.shop?.open_hour }} - {{ data?.shop?.close_hour }}
                            </div>
                        </div>
                    </div>
                    <div class="tabContent">
                        <div class="flex flex-wrap">
                            <img v-show="image" :src="url+'/'+image" v-for="(image,index) in data?.gallery" :key="index" alt=""  class="w-32 h-32 object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import Header from '../components/Header.vue'

export default {
    props: {
        product: {
            type: String,
            required: true
        }
    },
    components: {
        Header
    },
    data() {
        return {
            data: JSON.parse(this.product),
            url: import.meta.env.VITE_API_URL
        }
    },
    methods: {
        tab() {
            const tabs = document.querySelectorAll(".tab")
            const tabsContent = document.querySelector(".tabsContent")
            let widthOfTabsContent = tabsContent.offsetWidth
            window.addEventListener("resize", () => {
                widthOfTabsContent = tabsContent.offsetWidth
            });
            tabs.forEach((tab, index) => {
                tab.addEventListener("click", () => {
                    tabs.forEach((tab) => {
                        const span = tab.querySelector('span')
                        span.classList.remove("active")
                    })
                    const span = tab.querySelector('span')
                    span.classList.add("active")
                    tabsContent.style.transform = `translateX(-${widthOfTabsContent * index}px)`
                })
            })
        },
        firstTabActive() {
            const tabs = document.querySelectorAll(".tab")
            tabs.forEach((tab) => {
                const span = tab.querySelector('span')
                span.classList.remove("active")
            })
            const span = tabs[0].querySelector('span')
            span.classList.add("active")
        }
    },
    mounted() {
        this.firstTabActive()
        this.tab()
    }
}
</script>