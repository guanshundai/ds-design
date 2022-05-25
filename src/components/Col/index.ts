import {App} from 'vue'
import Col from './index.vue'

Col.name = 'ds-col'

Col.install = (app: App) => {
  app.component(Col.name, Col)
}

export default Col