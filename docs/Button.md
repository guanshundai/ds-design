## 基本用法

<ds-button>默认</ds-button>
<ds-button type="danger" style="margin-left: 20px">危险</ds-button>
<ds-button type="normal" style="margin-left: 20px">正常</ds-button><br/><br/>

**代码**

```html
<template>
  <ds-button>默认</ds-button>
  <ds-button type="danger">危险</ds-button>
  <ds-button type="normal">正常</ds-button>
</template>
```

## 按钮大小

<ds-button size="small">小号</ds-button>
<ds-button size="normal" type="danger" style="margin-left: 20px">正常</ds-button>
<ds-button size="large" type="normal" style="margin-left: 20px">大号</ds-button><br/><br/>

**代码**

```html
<template>
  <ds-button size="small">小号</ds-button>
  <ds-button size="normal" type="danger">正常</ds-button>
  <ds-button size="large" type="normal">大号</ds-button>
</template>
```

## 加载中

<ds-button loading>加载中...</ds-button>


**代码**

```html
<template>
  <ds-button loading>加载中...</ds-button>
</template>
```

<script setup>
  import DsButton from './components/Button.vue'
</script>



## **API**

| 属性           | 说明           | 类型  | 默认值  |
| ------------- |:-------------:| -----:| -----: |
| type          | 设置按钮类型    | default/normal/danger | default  |
| size          | 设置按钮大小    | normal/small/large | normal  |
| loading       | 加载中         | boolean | false  |
| style         | 自定义样式      | -- | --  |

**事件**

| 事件名称           | 说明           | 参数  |
| -------------     |:-------------:| -----:|
| click             | 点击按钮事件    | (event) => void |