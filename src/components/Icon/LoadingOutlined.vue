<template>
  <svg
    t="1652254779532"
    class="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="6514"
    :width="size"
    :height="size"
  >
    <path
      d="M512 907c-24.852 0-45-20.148-45-45s20.148-45 45-45c168.446 0 305-136.554 305-305S680.446 207 512 207 207 343.554 207 512c0 24.852-20.148 45-45 45S117 536.852 117 512c0-218.152 176.848-395 395-395S907 293.848 907 512 730.152 907 512 907z"
      p-id="6515"
      :fill="color"
    ></path>
  </svg>
</template>

<script setup lang="ts">
import {} from 'vue'
interface Prop {
  size?: string,
  color?: string
}
const props = withDefaults(defineProps<Prop>(), {
  size: '30',
  color: '#333333'
})
</script>

<style scoped>
.icon {
  animation: myRotate 1s infinite linear;
}

@keyframes myRotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>