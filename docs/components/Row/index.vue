<template>
  <div class="ds-row" :style="dsRowStyle">
    <slot></slot>
  </div>
</template>

<script setup lang='ts'>
import {ref, onMounted, HTMLAttributes, watch} from 'vue'

interface Prop {
  row?: number,
  gap? : string
}
const props = withDefaults(defineProps<Prop>(), {
  row: 12,
  gap: '0px'
})

const gap = ref<string>(props.gap)

const dsRowStyle = ref<HTMLAttributes["style"]>({gridTemplateColumns: `repeat(${props.row}, 1fr)`})

watch(
  () => props.gap,
  () => gap.value = props.gap
)
watch(
  () => props.row,
  () => dsRowStyle.value = {gridTemplateColumns: `repeat(${props.row}, 1fr)`}
)

onMounted(() => {
})

</script>

<style scoped lang='less'>
  .ds-row {
    display: grid;
    gap: v-bind(gap);
  }
</style>