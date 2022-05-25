import {App} from 'vue'
import Dropdown from './index.vue'

Dropdown.name = 'ds-dropdown'

Dropdown.install = (app: App) => {
  app.component(Dropdown.name, Dropdown)
}

export default Dropdown