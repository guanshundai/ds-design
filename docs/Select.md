## 基本用法

<ds-select :options="options" @select="handelSelect"/>

**代码**

```html
<template>
  <ds-select :options="options" @select="handelSelect"/>
<template>

<script setup lang='ts'>
  import { ref } from 'vue'

  const options = ref([
    { label: "1", value: "猫" },
    { label: "2", value: "狗" },
  ])

  const handelSelect = (v, l) => {
    console.log('value:', v, 'label:', l)
  }
</script>
```

## 改变大小

<ds-select size='small' style='width: 100px;' />

<ds-select style='width: 150px;margin-left: 20px'/>

<ds-select size='large' style='width: 200px;margin-left: 20px' /> <br /><br />

**代码**

```html
<template>
  <ds-select size='small' />
  <ds-select size='normal'/>
  <ds-select size='large' />
<template>
```

## API

| 属性           | 说明           | 类型  | 默认值  |
| ------------- |:-------------:| -----:| -----: |
| v-model       | 动态绑定        | string |   |
| size          | 设置输入框大小    | normal/small/large | normal  |
| name          | select 元素的名称  | string |   |
| id            | select 元素的id  | string |   |
| style         | 自定义样式      |  |   |
| placeholder   | 提示文本        | string | 请输入...  |


**事件**

| 事件名称           | 说明           | 参数  |
| -------------     |:-------------:| -----:|
| select            | 选择事件    | (v, l) => void; v: value, l: label |


<script setup>
  import { ref } from 'vue'
  import DsSelect from './components/Select/index.vue'

  const options = ref([
    { label: "1", value: "猫" },
    { label: "2", value: "狗" },
  ])

  const handelSelect = (v, l) => {
    console.log('value:', v, 'label:', l)
  }
</script>