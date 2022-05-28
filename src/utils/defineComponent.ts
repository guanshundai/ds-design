import DSButton from 'components/Button/index.vue'
import DSInput from 'components/Input/index.vue'
import DSSelect from 'components/Select/index.vue'
import DSDivider from 'components/Divider/index.vue'
import DSBreadcrumb from 'components/Breadcrumb/index.vue'
import DSBreadcrumbItem from 'components/BreadcrumbItem/index.vue'
import DSSwitch from 'components/Switch/index.vue'
import DSRow from 'components/Row/index.vue'
import DSCol from 'components/Col/index.vue'
import DSLayout from 'components/Layout/index.vue'
import DSDropdown from 'components/Dropdown/index.vue'
import DSMenu from 'components/Menu/index.vue'
import DSMenuItem from 'components/MenuItem/index.vue'
import DSRadio from 'components/Radio/index.vue'
import DSCarousel from 'components/Carousel/index.vue'
import DSTable from 'components/Table/index.vue'

import CloseCircleOutlined from 'components/Icon/CloseCircleOutlined.vue'
import CloseOutlined from 'components/Icon/CloseOutlined.vue'
import DownOutlined from 'components/Icon/DownOutlined.vue'
import SearchOutlined from 'components/Icon/SearchOutlined.vue'
import SettingOutlined from 'components/Icon/SettingOutlined.vue'
import LoadingOutlined from 'components/Icon/LoadingOutlined.vue'

export default function(app: any) {
  app.component('ds-button', DSButton),
  app.component('ds-input', DSInput),
  app.component('ds-select', DSSelect),
  app.component('ds-divider', DSDivider),
  app.component('ds-breadcrumb', DSBreadcrumb),
  app.component('ds-breadcrumb-item', DSBreadcrumbItem),
  app.component('ds-switch', DSSwitch),
  app.component('ds-row', DSRow),
  app.component('ds-col', DSCol),
  app.component('ds-layout', DSLayout),
  app.component('ds-dropdown', DSDropdown),
  app.component('ds-menu', DSMenu),
  app.component('ds-menu-item', DSMenuItem),
  app.component('ds-radio', DSRadio),
  app.component('ds-carousel', DSCarousel),
  app.component('ds-table', DSTable),
  app.component('CloseCircleOutlined', CloseCircleOutlined),
  app.component('CloseOutlined', CloseOutlined),
  app.component('DownOutlined', DownOutlined),
  app.component('SearchOutlined', SearchOutlined),
  app.component('SettingOutlined', SettingOutlined),
  app.component('LoadingOutlined', LoadingOutlined)
}