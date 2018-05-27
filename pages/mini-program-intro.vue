<style lang="scss">
.mp-example--outer {
  display: flex;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;  
}
.mp-example--inner {
  padding: 1rem 0;
  flex: 1;
  margin: 0 auto;
  display: block;
  min-width: 220px; 
  .mp-example {
    width: 220px;
    height: auto;
    margin: 0 auto;
    display: block;    
  }
  p {
    padding: 10px;
    flex: 1;
    text-align: center;
    opacity: 0.5;
  }
}
</style>

<template>
  <section class="main">
    <div class="container">
      <markdown-body>
        <h2>What is a WeChat Mini Program?</h2>
        <p>
          First of all, we have a lot of unpacking to do, so if you don't know what WeChat is maybe go check out some of these articles: 
          <ul>
            <li><a href="https://www.weforum.org/agenda/2018/03/wechat-now-has-over-1-billion-monthly-users/" target="_blank">Here's the secret to how WeChat attracts 1 billion monthly users</a></li>
            <li><a href="https://www.intheblack.com/articles/2018/05/01/wechat-super-app" target="_blank">WeChat is a way of life for 900 million daily users</a></li>
            <li><a href="https://www.econsultancy.com/blog/69718-what-s-next-for-wechat-in-2018" target="_blank">What’s next for WeChat in 2018?</a></li>
          </ul>
          That should be a good primer for our main focus, which is <strong>WeChat Mini Programs</strong>.
          WeChat Mini Programs are essentially <em>apps within the app</em>. These are apps that live inside of WeChat, only accessible from the mobile app. Released in early 2017, Mini Programs <a href="https://walkthechat.com/wechat-mini-programs-getting-traction-china/" target="_blank">exploded in popularity in early 2018.</a>
        </p>
        <h5>Examples</h5>
        <div class="mp-example--outer">
          <div class="mp-example--inner">
            <img src="~/assets/mobike-mini-program.jpeg" alt="mobike WeChat mini program screenshot" class="mp-example"/>
            <p>MoBike's mini program allows users to find shared bikes around them</p>
          </div>
          <div class="mp-example--inner">
            <img src="~/assets/zara-mini-program.jpeg" alt="Zara ecommerce WeChat mini program screenshot" class="mp-example"/>
            <p>Zara's ecommerce mini program</p>        
          </div>
        </div>
        <h5>Functionality</h5>
        <p>WeChat Mini Programs offer advanced functionality to users, including but not limited to ecommerce, games, event management, content, etc. Basically anything you can do in a web app or web site, a Mini Program can do.</p>
        <h5>Native-like User Experience</h5>
        <blockquote>Anything a web app can do? So, um, H5? Why would I choose a Mini Program over just an H5...</blockquote>
        <p>
          When Mini Programs were first released in 2017, skeptics often poked at the new technology as being no improvement from traditional h5 WeChat pages. There are, however, several things that distinguish Mini Programs from h5. So-called <em>h5</em> is really just a normal website, plain and simple.
          
          Mini Programs, however, are a hybrid of a website and a native app. Part native, part web app. This creates a <em>Fast</em>, <em>Native-like</em> user experience right inside of WeChat. 
          This speed and UX cannot be matched by a normal website being accessed inside of WeChat.
        </p>
        <h5>Development</h5>
        <p>WeChat mini programs are created using <strong>Javascript, HTML, and CSS</strong>. This is the same technology and programming languages developers use when creating websites.
          On top of these technologies, Tencent created a <strong>framework</strong> for building WeChat mini programs.
        </p>
        <h5>Terminology</h5>
        <p>
          In Chinese, Mini Programs are referred to as <strong>微信小程序</strong><em>, wēi xìn xiǎo chéng xù</em>.
          The term <em>Mini Program</em> is also used interexchangably with <em>'MP', 'Mini App',</em> and <em>'WeApp'</em>.
        </p>
      </markdown-body>
    </div>
  </section>
</template>
<script>
import MarkdownBody from '~/components/MarkdownBody'
export default {
  components: {
    MarkdownBody
  }
}
</script>
