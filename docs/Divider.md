## 基本用法

<br>
<ds-divider />
<br>
<ds-divider type="dashed" />
<br>

**代码**

```html
<template>
  <ds-divider />
</template>
```

## 带文字

<br>
<ds-divider withText>分割</ds-divider> <br/>
<ds-divider type="dashed" withText>分割</ds-divider> <br/>

**代码**

```html
<template>
  <ds-divider withText>分割</ds-divider>
  <ds-divider type="dashed" withText>分割</ds-divider>
</template>
```

## 垂直分割线

<br>
<ds-divider vertical height="36px" /> 
<ds-divider vertical height="36px" type="dashed" color="red" /> 
<br>

**代码**

```html
<template>
  <ds-divider vertical height="36px" /> 
  <ds-divider vertical height="36px" type="dashed" color="red" /> 
</template>
```

## API

| 属性           | 说明           | 类型  | 默认值  |
| ------------- |:-------------:| -----:| -----: |
| color         | 设置颜色        | string | #33c0bb  |
| type          | 设置类型        | dashed/solid | solid  |
| vertical      | 垂直分割线        | boolean | false  |
| width         | 设置分割线粗细    | string | 1px  |
| height       | 当vertical=true时,设置分割线高度    | string |   |

<script setup>
  import DsDivider from './components/Divider/index.vue'
</script>