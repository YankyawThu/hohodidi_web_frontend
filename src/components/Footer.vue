<template>
    <div class='footer fixed sm:w-96 grid grid-cols-5 w-full text-center bottom-0 bg-white z-10'>
        <div class='pt-3 pb-10'><router-link to='/'><font-awesome-icon icon="fa-solid fa-house" class='footer-icon block m-auto' size="xl" />Home</router-link></div>
        <div class='pt-3 pb-10'><router-link to='/category'><font-awesome-icon icon="fa-solid fa-shapes" class='footer-icon block m-auto' size="xl" />Category</router-link></div>
        <div class='pt-3 pb-10'><router-link to='/voucher'><font-awesome-icon icon="fa-solid fa-qrcode" class='footer-icon block m-auto' size="xl" />Voucher</router-link></div>
        <div class='pt-3 pb-10'><router-link to='/near-by'><font-awesome-icon icon="fa-solid fa-location-arrow" class='footer-icon block m-auto' size="xl" />Near By</router-link></div>
        <div class='pt-3 pb-10'><router-link to='/profile'><font-awesome-icon icon="fa-solid fa-user" class='footer-icon block m-auto' size="xl" />Profile</router-link></div>
    </div>
</template>

<script>
export default {
}
</script>