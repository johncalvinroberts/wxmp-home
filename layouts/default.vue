<template>
  <div class="">
    <div class="nav">
      <h5 class="nav-logo" @click="navToHome">WXMP.io</h5>
      <div class="nav--links">
        <nuxt-link class="nav-item" to="/blog">blog</nuxt-link>
        <a class="nav-item" href="#">What is a Mini Program?</a>
        <a class="nav-item" href="#">FAQ</a>
      </div>
    </div>    
    <nuxt/>
  </div>
</template>

<script>
export default {
  methods: {
    navToHome () {
      this.$router.push({path: '/'})
    }
  }
}
</script>


<style lang="scss" src="../assets/styles/app.scss">
</style>
