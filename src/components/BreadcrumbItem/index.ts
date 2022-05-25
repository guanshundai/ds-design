import { App } from 'vue'
import BreadcrumbItem from './index.vue'

BreadcrumbItem.name = 'ds-breadcrumb-item'

BreadcrumbItem.install = (app: App) => {
  app.component(BreadcrumbItem.name, BreadcrumbItem)
}

export default BreadcrumbItem