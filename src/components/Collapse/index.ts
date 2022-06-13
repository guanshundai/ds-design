import {App} from 'vue'
import Collapse from './index.vue'

Collapse.name = 'ds-collapse'

Collapse.install = (app: App) => {
  app.component(Collapse.name, Collapse)
}

export default Collapse