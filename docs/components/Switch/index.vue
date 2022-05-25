<template>
  <button
    class="ds-switch"
    :class="checked ? 'ds-switch-checked' : ''"
    @click="switchHandel"
    :style="{
      'background-color': checked ? '#338eff' : '#00000040',
      transform:
        size === 'small'
          ? 'scale(.7, .7)'
          : size === 'large'
          ? 'scale(1.3, 1.3)'
          : 'scale(1, 1)',
    }"
  >
    <div class="ds-switch-hendel"></div>
    <span
      class="ds-switch-text"
      :class="checked ? 'ds-switch-text-checked' : 'ds-switch-text-unchecked'"
      v-if="checkedText && uncheckedText"
      >{{ checked ? checkedText : uncheckedText }}</span
    >
  </button>
</template>

<script setup lang='ts'>
import { ref } from "vue";

interface Prop {
  checkedText?: string;
  uncheckedText?: string;
  size?: string;
}
const props = withDefaults(defineProps<Prop>(), {
  checkedText: "",
  uncheckedText: "",
  size: "normal",
});

const emits = defineEmits(["switch"]);

const checked = ref<boolean>(false);

const switchHandel = () => {
  checked.value = !checked.value;
  emits("switch", checked.value);
  // console.log(checked.value);
};
</script>

<style scoped lang='less'>
@default-color: color('#338eff');
.ds-switch {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  min-width: 44px;
  height: 22px;
  line-height: 22px;
  border-radius: 100px;
  font-size: 14px;
  vertical-align: middle;
  border: 0;
  cursor: pointer;
  box-shadow: 0 0 0 2px #00000020;
  overflow: hidden;

  &:hover {
    box-shadow: none;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(circle, #fff 10%, transparent 10.1%);
    transform: scale(10);
    opacity: 0;
    transition: all 0.6s;
  }
  &:active::after {
    transform: scale(0);
    opacity: 0.7;
    transition: 0s;
  }
}

.ds-switch-hendel {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: #fff;
  transition: all 0.2s ease-in-out;
}

.ds-switch-checked .ds-switch-hendel {
  left: calc(100% - 20px);
}
.ds-switch-checked {
  box-shadow: 0 0 0 2px fade(@default-color, 70%);
}

.ds-switch-text {
  color: #fff;
  font-size: 12px;
  position: absolute;
  font-weight: 600;
}
.ds-switch-text-checked {
  &:extend(.ds-switch-text);
  left: 7px;
}
.ds-switch-text-unchecked {
  &:extend(.ds-switch-text);
  right: 7px;
}
</style>