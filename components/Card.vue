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
  opacity: 0.8;
}
.card-inner.disabled {
  opacity: 0.4;
  pointer-events: none;
}
.disabled-message {
  position: absolute;
  width: 100%;
  opacity: 1;
  top: 10%;
  width: 40%;
  right: 10%;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 2px;
  z-index: 999;  
}
</style>
<template>
  <div class="card">
    <span class="disabled-message" v-if="disabled">COMING SOON</span>
    <div :class="classObject">
      <h5>{{title}}</h5>
      <p class="card-body">
        <slot/>
      </p>
      <a :href="link" target="_blank" class="card-footer center text-center"><p>View docs</p></a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    link: String,
    linkTitle: String,
    disabled: Boolean
  },
  computed: {
    classObject () {
      return {'card-inner': true, disabled: this.disabled}
    }
  }
}
</script>
