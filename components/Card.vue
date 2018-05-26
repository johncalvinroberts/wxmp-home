<style lang="scss" scoped>
@import '../assets/styles/variables.scss';
  .card {
    background-color: #ffffff;
    flex-direction: column;
    overflow: hidden;
    flex: 0 1 calc(33% - 0.5rem);
    min-width: 200px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
    transition: all 0.2s ease-in-out;
    position: relative;
    &:hover {
      box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
    }
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
.card-body {
  padding: 0 3rem 2rem 3rem;
  min-height: 100px;  
}
.card-footer {
  position: absolute;
  bottom: 1rem;
  right: 2rem;
}
</style>
<template>
  <div class="card">
    <h5>{{title}}</h5>
    <p class="card-body">
      <slot/>
    </p>
    <a :href="link" target="_blank" class="card-footer center text-center"><p>View docs</p></a>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    link: String,
    linkTitle: String
  }
}
</script>
