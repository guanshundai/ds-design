import {App} from 'vue'
import MenuItem from './index.vue'

MenuItem.name = 'ds-menu-item'

MenuItem.install = (app: App) => {
  app.component(MenuItem.name, MenuItem)
}

export default MenuItem