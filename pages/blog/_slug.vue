<template>
  <div class="markdown-body">
    <h1>{{ title }}</h1>
    <img v-if="thumbnail" :src="thumbnail" :alt="title">
    <div v-if="body" v-html="$marked(body)" class="body-1" />
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    let post = await import('~/content/blog/posts/' + params.slug + '.json')
    return post
  }
}
</script>
