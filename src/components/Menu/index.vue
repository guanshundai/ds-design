<template>
  <ul ref="menuRef" class="ds-menu">
    <slot></slot>
  </ul>
</template>

<script setup lang='ts'>
import { ref, onMounted, watch } from 'vue'

interface Prop {
  activeIndex?: number
}
const props = withDefaults(defineProps<Prop>(), {
  activeIndex: 0
})

const menuRef = ref()
const activeIndex = ref<number>(props.activeIndex)

watch(
  () => props.activeIndex,
  () => {
    activeIndex.value = props.activeIndex
    const childrens = Array(...menuRef.value.children)
    childrens[activeIndex.value].style.borderBottom = '2px solid #338eff'
    childrens[activeIndex.value].style.color = '#338eff'
    childrens.forEach((item, f) => {
      if (activeIndex.value !== f) {
        item.style.borderBottom = '2px solid #fff'
        item.style.color = '#333'
        if(item.children[0]) {
        const pathChild = Array(...item.children[0].children)
        pathChild.forEach((i: any) => {
          i.style.fill = '#333'
        })
      }
      }
    })
    if (childrens[activeIndex.value].children[0]) {
      const pathChild = Array(...childrens[activeIndex.value].children[0].children)
      pathChild.forEach((i: any) => {
        i.style.fill = '#338eff'
      })
    }
  }
)

onMounted(() => {
  const childrens = Array(...menuRef.value.children)
  childrens[activeIndex.value].style.borderBottom = '2px solid #338eff'
  childrens[activeIndex.value].style.color = '#338eff'
  childrens.forEach((item, f) => {
    if (activeIndex.value !== f) {
      item.style.borderBottom = '2px solid #fff'
      item.style.color = '#333'
    }
  })
  if (childrens[activeIndex.value].children[0]) {
    const pathChild = Array(...childrens[activeIndex.value].children[0].children)
    pathChild.forEach((i: any) => {
      i.style.fill = '#338eff'
    })
  }
})
</script>

<style scoped lang='less'>
.ds-menu {
  box-sizing: border-box;
  margin: 0;
  width: 100%;
  height: 46px;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 50px 1px 50px;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  list-style: none;
  background-color: #fff;
  list-style-position: inside;
}
</style>