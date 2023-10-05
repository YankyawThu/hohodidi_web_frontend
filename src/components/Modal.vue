<template>
    <transition name="modal">
        <div class="modal-mask h-screen">
            <div class="modal-wrapper">
                <div class="modal-container relative mx-auto -mt-20">
                    <div class="absolute top-[-8px] right-[-8px] cursor-pointer" @click="$emit('close')"><font-awesome-icon icon="fa-solid fa-circle-xmark" size="xl" class="text-[#ff6e66]" /></div>
                    <div class="modal-header flex justify-between">
                        <span>{{ data?.name }}</span>
                        <span>{{ data && data.price - data.discount_price }} Ks</span>
                    </div>
                    <div class="modal-body text-center my-5">
                        <span class="border-[1px] border-[#ff6e66] rounded p-1" @click="q > 1 ? q-=1 : q"><font-awesome-icon icon="fa-solid fa-minus" /></span>
                        <span class="px-3">{{ q }}</span>
                        <span class="border-[1px] border-[#ff6e66] rounded p-1" @click="q+=1"><font-awesome-icon icon="fa-solid fa-plus" /></span>
                    </div>
                    <div class="modal-footer">
                        <button class="bg-[#ff6e66] w-full py-1 rounded text-white" @click="addToCart()">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        data: {
            type: Object
        }
    },
    data() {
        return {
            q: 1
        }
    },
    methods: {
        addToCart() {
            this.$store.dispatch('user/addToCart', {
                type: 'add',
                productId: this.$props.data.id,
                quantity: this.q
            })
            .then(() => {
                this.$store.dispatch('user/fetchCartList')
                this.$emit('close')
            })
        }
    }
}
</script>