## 基本用法

<div>
  <ds-menu :activeIndex="0">
    <ds-menu-item>Home</ds-menu-item>
    <ds-menu-item>Propducts</ds-menu-item>
    <ds-menu-item>History</ds-menu-item>
    <ds-menu-item>Message Info</ds-menu-item>
    <ds-menu-item>About Us</ds-menu-item>
  </ds-menu>
</div>

**代码**

```html
<template>
  //基础用法
  <ds-menu :activeIndex="0">
    <ds-menu-item>Home</ds-menu-item>
    <ds-menu-item>Propducts</ds-menu-item>
    <ds-menu-item>History</ds-menu-item>
    <ds-menu-item>Message Info</ds-menu-item>
    <ds-menu-item>About Us</ds-menu-item>
  </ds-menu>
</template>

```

## 带icon

<div>
  <ds-menu :activeIndex="0">
    <ds-menu-item>
      <SettingOutlined size="16" />&nbsp;
      Home
    </ds-menu-item>
    <ds-menu-item>
      <SettingOutlined size="16" />&nbsp;
      Propducts
    </ds-menu-item>
    <ds-menu-item>History</ds-menu-item>
    <ds-menu-item>Message Info</ds-menu-item>
    <ds-menu-item>About Us</ds-menu-item>
  </ds-menu>
</div>

**代码**

```html
<template>
  <ds-menu :activeIndex="0">
    <ds-menu-item>
      <template #icon><SettingOutlined size="16" /></template>
      Home
    </ds-menu-item>
    <ds-menu-item>
      <template #icon><SettingOutlined size="16" /></template>
      Propducts
    </ds-menu-item>
    <ds-menu-item>History</ds-menu-item>
    <ds-menu-item>Message Info</ds-menu-item>
    <ds-menu-item>About Us</ds-menu-item>
  </ds-menu>
</template>

```

## API

| 属性           | 说明           | 类型  | 默认值  |
| ------------- |:-------------:| -----:| -----: |
| activeIndex   | 当前被选中的菜单 | number |  0  |


<script setup>
  import DsMenu from './components/Menu/index.vue'
  import DsMenuItem from './components/MenuItem/index.vue'
  import SettingOutlined from './components/Icon/SettingOutlined.vue'
</script>