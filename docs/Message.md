## Message 全局提示

**示例**

<ds-message type='success' msg='请求成功' :time='800' :visible='visible'></ds-message>
<ds-message type='warning' msg='这是一个警告' :time='800' :visible='visible1'></ds-message>
<ds-message type='error' msg='请求失败' :time='2000' :visible='visible2'></ds-message>

<ds-button @click="showMessage">Success</ds-button>
<ds-button @click="showMessage1" style='margin-left: 20px;background-color: #e8b66c'>Warning</ds-button>
<ds-button @click="showMessage2" style='margin-left: 20px;' type='danger'>Error</ds-button>

**代码**

```html
<template>
  <ds-button @click="showMessage">Success</ds-button>

  <ds-button @click="showMessage1" style='background-color: #e8b66c'>Warning</ds-button>

  <ds-button @click="showMessage2" type='danger'>Error</ds-button>
</template>

<script setup>
  const showMessage = () => {
    Message({type: 'success', msg: '请求成功', time: 800})
  }
  const showMessage1 = () => {
    Message({type: 'warning', msg: '这是一个警告', time: 800})
  }
  const showMessage2 = () => {
    Message({type: 'error', msg: '请求失败', time: 2000})
  }
</script>
```

## API

| 属性           | 说明           | 类型  | 默认值  |
| ------------- |:-------------:| -----:| -----: |
| msg           | 提示内容        | string |   |
| time          | 自动关闭的延时，单位毫秒    | number | 800  |
| type          | 提示类型    | string: success/warning/error | success  |


<script setup>
  import {ref} from 'vue'
  import DsMessage from './components/Message/index.vue'
  import DsButton from './components/Button.vue'

  const visible = ref(false)
  const visible1 = ref(false)
  const visible2 = ref(false)

  const showMessage = () => {
    visible.value = true
    setTimeout(() => {
      visible.value = false
    }, 800)
  }
  const showMessage1 = () => {
    visible1.value = true
    setTimeout(() => {
      visible1.value = false
    }, 800)
  }
  const showMessage2 = () => {
    visible2.value = true
    setTimeout(() => {
      visible2.value = false
    }, 2000)
  }
</script>