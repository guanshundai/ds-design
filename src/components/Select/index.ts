import { App } from 'vue'
import Select from './index.vue'

Select.name = 'ds-select'

Select.install = (app: App) => {
  app.component(Select.name, Select)
}

export default Select