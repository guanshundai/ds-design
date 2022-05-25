<template>
  <dl ref="ddRef" class="ds-breadcrumb">
    <slot>home</slot>
  </dl>
</template>

<script setup lang='ts'>
import {ref, onMounted, watch} from 'vue'

interface Prop {
  size?: string
}
const props = withDefaults(defineProps<Prop>(), {
  size: '16px'
})

const ddRef = ref()
const size = ref<string>(props.size)

watch(
  () => props.size,
  () => size.value = props.size
)

onMounted(() => {
  if(ddRef.value.children) {
    ddRef.value.children[0].firstChild.innerText = ''
  }
  // console.log(ddRef.value.children[0].firstChild.innerText);
})
</script>

<style scoped lang='less'>
.ds-breadcrumb {
  font-size: v-bind(size);
}
.ds-breadcrumb dd {
  display: inline-block;
  cursor: pointer;
  margin-inline-start: 10px;
}
.ds-breadcrumb dd a:hover {
  color: #338eff
}
</style>