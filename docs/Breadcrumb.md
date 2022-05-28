## 基本用法

<ds-breadcrumb size="14px">
  <ds-breadcrumb-item href="https://daiguanshun.cn">首页</ds-breadcrumb-item>
  <ds-breadcrumb-item>产品</ds-breadcrumb-item>
  <ds-breadcrumb-item>新闻</ds-breadcrumb-item>
  <ds-breadcrumb-item>关于我们</ds-breadcrumb-item>
</ds-breadcrumb>

**代码**

```html
<template>
  <ds-breadcrumb size="14px">
  <ds-breadcrumb-item href="https://daiguanshun.cn">首页</ds-breadcrumb-item>
  <ds-breadcrumb-item>产品</ds-breadcrumb-item>
  <ds-breadcrumb-item>新闻</ds-breadcrumb-item>
  <ds-breadcrumb-item>关于我们</ds-breadcrumb-item>
</ds-breadcrumb>
</template>
```

## 分隔符

<ds-breadcrumb size="14px">
  <ds-breadcrumb-item >首页</ds-breadcrumb-item>
  <ds-breadcrumb-item separator='>'>产品</ds-breadcrumb-item>
  <ds-breadcrumb-item separator='>'>新闻</ds-breadcrumb-item>
  <ds-breadcrumb-item separator='>'>关于我们</ds-breadcrumb-item>
</ds-breadcrumb>

**代码**

```html
<template>
  <ds-breadcrumb size="14px">
    <ds-breadcrumb-item>首页</ds-breadcrumb-item>
    <ds-breadcrumb-item separator='>'>产品</ds-breadcrumb-item>
    <ds-breadcrumb-item separator='>'>新闻</ds-breadcrumb-item>
    <ds-breadcrumb-item separator='>'>关于我们</ds-breadcrumb-item>
  </ds-breadcrumb>
</template>
```

## API

**Breadcrumb**

| 属性           | 说明           | 类型  | 默认值  |
| ------------- |:-------------:| -----:| -----: |
| size       | 设置字体大小        | string |  16px |

**Breadcrumb.Item**

| 属性           | 说明           | 类型  | 默认值  |
| ------------- |:-------------:| -----:| -----: |
| separator       | 自定义分隔符        | string |  / |
| href       | 跳转链接        | string |   |
| color       | 文字颜色        | string | black  |
| activeColor       | 文字颜色        | string | #338eff  |
| hoverColor       | 文字颜色        | string | #338eff  |

<script setup>
  import DsBreadcrumb from './components/Breadcrumb/index.vue'
  import DsBreadcrumbItem from './components/Breadcrumb/BreadcrumbItem.vue'
</script>