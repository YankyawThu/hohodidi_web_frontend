<template>
  <html lang="en">
    <body>
      <main class="flex min-h-screen sm:justify-center bg-gray-100">
        <div class='relative sm:w-96 w-full bg-white'>
          <RouterView />
        </div>
      </main> 
    </body>
  </html>
</template>

<script>
import { RouterView } from 'vue-router'

export default {
  components: {
    RouterView
  },
  methods: {
    fetchCategory() {
        this.$store.dispatch('category/fetch')
    },
    fetchUserInfo() {
      const user = JSON.parse(localStorage.getItem('user'))
      if(user && user.token) {
        this.$store.dispatch('user/fetch')
        this.$store.dispatch('user/fetchCartList')
      }
    }
  },
  mounted() {
    this.fetchCategory()
    this.fetchUserInfo()
  }
}
</script>

