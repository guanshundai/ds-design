<template>
  <div class="ds-radio" v-for="(item, index) in option" :key="index">
    <input v-model="value" type="radio" :name="name" :id="item.value" :value="item.value"
      @input="handelInput" @change="handelChange">
    <label :for="item.value">
      <slot>{{ item.value }}</slot>
    </label>
  </div>
</template>

<script setup lang='ts'>
import { ref, watch } from 'vue'

interface Prop {
  option: any,
  name: string,
  checkedColor?: string,
  modelValue?: string
}
const props = withDefaults(defineProps<Prop>(), {
  option: [{
    lable: '',
    value: ''
  }],
  name: 'radio',
  checkedColor: '#338eff',
  modelValue: ''
})

const emits = defineEmits(['update:modelValue', 'change'])

const value = ref<string>(props.modelValue)

watch(
  () => props.modelValue,
  () => value.value = props.modelValue
)

const handelInput = (e: any) => {
  emits('update:modelValue')
  // console.log(e);
}
const handelChange = (e: any) => {
  emits('change', value.value)
  // console.log(e);
}
</script>

<style scoped lang='less'>
.ds-radio {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  padding: 0 8px;

  input {
    padding: 0;
    margin: 0;
    width: 16px;
    height: 16px;
    cursor: pointer;
    accent-color: v-bind(checkedColor);
  }

  label {
    margin-left: 7px;
    cursor: pointer;
  }
}
</style>