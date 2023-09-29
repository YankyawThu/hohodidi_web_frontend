<template>
    <section>
        <div class='nav fixed sm:w-96 w-full flex justify-between p-4 z-10 top-0'>
            <div class="flex flex-row">
                <div class="">
                    <img :src="url+user.image" alt="" class="w-16 h-16 rounded-full object-cover border-2 border-gray-100/[0.3]">
                </div>
                <div class="flex flex-col self-center ml-3">
                    <span class="font-semibold text-lg">{{ user.name }}</span>
                    <div class="flex-inline py-1">
                        <font-awesome-icon icon="fa-solid fa-coins" class="text-yellow-200" size="lg" />
                        <span class="ml-2">{{ user.point }}</span>
                    </div>
                </div>
            </div>
            <div class='self-center'>
                <div @click="logout()">
                    <font-awesome-icon icon="fa-solid fa-right-from-bracket" class="rounded-full bg-[#f7c9c7]/[0.5] w-8 h-5 px-1.5 py-3" />
                </div>
            </div>
        </div>
        <div class="mt-28 px-3">
            <div class="flex flex-col">
                <router-link to="/" class="flex justify-between bg-[#fdeeee] border-2 border-[#f7c9c7] p-3 my-1 rounded-lg"><span>Order History</span> <font-awesome-icon icon="fa-solid fa-angle-right" class="self-center text-[#ff6e66]" /></router-link>
                <router-link to="/" class="flex justify-between bg-[#fdeeee] border-2 border-[#f7c9c7] p-3 my-1 rounded-lg"><span>Point History</span> <font-awesome-icon icon="fa-solid fa-angle-right" class="self-center text-[#ff6e66]" /></router-link>
            </div>
            <div class="my-5">
                <div class="text-[#ff6e66] font-bold">PROFILE INFORMATION</div>
                <div class="grid grid-cols-3 bg-[#fdeeee] border-2 border-[#f7c9c7] p-3 my-1 rounded-lg">
                    <div class="flex flex-col">
                        <span class="py-1 text-gray-500">
                            Phone
                        </span>
                        <span class="py-1 text-gray-500">
                            Address
                        </span>
                        <span class="py-1 text-gray-500">
                            Date of Birth
                        </span>
                        <span class="py-1 text-gray-500">
                            Gender
                        </span>
                    </div>
                    <div class="flex flex-col">
                        <span class="py-1 font-semibold">
                            {{ user.phone ?? 'N/A' }}
                        </span>
                        <span class="py-1 font-semibold">
                            {{ user.address ?? 'N/A' }}
                        </span>
                        <span class="py-1 font-semibold">
                            {{ user.dob ?? 'N/A' }}
                        </span>
                        <span class="py-1 font-semibold">
                            {{ user.gender ?? 'N/A' }}
                        </span>
                    </div>
                    <div></div>
                </div>
            </div>
            <div class="my-5">
                <div class="text-[#ff6e66] font-bold">SETTING</div>
                <div class="flex flex-col bg-[#fdeeee] border-2 border-[#f7c9c7] p-3 my-1 rounded-lg">
                    <router-link to='/' class="py-2 font-semibold">
                        Edit Profile
                    </router-link>
                    <router-link to='/' class="py-2 font-semibold">
                        Change Password
                    </router-link>
                    <!-- <router-link to='/' class="py-2 font-semibold">
                        Change Language
                    </router-link> -->
                    <!-- <router-link to='/' class="py-2 font-semibold">
                        Delete Account ?
                    </router-link> -->
                    <router-link to='/' class="py-2 font-semibold">
                        Terms & Conditions
                    </router-link>
                    <router-link to='/' class="py-2 font-semibold">
                        About Us
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    data() {
        return {
            url: import.meta.env.VITE_API_URL
        }
    },
    computed: {
        user() {
            return this.$store.getters['user/getUser']
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('auth/logout').then(() => {
                    this.$router.push({
                        name: 'home'
                    })
                },
                error => {
                    console.log(error)
                }
            )
        }
    },
    mounted() {
    }
}
</script>