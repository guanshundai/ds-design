<template>
  <div class="ds-collapse">
    <slot></slot>
  </div>
</template>

<script setup lang='ts'>
import { ref, watch } from 'vue'

interface Props {
  width?: string
}
const props = withDefaults(defineProps<Props>(), {
  width: '100%'
})
const width = ref<string>(props.width)

watch(
  () => props.width,
  () => width.value = props.width
)
</script>

<style scoped lang='less'>
.ds-collapse {
  width: v-bind(width);
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #dbdbdb;
}
</style>