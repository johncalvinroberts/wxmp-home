<template>
  <article class="container">
    <h1 class="title">{{ title }}</h1>
    <div class="markdown-body">
      <div v-if="body" v-html="$marked(body)" class="body-1" />
    </div>
  </article>
</template>

<script>
export default {
  async asyncData({ params }) {
    let post = await import('~/content/blog/posts/' + params.slug + '.json')
    return post
  }
}
</script>
<style lang="scss">
article {
  width: 100%!important;
}
.title {
  padding: 2rem;
  text-align: center;
  font-size: 6rem;
}
.markdown-body {
  padding: 1rem 0 5rem;
  word-wrap: break-word;
  margin: 0 auto;
  max-width: 740px;
  padding-left: 20px;
  padding-right: 20px;
}
.markdown-body blockquote {
  margin: 0;
}  
.markdown-body ol ol,
.markdown-body ul ol {
  list-style-type: lower-roman;
}

.markdown-body ul ul ol,
.markdown-body ul ol ol,
.markdown-body ol ul ol,
.markdown-body ol ol ol {
  list-style-type: lower-alpha;
}  
.markdown-body p,
.markdown-body blockquote,
.markdown-body ul,
.markdown-body ol,
.markdown-body dl,
.markdown-body table,
.markdown-body pre {
  margin-top: 0;
  margin-bottom: 16px;
}
.markdown-body hr {
  height: 0.25em;
  padding: 0;
  margin: 24px 0;
  background-color: #e1e4e8;
  border: 0;
}

.markdown-body blockquote {
  padding: 0 1em;
  color: #6a737d;
  border-left: 0.25em solid #dfe2e5;
}

.markdown-body blockquote>:first-child {
  margin-top: 0;
}

.markdown-body blockquote>:last-child {
  margin-bottom: 0;
}
.markdown-body h1,
.markdown-body h2,
.markdown-body h3,
.markdown-body h4,
.markdown-body h5,
.markdown-body h6 {
  margin-top: 24px;
  margin-bottom: 16px;
  font-weight: 600;
  line-height: 1.25;
}  
.markdown-body img {
  max-width: 100%;
  box-sizing: content-box;
  background-color: #fff;
}

.markdown-body img[align=right] {
  padding-left: 20px;
}

.markdown-body img[align=left] {
  padding-right: 20px;
}
</style>

