import { App } from 'vue'
import Breadcrumb from './index.vue'

Breadcrumb.name = 'ds-breadcrumb'

Breadcrumb.install = (app: App) => {
  app.component(Breadcrumb.name, Breadcrumb)
}

export default Breadcrumb