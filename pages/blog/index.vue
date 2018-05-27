<template>
  <section class="main">
    <div class="container container--center bg-grey">
      <div class="blog-top">
        <h1>WXMP.io Blog</h1>
        <p>Tutorials, Guides, useful tidbits, general opinions, etc.</p>

      </div>
      <div class="blog-list">
        <transition-group name="slide-up">
          <article-list-item v-for="post in posts" :key="post.date" :post="post"/>
        </transition-group>
      </div>
    </div>
  </section>
</template>

<script>
import ArticleListItem from '~/components/ArticleListItem'
export default {
  components: {
    ArticleListItem
  },
  data() {
    // Using webpacks context to gather all files from a folder
    const context = require.context('~/content/blog/posts/', false, /\.json$/)

    const posts = context.keys().map(key => ({
      ...context(key),
      _path: `/blog/${key.replace('.json', '').replace('./', '')}`
    }))

    return { posts }
  }
}
</script>

<style lang="scss">
.blog-top {
  flex: 0 0 100%;
  text-align: center;
}
.blog-list {
  flex: 0 0 70%;
}
</style>
