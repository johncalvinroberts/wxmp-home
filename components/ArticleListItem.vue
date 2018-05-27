<style lang="scss">
  .article-list-item {
    background-color: #ffffff;
    min-width: 200px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
    transition: all 0.2s ease-in-out;
    position: relative;
    padding: 0.5rem 1rem;
    width: 100%;
    display: block; 
    text-decoration: none; 
    color: #000000;  
    display: flex;
    justify-content: space-between;
    &:hover {
      box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
    } 
    h5 {
      font-weight: 600;
      margin: 0;
      padding: 1rem 3rem;
    }
    @media (min-width: 550px) {
      h5 {
          font-size: 2.4rem;
      }       
    }
    .article-date {
      position: absolute;
      left: 0.5rem;
      top: 0px;
      opacity: 0.5;  
      font-size: 1rem;    
    }
    .article--thumbnail {
      width: 10rem;
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
</style>
<template>
  <nuxt-link :to="post._path" class="article-list-item">
    <h5>{{post.title}}</h5>
    <div class="article-date">{{postDate}}</div>
    <div class="article--thumbnail" :style="{ 'background-image': 'url(' + post.thumbnail + ')' }" v-if="post.thumbnail"></div>
  </nuxt-link>    
</template>
<script>
export default {
  props: {
    post: Object
  },
  computed: {
    postDate () {
      const date = new Date(this.post.date)
      return date.toDateString()
    }
  }
}
</script>
