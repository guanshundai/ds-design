import { App } from 'vue'
import Button from './Button'
import Breadcrumb from './Breadcrumb'
import BreadcrumbItem from './BreadcrumbItem'
import Divider from './Divider'
import Switch from './Switch'
import Select from './Select'
import Input from './Input'
import Row from './Row'
import Col from './Col'
import Layout from './Layout'
import Dropdown from './Dropdown'
import Menu from './Menu'
import MenuItem from './MenuItem'
import Message from './Message'
import Radio from './Radio'
import Carousel from './Carousel'
import Table from './Table'

import { 
  CloseCircleOutlined, 
  CloseOutlined, 
  DownOutlined, 
  SearchOutlined, 
  SettingOutlined, 
  LoadingOutlined
} from './Icon'

const components = [
  Button,
  Breadcrumb,
  BreadcrumbItem,
  Divider,
  Switch,
  Select,
  Input,
  Row,
  Col,
  Layout,
  Dropdown,
  Menu,
  MenuItem,
  Message,
  Radio,
  Carousel,
  Table,
  CloseCircleOutlined, 
  CloseOutlined, 
  DownOutlined, 
  SearchOutlined, 
  SettingOutlined, 
  LoadingOutlined
]

const install = (app: App) => {
  components.map(item => {
    app.component(item.name, item)
  })
}

export default {
  install,
  ...components
}