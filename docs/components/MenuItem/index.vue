<template>
  <li class="ds-menu-item" :class="activeClass" @click="handleClick">
    <slot name="icon"></slot>&nbsp;
    <slot>Menu</slot>&nbsp;
  </li>
</template>

<script setup lang='ts'>
import { ref } from 'vue'

const activeClass = ref('')

const handleClick = (e: any) => {
  if(e.target.localName == 'svg') return
  if(!e.target.parentNode.children) return
  const parentNode = Array(...e.target.parentNode.children)
  const index = parentNode.indexOf(e.target)
  parentNode[index].style.borderBottom = '2px solid #338eff'
  parentNode[index].style.color = '#338eff'
  parentNode.forEach((item, f) => {
    if(f !== index) {
      item.style.borderBottom = '2px solid #fff'
      item.style.color = '#333'
      if(item.children[0]) {
        const pathChild = Array(...item.children[0].children)
        pathChild.forEach((i: any) => {
          i.style.fill = '#333'
        })
      }
    }else {
      if(item.children[0]) {
        const pathChild = Array(...item.children[0].children)
        pathChild.forEach((i: any) => {
          i.style.fill = '#338eff'
        })
      }
    }
  })
  // console.log(e.target.parentNode.children[index].style);
  // console.log(Array(...e.target.parentNode.children).indexOf(e.target));
}
</script>

<style scoped lang='less'>
.ds-menu-item {
  display: inline-flex;
  align-items: center;
  padding: 0 10px;
  margin: 0 10px;
  height: 100%;
  font-weight: 600;
  background-color: #fff;
  cursor: pointer;
  border-bottom: 2px solid #fff;

  // &:hover {
  //   border-bottom: 2px solid #338eff;
  //   color: #338eff;
  // }
}

.active {
  border-bottom: 2px solid #338eff;
  color: #338eff;
}
</style>