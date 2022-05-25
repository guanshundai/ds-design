import { App } from 'vue'
import CloseCircleOutlined from './CloseCircleOutlined.vue'
import CloseOutlined from './CloseOutlined.vue'
import DownOutlined from './DownOutlined.vue'
import SearchOutlined from './SearchOutlined.vue'
import SettingOutlined from './SettingOutlined.vue'
import LoadingOutlined from './LoadingOutlined.vue'

CloseCircleOutlined.name = 'CloseCircleOutlined'
CloseOutlined.name = 'CloseOutlined'
DownOutlined.name = 'DownOutlined'
SearchOutlined.name = 'SearchOutlined'
SettingOutlined.name = 'SettingOutlined'
LoadingOutlined.name = 'LoadingOutlined'

CloseCircleOutlined.install = (app: App) => {
  app.component(CloseCircleOutlined.name, CloseCircleOutlined)
}
CloseOutlined.install = (app: App) => {
  app.component(CloseOutlined.name, CloseOutlined)
}
DownOutlined.install = (app: App) => {
  app.component(DownOutlined.name, DownOutlined)
}
SearchOutlined.install = (app: App) => {
  app.component(SearchOutlined.name, SearchOutlined)
}
SettingOutlined.install = (app: App) => {
  app.component(SettingOutlined.name, SettingOutlined)
}
LoadingOutlined.install = (app: App) => {
  app.component(LoadingOutlined.name, LoadingOutlined)
}

export {
  CloseCircleOutlined,
  CloseOutlined,
  DownOutlined,
  SearchOutlined,
  SettingOutlined,
  LoadingOutlined,
}