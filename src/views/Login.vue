<template #content>
    <section>
       <div class="bg-gradient-to-b from-[#ff6e66] to-[#FFA07A] grid grid-cols-1 content-center min-h-screen">
            <div class="flex flex-col items-center -mt-28">
                <img src='../assets/images/hohodidi.png' width='150' height='30' alt="" class="m-auto mb-5" />
                <div class="text-center text-xl font-bold text-white my-3">Login</div>
                <div class="flex flex-col">
                    <input v-model="login.phone" type="text" placeholder="Enter your phone number" class="my-1 rounded-lg p-3 bg-[#fdeeee] border-2 border-[#f7c9c7] outline-none w-72">
                    <input v-model="login.password" type="password" placeholder="Enter your password" class="my-1 rounded-lg p-3 bg-[#fdeeee] border-2 border-[#f7c9c7] outline-none w-72">
                    <div class="flex flex-inline my-5 w-72">
                        <input type="button" value="Submit" @click="handleLogin()" class="font-semibold rounded-lg p-3 bg-[#ffff] text-[#ff6e66] grow">
                        <router-link to="/" class="flex-none font-semibold rounded-lg p-3 bg-[#ffff] text-[#ff6e66] w-12 ml-2">
                            <font-awesome-icon icon="fa-solid fa-house" class='block m-auto' size="xl" />
                        </router-link>
                    </div>
                </div>
            </div>
       </div>
    </section>
</template>

<script>

export default {
    data() {
        return {
            login: {
                phone: '09780393069',
                password: '123456'
            },
        }
    },
    methods: {
        handleLogin() {
            this.$store.dispatch("auth/login", this.login)
            .then(response => {
                console.log(response)
                this.$store.commit('user/setUser', response)
                window.location.href = "http://localhost:5173/"
            })
        }
    }
}
</script>