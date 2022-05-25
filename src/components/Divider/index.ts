import { App } from 'vue'
import Divider from './index.vue'

Divider.name = 'ds-divider'

Divider.install = (app: App) => {
  app.component(Divider.name, Divider)
}

export default Divider