## Carousel 轮播图

**示例**

<ds-carousel :time="2000" autoplay>
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</ds-carousel>

**代码**

```html
<template>
  <ds-carousel :time="2000" autoplay>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
  </ds-carousel>
</template>
```

## API

| 属性           | 说明           | 类型  | 默认值  |
| ------------- |:-------------:| -----:| -----: |
| width         | 容器宽度        | string | 100%  |
| height        | 容器高度    | string | 200px  |
| autoplay      | 自动切换    | boolean | false  |
| time          | 自动切换时间间隔(毫秒)| number | 1000  |

<script setup>
  import DsCarousel from './components/Carousel/index.vue'
</script>