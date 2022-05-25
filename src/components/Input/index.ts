import { App } from 'vue'
import Input from './index.vue'

Input.name = 'ds-input'

Input.install = (app: App) => {
  app.component(Input.name, Input)
}

export default Input