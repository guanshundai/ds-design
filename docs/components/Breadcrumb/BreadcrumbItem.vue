<template>
  <dd class="ds-breadcrumb-item">
    <span style="margin-right: 10px">{{separator}}</span>
    <a :href="href"><slot>black hot drink</slot></a>
  </dd>
</template>

<script setup lang='ts'>
import {ref, watch} from 'vue'

interface Prop {
  separator?: string,
  href?: string,
  color?: string,
  activeColor?: string,
  hoverColor?: string,
}
const props = withDefaults(defineProps<Prop>(), {
  separator: '/',
  href: 'javascript:',
  color: '#333333',
  activeColor: '#338eff',
  hoverColor: '#338eff',
})

const color = ref<string>(props.color)
const activeColor = ref<string>(props.activeColor)
const hoverColor = ref<string>(props.hoverColor)

watch(
  () => props.color,
  () => color.value = props.color
)
watch(
  () => props.activeColor,
  () => activeColor.value = props.activeColor
)
watch(
  () => props.hoverColor,
  () => hoverColor.value = props.hoverColor
)
</script>

<style scoped lang='less'>
.ds-breadcrumb-item {
  display: inline-block;
  cursor: pointer;
  margin-inline-start: 10px;
}
.ds-breadcrumb-item a {
  text-decoration: none;
  color: v-bind(color);
}
.ds-breadcrumb-item a:hover {
  color: v-bind(hoverColor)
}
.ds-breadcrumb-item a:focus {
  color: v-bind(activeColor)
}
</style>