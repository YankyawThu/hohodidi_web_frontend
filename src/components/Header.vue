<template>
    <div class="flex flex-row">
        <div class="self-center">
            <font-awesome-icon icon="fa-solid fa-caret-left" size="xl" />
        </div>
        <div class="label ml-3 self-center">
            {{ name }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        }
    }
}
</script>

