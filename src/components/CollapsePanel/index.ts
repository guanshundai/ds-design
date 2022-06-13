import { App } from "vue";
import CollapsePanel from './index.vue'

CollapsePanel.name = 'ds-collapse-panel'

CollapsePanel.install = (app: App) => {
  app.component(CollapsePanel.name, CollapsePanel)
}

export default CollapsePanel