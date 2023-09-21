<template>
    <router-link :to="'/item-detail/'+item.id">
        <div class='item w-44 h-56 pt-2 rounded mb-3'>
            <img :src="url+item.image" class='rounded px-2 product-img' />
            <div>
                <div class='p-2 pb-0 truncate'>
                    {{ item.name }}
                </div>
                <div class='text-gray-500 p-2 pt-0 truncate'>{{ item.shop.name }}</div>
                <div class='flex justify-between pt-2'>
                    <div class='pl-2 -mt-2'>
                        <div class='flex-inline'><span class="line-through text-gray-500">{{ item.price }} Ks</span><span class="rounded discount-percent ml-1">{{ item.percent }}</span></div>
                        <div class='special-price font-semibold'>{{ item.price - item.discount_price }} Ks</div>
                    </div>
                    <div class='icon self-end p-2'>
                        <font-awesome-icon icon="fa-solid fa-cart-plus" size="xl" class='' />
                    </div>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        },
    },
    data() {
        return {
            url: import.meta.env.VITE_API_URL
        }
    }
}
</script>