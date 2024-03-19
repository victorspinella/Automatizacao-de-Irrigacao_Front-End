
import { updateAppConfig } from '#app'
import { defuFn } from 'C:/Users/victo/OneDrive/Documentos/GitHub/Automatizacao-de-Irrigacao_Front-End/front_dsw/node_modules/defu/dist/defu.mjs'

const inlineConfig = {
  "nuxt": {
    "buildId": "test"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)
