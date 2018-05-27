<template>
  <div class="">
    <div class="nav">
      <h5 class="nav-logo" @click="navToHome">WXMP.io</h5>
      <div class="nav--links">
        <nuxt-link class="nav-item" to="/blog">blog</nuxt-link>
        <nuxt-link class="nav-item" to="/mini-program-intro">What is a Mini Program?</nuxt-link>
        <nuxt-link class="nav-item" to="/frequently-asked-questions">FAQ</nuxt-link>
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
