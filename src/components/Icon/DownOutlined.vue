<template>
  <svg
    t="1652169643316"
    class="select-icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="2452"
    :width="size"
    :height="size"
  >
    <path
      d="M65.409221 340.948229c42.307571-35.385928 65.340147-52.599985 106.850563-88.881306 145.652288 142.907781 145.652288 142.907781 339.739704 331.683215 120.79925-111.760386 223.503377-215.061101 339.745844-322.608535 35.456536 31.605835 69.40472 61.860906 106.844423 95.232968-150.207024 139.312906-298.090119 276.471752-448.054619 415.557484-10.259668-9.280364-19.784602-17.652032-29.03529-26.319435L65.409221 340.948229z"
      p-id="2453"
      :fill="color"
    ></path>
  </svg>
</template>

<script setup lang="ts">
import {} from "vue";

interface Prop {
  size?: string,
  color?: string
}
const props = withDefaults(defineProps<Prop>(), {
  size: '30',
  color: '#333333'
})
</script>

<style scoped lang="less">
</style>