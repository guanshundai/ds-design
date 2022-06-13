## 基本用法

<ds-carousel :time="2000" :images="images" width="100%" />

**代码**

```html
<template>
  <ds-carousel :time="2000" :images="images" width="100%" />
</template>

<script setup>
import one from './public/one.jpg'
import two from './public/two.jpg'
import three from './public/three.jpg'
import four from './public/four.jpg'

const images = [two,one,three,four]
</script>
```

## 不带面板指示点
<ds-carousel :time="2000" :images="images" :dots="false" width="100%"/> 

**代码**

```html
<template>
  <ds-carousel :time="2000" :images="images" :dots="false" width="100%"/>
</template>

<script setup>
import one from './public/one.jpg'
import two from './public/two.jpg'
import three from './public/three.jpg'
import four from './public/four.jpg'

const images = [two,one,three,four]
</script>
```

## API

| 属性           | 说明           | 类型  | 默认值  |
| ------------- |:-------------:| -----:| -----: |
| images         | 图片数组        | Array | [] |
| width         | 图片宽度        | string | 100%  |
| height        | 图片高度    | string | 200px  |
| autoplay      | 自动切换    | boolean | false  |
| dots        | 面板指示点    | boolean | true  |
| time          | 自动切换时间间隔(毫秒)| number | 1000  |

<script setup>
import DsCarousel from './components/Carousel/index.vue'
import one from './public/one.jpg'
import two from './public/two.jpg'
import three from './public/three.jpg'
import four from './public/four.jpg'

const images = [two,one,three,four]
</script>