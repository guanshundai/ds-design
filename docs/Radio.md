## Radio 单选框

**示例**

<ds-radio v-model="radioValue" :option="radioOption" name="sex" checkedColor="red" @change="getRadioValue"></ds-radio> 

**代码**

```html
<template>
  <ds-radio v-model="radioValue" :option="radioOption" name="sex" checkedColor="red" @change="getRadioValue"></ds-radio>
</template>

<script setup>
import { ref } from 'vue'
import DsRadio from './components/Radio/index.vue'

const radioValue = ref('man')
const radioOption = ref([
  {
    lable: 'man',
    value: 'man'
  },
  {
    lable: 'woman',
    value: 'woman'
  }
])

const getRadioValue = (value) => {
  console.log(value);
}
</script>
```

## API

| 属性           | 说明           | 类型  | 默认值  |
| ------------- |:-------------:| -----:| -----: |
| v-model       | 动态绑定        | string | - |
| option        | 设置子元素    | Array<{ label: string, value: string }> | - |
| name          | input[type="radio"] 的 name 属性  | string | -  |
| checkedColor  | 选中时的颜色  | string | #338eff |

**事件**

| 事件名称           | 说明           | 参数  |
| -------------     |:-------------:| -----:|
| change             | 选项变化时的回调函数    | (value: string) => void |

<script setup>
import { ref } from 'vue'
import DsRadio from './components/Radio/index.vue'

const radioValue = ref('man')
const radioOption = ref([
  {
    lable: 'man',
    value: 'man'
  },
  {
    lable: 'woman',
    value: 'woman'
  }
])

const getRadioValue = (value) => {
  console.log(value);
}
</script>