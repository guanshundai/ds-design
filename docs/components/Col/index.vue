<template>
  <div class="ds-col" :style="dsColStyle">
    <slot></slot>
  </div>
</template>

<script setup lang='ts'>
import {ref, HTMLAttributes, watch} from 'vue'

interface Prop {
  span?: number
}
const props = withDefaults(defineProps<Prop>(), {
  span: 12
})

const dsColStyle = ref<HTMLAttributes["style"]>({gridColumnStart: `span ${props.span}`})

watch(
  () => props.span,
  () => dsColStyle.value = {gridColumnStart: `span ${props.span}`}
)
</script>

<style scoped lang='less'>
</style>