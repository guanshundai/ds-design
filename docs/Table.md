## Table 表格

**基本用法**

<ds-table :columns="columns" :dataSource="dataSource"></ds-table>

**代码**

```html
<template>
  <ds-table :columns="columns" :dataSource="dataSource"></ds-table>
</template>

<script setup>
import {ref} from 'vue'

const columns = ref([
  {
    title: 'Month',
    dataIndex: 'month',
  },
  {
    title: 'Savings',
    dataIndex: 'money'
  }
])

const dataSource = ref([
  {
    key: 1,
    month: 'January',
    money: '$80'
  },
  {
    key: 2,
    month: 'February',
    money: '$100'
  },
  {
    key: 3,
    month: 'Jun',
    money: '$1000'
  },
])
</script>
```

## API

**Table**

| 属性           | 说明           | 类型  | 默认值  |
| ------------- |:-------------:| -----:| -----: |
| columns       | 表格列的配置描述 | any[] |  - |
| dataSource    | 数据数组    | any[] | -  |
| width         | 表格宽度    | string | 100%  |

**Column**

| 属性           | 说明           | 类型  | 默认值  |
| ------------- |:-------------:| -----:| -----: |
| align       | 设置列内容的对齐方式 | left/right/center | left |
| dataIndex    | 列数据在数据项中对应的 key    | string | -  |
| key         | Vue 需要的 key    | string | -  |
| title         | 列头显示文字    | string | -  |

<script setup>
  import {ref} from 'vue'
  import DsTable from './components/Table/index.vue'

  const columns = ref([
  {
    title: 'Month',
    dataIndex: 'month',
  },
  {
    title: 'Savings',
    dataIndex: 'money'
  }
])

const dataSource = ref([
  {
    key: 1,
    month: 'January',
    money: '$80'
  },
  {
    key: 2,
    month: 'February',
    money: '$100'
  },
  {
    key: 3,
    month: 'Jun',
    money: '$1000'
  },
])
</script>