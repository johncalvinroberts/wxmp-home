<style>
  .faq {
    padding: 1rem 0;
  }
</style>

<template>
  <section class="main">
    <div class="container">
      <markdown-body>
        <h2>Frequently asked questions</h2>
        <div class="faq">
          <blockquote>What is a mini program?</blockquote>
          <p>Check our <nuxt-link to="/mini-program-intro">intro to mini programs</nuxt-link></p>
        </div>
        <div class="faq">
          <blockquote>Do I need a VPN to access the documentation?</blockquote>
          <p>Yes, it is recommended you use a VPN to access the documentation. Hosting in China is an incredibly massive headache that requires a business entity. This is just a not-for-profit project, no business license.</p>
        </div>
        <div class="faq">
          <blockquote>Can I contribute to WXMP.io?</blockquote>
          <p>YES! There is a huge amount of both development and translation that needs to be done, so please get in contact.</p>
        </div>          
        <div class="faq">
          <blockquote>Are any other languages planned for translation?</blockquote>
          <p>Right now, only English. If you're interested in translating WeChat documentation into another language, feel free to get in contact.</p>
        </div>                        
      </markdown-body>
    </div>
  </section>
</template>
<script>
import MarkdownBody from '~/components/MarkdownBody'
export default {
  components: {
    MarkdownBody
  },
  asyncData () {

  }
}
</script>
