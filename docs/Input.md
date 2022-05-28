## 基本用法

<br>
<ds-input v-model="value" @input='handelInput'/>

**代码**

```html
<template>
  <ds-input v-model="value" @input='handelInput'/>
</template>

<script setup lang='ts'>
import { ref } from 'vue'

const value = ref<string>('')

const handelInput = (v: string) => {
  console.log(v, 'input value')
}
</script>
```

## 调整大小

<br>
<ds-input size="small" />
<ds-input size="normal" style='margin-left: 10px' />
<ds-input size="large" style='margin-left: 10px'/> <br><br>

**代码**

```html
<template>
  <ds-input size="small" />
  <ds-input size="normal"/>
  <ds-input size="large" />
</template>
```

## 带搜索框

<br>
<ds-input withSearch />

**代码**

```html
<template>
  <ds-input withSearch @search='handelSearch' />
</template>

<script setup lang='ts'>
import { ref } from 'vue'

const value = ref<string>('')

const handelSearch = (v: string) => {
  console.log(v, 'search value')
}
</script>
```

## API

| 属性           | 说明           | 类型  | 默认值  |
| ------------- |:-------------:| -----:| -----: |
| v-model       | 动态绑定        | string |   |
| type          | 设置按钮类型    | default/normal/danger | default  |
| size          | 设置按钮大小    | normal/small/large | normal  |
| loading       | 加载中         | boolean | false  |
| style         | 自定义样式      |  |   |
| placeholder   | 提示文本        | string | 请输入...  |
| withSearch    | 添加搜索按钮     | boolean |  false |
| maxlength    | 最大字符数     | number |  20 |

**事件**

| 事件名称           | 说明           | 参数  |
| -------------     |:-------------:| -----:|
| input             | 不带搜索框的输入事件    | (v) => void |
| search             | 带搜索框的搜索事件    | (v) => void |

<script setup>
  import DsInput from './components/Input/index.vue'
</script>