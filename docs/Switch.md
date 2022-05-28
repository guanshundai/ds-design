## 基本用法

<ds-switch @switch="handleSwitch"/>

**代码**

```html
<template>
  <ds-switch />
</template>

<script setup lang='ts'>
const handleSwitch = (value: boolean) => {
  console.log('value:', value)
}
</script>
```

## 调整大小

<ds-switch size="small" />
<ds-switch style="margin-left: 30px" />
<ds-switch size="large" style="margin-left: 45px" /> <br><br>

**代码**

```html
<template>
  <ds-switch size="small" />
  <ds-switch />
  <ds-switch size="large" />
</template>
```

## 带文字

<ds-switch checkedText="开" uncheckedText="关" />

**代码**

```html
<template>
  <ds-switch checkedText="开" uncheckedText="关" />
</template>
```

## API

| 属性           | 说明           | 类型  | 默认值  |
| ------------- |:-------------:| -----:| -----: |
| size       | 设置字体大小        | small/normal/large |  normal |
| checkedText| 开启状态的文字        | string |  开 |
| uncheckedText| 关闭状态的文字        | string |  关 |

**事件**

| 事件名称           | 说明           | 参数  |
| -------------     |:-------------:| -----:|
| switch             | 切换开关事件    | (value: boolean) => void |

<script setup>
  import DsSwitch from './components/Switch/index.vue'
</script>