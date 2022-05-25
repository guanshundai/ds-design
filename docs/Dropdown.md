## Dropdown 下拉菜单

**示例**

<ds-dropdown :options='options' color='#338eff' />

**代码**

```html
<template>
  <ds-dropdown :options='options' color='#338eff' />
</template>

<script setup>
  import {ref} from 'vue'

  const options = ref([
    {
      link: 'http://www.baidu.com',
      text: '百度一下'
    },
    {
      link: 'https://www.alipay.com/',
      text: '支付宝'
    },
  ])
</script>
```

## API

| 属性           | 说明           | 类型  | 默认值  |
| ------------- |:-------------:| -----:| -----: |
| color          | 设置颜色    | string | #333333  |
| options        | 选项列表(link: 跳转链接, text: 文字)  | object | {}  |

<script setup>
  import {ref} from 'vue'
  import DsDropdown from './components/Dropdown/index.vue'

  const options = ref([
    {
      link: 'http://www.baidu.com',
      text: '百度一下'
    },
    {
      link: 'https://www.alipay.com/',
      text: '支付宝'
    },
  ])
</script>