import Vue from 'vue'

import marked, { Renderer }  from 'marked'
import highlightjs from 'highlight.js'

// Create your custom renderer.
const renderer = new Renderer()
renderer.code = (code, language) => {
  // Check whether the given language is valid for highlight.js.
  const validLang = !!(language && highlightjs.getLanguage(language))
  // Highlight only if the language is valid.
  const highlighted = validLang ? highlightjs.highlight(language, code).value : code
  // Render the highlighted code with `hljs` class.
  return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`
}

marked.setOptions({
  gfm: true,
  breaks: true,
  tables: true,
  renderer
})

Vue.prototype.$marked = marked