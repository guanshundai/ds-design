## 图标

<ds-message type='success' msg='复制成功' :time='800' :visible='visible'></ds-message>

<div class="flex-r-st">
  <div class="flex-c-c icon-hover" style="width: 200px;padding: 10px 0" @click="copy(`<CloseCircleOutlined />`)">
    <CloseCircleOutlined :color="color"/>
    <span class="mg-tp-1">{{`<CloseCircleOutlined />`}}</span>
  </div>
  <div class="flex-c-c icon-hover" style="width: 200px;padding: 10px 0" @click="copy(`<CloseOutlined />`)">
    <CloseOutlined :color="color1"/>
    <span class="mg-tp-1">{{`<CloseOutlined />`}}</span>
  </div>
  <div class="flex-c-c icon-hover" style="width: 200px;padding: 10px 0" @click="copy(`<DownOutlined />`)">
    <DownOutlined :color="color1"/>
    <span class="mg-tp-1">{{`<DownOutlined />`}}</span>
  </div>
  <div class="flex-c-c icon-hover" style="width: 200px;padding: 10px 0" @click="copy(`<LoadingOutlined />`)">
    <LoadingOutlined :color="color1"/>
    <span class="mg-tp-1">{{`<LoadingOutlined />`}}</span>
  </div>
  <div class="flex-c-c icon-hover" style="width: 200px;padding: 10px 0" @click="copy(`<SearchOutlined />`)">
    <SearchOutlined :color="color1"/>
    <span class="mg-tp-1">{{`<SearchOutlined />`}}</span>
  </div>
  <div class="flex-c-c icon-hover" style="width: 200px;padding: 10px 0" @click="copy(`<SettingOutlined />`)">
    <SettingOutlined :color="color1"/>
    <span class="mg-tp-1">{{`<SettingOutlined />`}}</span>
  </div>
</div>

使用
```html
<template>
  <LoadingOutlined />
</template>
```

## API
| 属性           | 说明           | 类型  | 默认值  |
| ------------   |:-------------:| -----:| -----: |
| width          | 设置图标宽度    | string | '30'  |
| height         | 设置图标高度    | string | '30'  |
| color          | 设置图标颜色    | string | '#333333'  |

<script setup>
  import {ref} from 'vue'
  import DsMessage from './components/Message/index.vue'

  import CloseCircleOutlined from './components/Icon/CloseCircleOutlined.vue'
  import CloseOutlined from './components/Icon/CloseOutlined.vue'
  import DownOutlined from './components/Icon/DownOutlined.vue'
  import LoadingOutlined from './components/Icon/LoadingOutlined.vue'
  import SearchOutlined from './components/Icon/SearchOutlined.vue'
  import SettingOutlined from './components/Icon/SettingOutlined.vue'
  // import useClipboard from 'vue-clipboard3';

  // const { toClipboard } = useClipboard();

  const color = ref('#333333')
  const color1 = ref('#333333')
  const visible = ref(false)

  const copy = (val) => {
    // toClipboard(val).then(res => {
    //   visible.value = true
    //   setTimeout(() => {
    //     visible.value = false
    //   }, 800)
    //   console.log(res.text, '---')
    // })
  }
</script>
