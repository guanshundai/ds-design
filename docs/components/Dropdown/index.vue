<template>
  <a class="ds-dropdown" @mouseover="showList" @mouseleave="unshowlist">
    <slot>Hover Me</slot>
    <svg t="1652929865641" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
      p-id="1976" width="16" height="16">
      <path
        d="M512.726547 675.318646c-8.063653 0-15.790638-3.245927-21.435195-9.006118L231.175103 400.906809c-11.603269-11.837606-11.410887-30.840402 0.427742-42.442648 11.837606-11.601222 30.841426-11.410887 42.442648 0.427742l238.681054 243.534596L751.407602 358.891903c11.601222-11.839653 30.602995-12.033058 42.442648-0.427742 11.839653 11.603269 12.031011 30.605042 0.427742 42.442648L534.161742 666.312528C528.517185 672.072719 520.791224 675.318646 512.726547 675.318646z"
        p-id="1977" :fill="color"></path>
    </svg>

    <div class="ds-dropdown-list" v-if="visible">
      <template v-for="(i, index) in options" :key="index">
        <a :href="i.link ? i.link : 'javascript:;'">&nbsp;&nbsp;&nbsp;&nbsp;{{i.text}}</a>
      </template>
    </div>
  </a>
</template>

<script setup lang='ts'>
import { ref, watch } from 'vue'

interface Option {
  link?: string,
  text?: string
}

interface Prop {
  color?: string,
  options?: any
}
const props = withDefaults(defineProps<Prop>(), {
  color: '#333',
  options: [
    {
      link: '',
      text: ''
    },
  ]
})

const color = ref<string>(props.color)
const options = ref<any>(props.options)

watch(
  () => props.color,
  () => color.value = props.color
)
watch(
  () => props.options,
  () => options.value = props.options
)

const visible = ref<boolean>(false)

const showList = () => {
  visible.value = true
}
const unshowlist = () => {
  visible.value = false
}

</script>

<style scoped lang='less'>
.ds-dropdown {
  display: inline-flex;
  font-size: 14px;
  text-decoration: none;
  position: relative;
  color: v-bind(color);
  flex-direction: row;
  align-items: center;
  padding: 5px 0;
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }

  .icon {
    margin-left: 5px;
  }

  .ds-dropdown-list {
    position: absolute;
    top: calc(100%);
    width: calc(120%);
    height: auto;
    padding: 5px 0;
    background-color: #fff;
    box-shadow: 0 2px 12px 2px #ccc;
    z-index: 999;
    display: flex;
    flex-direction: column;

    a {
      width: 100%;
      margin: 3px 0;
      padding: 5px 0;
      font-size: 14px;
      text-decoration: none;
      color: #333;
      text-align: left;

      &:hover {
        background-color: #338eff20;
      }
    }
  }
}
</style>