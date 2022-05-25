import {App} from 'vue'
import Radio from './index.vue'

Radio.name = 'ds-radio'

Radio.install = (app: App) => {
  app.component(Radio.name, Radio)
}

export default Radio