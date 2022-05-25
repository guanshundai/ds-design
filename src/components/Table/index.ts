import {App} from 'vue'
import Table from './index.vue'

Table.name = 'ds-table'

Table.install = (app: App) => {
  app.component(Table.name, Table)
}

export default Table