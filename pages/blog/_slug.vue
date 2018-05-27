<template>
  <article class="container">
    <markdown-body>
      <h1>{{post.title}}</h1>
      <div class="article-info--outer">
        <div class="article--author-avatar" 
            :style="{ 'background-image': 'url(' + author.avatar + ')' }"
            v-if="post.author"></div>
        <div>
          <div class="article--author" v-if="post.author">{{author.title}}</div>
          <div class="article--postdate">{{postDate}}</div>
          <a class="article--original" 
            target="_blank" 
            v-if="post.originalPostLink"
            :href="post.originalPostLink">Original article</a>
        </div>
      </div>
      <hr/>
      <div v-if="post.body" v-html="$marked(post.body)"/>
    </markdown-body>
  </article>
</template>

<script>
import MarkdownBody from '~/components/MarkdownBody'
export default {
  components: {
    MarkdownBody
  },
  async asyncData({ params }) {
    const post = await import(`~/content/blog/posts/${params.slug}.json`)
    const authorSlug = post.author ? post.author.toLowerCase().split(' ').join('-') : null
    const author = authorSlug ? await import(`~/content/authors/author-${authorSlug}.json`) : ''
    const postDate = new Date(post.date).toDateString()
    return {post, author, postDate}
  }
}
</script>
<style lang="scss">
@import '../../assets/styles/variables.scss';
.article-info--outer {
  display: flex;
  justify-content: flex-start;
  .article--author{
    opacity: 0.5;
  }
  .article--author-avatar {
    border-radius: 50%;
    width: 6rem;
    height: 6rem;    
    background-color: $smoke;
    background-size: cover; 
    margin-right: 2rem;   
  }
  .article--postdate{
    opacity: 0.5;    
  }
  .article--original {
    opacity: 0.8;
  }
}
.title {
  padding: 2rem;
  text-align: center;
  font-size: 6rem;
}
</style>

