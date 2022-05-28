## type1

<div style="width: 100%;height: 300px;">
  <ds-layout type="1">
    <template #sider>
      <div style="width: 100%;height: 100%;background-color:  #0092ff;"></div>
    </template>
    <template #header>
      <div style="width: 100%;height: 100%;background-color:  #0092ffbf;"></div>
    </template>
    <template #content>
      <div style="width: 100%;height: 100%;background-color:  #0092ff90;"></div>
    </template>
    <template #footer>
      <div style="width: 100%;height: 100%;background-color:  #0092ffbf;"></div>
    </template>
  </ds-layout>
</div>

**代码**

```html
<template>
  <ds-layout type='1'>
    <template #sider></template>
    <template #header></template>
    <template #content></template>
    <template #footer></template>
  </ds-layout>
</template>
```

## type2

<div style="width: 100%;height: 300px;">
  <ds-layout type="2">
    <template #sider>
      <div style="width: 100%;height: 100%;background-color:  #0092ff;"></div>
    </template>
    <template #header>
      <div style="width: 100%;height: 100%;background-color:  #0092ffbf;"></div>
    </template>
    <template #content>
      <div style="width: 100%;height: 100%;background-color:  #0092ff90;"></div>
    </template>
    <template #footer>
      <div style="width: 100%;height: 100%;background-color:  #0092ffbf;"></div>
    </template>
  </ds-layout>
</div>

**代码**

```html
<template>
  <ds-layout type='2'>
    <template #sider></template>
    <template #header></template>
    <template #content></template>
    <template #footer></template>
  </ds-layout>
</template>
```

## API

| 属性           | 说明           | 类型  | 默认值  |
| ------------- |:-------------:| -----:| -----: |
| type       | layout类型        | string |  1 |

<script setup>
  import DsLayout from './components/Layout/index.vue'
</script>