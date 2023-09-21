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
  }
}
</script>

