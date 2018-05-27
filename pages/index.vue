<template>
  <section class="main">
    <div class="container--center container bg-grey">
      <app-logo/>
      <div class="home--intro">
        <h3>English language resources for building wechat mini programs</h3>
      </div>
      <div class="cards">
        <card :link="'https://docs.wxmp.io'" :title="'Vanilla'" :linkTitle="'View docs'" :disabled="true">
          The official documentation from Tencent. Basics, details, everything.
        </card>
        <card :link="'https://wepy.wxmp.io'" :title="'WePY'" :linkTitle="'View docs'" :disabled="true">
          A robust component-based framework for building mini programs.
        </card>
        <card :link="'https://mpvue.wxmp.io'" :title="'mpVue'" :linkTitle="'View docs'" :disabled="true">
          Build mini programs with Vue components. Use Vuex and all your favorite Vue tools.
        </card>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue';
import Card from '~/components/Card.vue';

export default {
  components: {
    AppLogo,
    Card
  },
  data() {
    // Using webpacks context to gather all files from a folder
    const context = require.context('~/content/blog/posts/', false, /\.json$/);

    const posts = context.keys().map(key => ({
      ...context(key),
      _path: `/blog/${key.replace('.json', '').replace('./', '')}`
    }))

    return { 
      posts
    }
  }
}
</script>

<style lang="scss">
  .home--intro {
    flex: 1;
    min-width: 300px;
    padding: 2em 3em;
    h3 {
      max-width: 500px;
    }
    @media screen and (max-width: 800px) {  
      width: 100%;
      text-align: center;
      font-size: 0.5rem;
    }      
  }
</style>
