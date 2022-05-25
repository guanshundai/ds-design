import { App } from 'vue'
import Switch from './index.vue'

Switch.name = 'ds-switch'

Switch.install = (app: App) => {
  app.component(Switch.name, Switch)
}

export default Switch