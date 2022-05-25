import {App} from 'vue'
import Menu from './index.vue'

Menu.name = 'ds-menu'

Menu.install = (app: App) => {
  app.component(Menu.name, Menu)
}

export default Menu