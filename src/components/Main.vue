<template>
    <div>
        <Nav />
            <div class="mt-16 mb-20">
                <slot />
            </div>
        <Footer />
    </div>
</template>

<script>

import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'

export default {
    components: {
        Nav,
        Footer
    }
}
</script>