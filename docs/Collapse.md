## 基本用法

<ds-collapse>
  <ds-collapse-panel title="Title1">content1</ds-collapse-panel>
  <ds-collapse-panel title="Title2">content2</ds-collapse-panel>
</ds-collapse>

**代码**

```html
<template>
  <ds-collapse>
    <ds-collapse-panel title="Title1">content1</ds-collapse-panel>
    <ds-collapse-panel title="Title2">content2</ds-collapse-panel>
  </ds-collapse>
</template>
```

<script setup>
  import DsCollapse from './components/Collapse/index.vue'
  import DsCollapsePanel from './components/CollapsePanel/index.vue'
</script>



## **API**

| 属性           | 说明           | 类型  | 默认值  |
| ------------- |:-------------:| -----:| -----: |
| title          | 面板头内容    | string| Title  |