<template>
  <div class="wxmp-logo" >
    <transition name="fade">
      <div v-show="loaded">
        <img class="logo--image" src="~/assets/wxmp-phone.png" alt="wechat mini program base"/>
        <div class="logo--box">
          <img src="~/assets/wxmp-logo.png" alt="WXMP home page logo" class="logo--logo"/>
          <div class="logo--box__inner">
            <div class="box">
              <div><span class="logo--title">WX</span>-> <i>wēi xìn</i>, WeChat</div>
              <div><span class="logo--title">MP</span>-> Mini Program</div>
            </div>
          </div>
        </div>
      </div>
    </transition>    
  </div>
</template>

<style lang="scss">
  .wxmp-logo{
    position: relative;
    z-index: 100;
    overflow: hidden;
    width: 210px;
    height: auto;
    display: block;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    margin-top: 2rem;
    .logo--image {
      width: 100%;
    }
    .logo--box {
      width: 100%;
      height: auto; 
      position: absolute;
      top: 5rem;
      left: 0;
      .logo--logo {
        width: 50%;
        height: auto;
        margin: 0 auto;
        display: block;
        padding: 20px;
      }
    }
    .logo--box__inner {
      width: 100%;
      padding: 10px;
      font-size: 10px;
      .box {
        margin: 0 auto;
        width: 122px;
      }
      .logo--title {
        font-weight: 800;
      }
    }
  }
   
</style>
<script>
export default {
  data () {
    return {
      loaded: false
    }
  },
  mounted () {
    this.loaded = true
  }
}
</script>
