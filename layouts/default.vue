<template>  
<div class="w1">
<my-navbar/>
<nuxt/>
<my-footer/>
</div>
</template>

<script>
import MyNavbar from '~/components/Navbar.vue'
import MyFooter from '~/components/Footer.vue'

export default {
  components: {
    MyNavbar,
    MyFooter
  }
}
</script>