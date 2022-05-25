## 开关

**示例**

<ds-switch size="small" />
<ds-switch />
<ds-switch size="large" style="margin-left: 15px" /> <br><br>
<ds-switch checkedText="开" uncheckedText="关" size="small" />
<ds-switch checkedText="开" uncheckedText="关" />
<ds-switch checkedText="开" uncheckedText="关" size="large" style="margin-left: 15px" />

**代码**

```html
<template>
  <ds-switch size="small" />
  <ds-switch />
  <ds-switch size="large" />

  <ds-switch checkedText="开" uncheckedText="关" size="small" />
  <ds-switch checkedText="开" uncheckedText="关" />
  <ds-switch checkedText="开" uncheckedText="关" size="large" />
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