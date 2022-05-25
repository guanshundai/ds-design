<template>
  <hr class="ds-divider" v-if="!withText && !vertical" />

  <div
    ref="divRef"
    style="
      display: inline-flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: calc(100%);
    "
    v-if="withText && !vertical"
  >
    <hr class="ds-divider" style="display: inline-flex" :style="{width: hrWidth + 'px'}"/>
    <span ref="textRef" style="padding: 0 8px;white-space: nowrap"><slot>默认</slot></span>
    <hr class="ds-divider" style="display: inline-flex" :style="{width: hrWidth + 'px'}" />
  </div>

  <div class="divider-v" v-if="vertical" :style="{height: height}"></div>
</template>

<script setup lang='ts'>
import { ref, watch, onMounted, onUnmounted } from "vue";

interface Prop {
  color?: string;
  width?: string;
  withText?: boolean;
  vertical?: boolean;
  height?: string;
  type?: string
}
const props = withDefaults(defineProps<Prop>(), {
  color: "#33c0bb",
  width: "1px",
  withText: false,
  vertical: false,
  height: '80%',
  type: 'solid'
});

const textRef = ref()
const divRef = ref()

const color = ref<string>(props.color);
const width = ref<string>(props.width);
const type = ref<string>(props.type);
const hrWidth = ref<number>(0)

watch(
  () => props.color,
  () => (color.value = props.color)
);
watch(
  () => props.width,
  () => (width.value = props.width)
);
watch(
  () => props.type,
  () => (type.value = props.type)
);

onMounted(() => {
  if(props.withText) {
    getHrWidth()
    addEventListener('resize', getHrWidth)
  }
})

onUnmounted(() => {
  removeEventListener('resize', getHrWidth)
})

const getHrWidth = () => {
  hrWidth.value = (divRef.value.clientWidth - textRef.value.clientWidth - 16)/2
}
</script>

<style scoped lang='less'>
.ds-divider {
  border: v-bind(width) v-bind(color) v-bind(type);
}

.divider-v {
  padding: 0;
  margin: 0 6px;
  border-left: v-bind(width) v-bind(color) v-bind(type);
  // height: calc(80%);
  display: inline-block;
  vertical-align: middle;
}
</style>