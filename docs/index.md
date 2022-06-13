## Ds Design for Vue3
# 版本
v1.1.10

# 支持环境
  现代浏览器

# 安装
**推荐使用 npm 或 yarn 的方式进行开发**

npm
```
npm i ds-design --save
```

yarn
```
yarn add ds-design
```

# 使用
**全局引用**

在main.ts/main.js中引用
```ts
import DsDesign from 'ds-design'
app.use(DsDesign)
```

**按需引入**

```ts
<template>
  <ds-button>按钮</ds-button>
</template>

<script setup>
import { DsButton } from 'ds-design'
</script>
```
