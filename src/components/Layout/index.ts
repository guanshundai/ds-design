import {App} from 'vue'
import Layout from './index.vue'

Layout.name = 'ds-layout'

Layout.install = (app: App) => {
  app.component(Layout.name, Layout)
}

export default Layout