<template>
    <div @click="category(id)">
        <img :src="url+'/'+image" width=50 height=50 class='rounded h-10 m-auto' />
        <div class='text-center pt-1'>{{ name }}</div>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: Number
        },
        image: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            url: import.meta.env.VITE_API_URL
        }
    },
    methods: {
        category(id) {
            this.$router.push({
                name: 'category',
                query: {
                    id: this.$props.id
                }
            })
        }
    }
}
</script>