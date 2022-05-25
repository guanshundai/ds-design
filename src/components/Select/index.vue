<template>
  <div
    :class="`ds-select select-s-${size}`"
    @mouseover="dropDownOver"
    @mouseleave="dropDownLeave"
  >
    <input
      :value="selectValue"
      :class="`select-input select-i-${size}`"
      type="text"
      readonly
      :placeholder="placeholder"
      @click="visible = !visible"
    />
    <svg
      t="1652235603744"
      class="select-icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="3562"
      :width="size === 'normal' ? '17' : size === 'small' ? '14' : '19'"
      :height="size === 'normal' ? '17' : size === 'small' ? '14' : '19'"
      v-if="closeVisible && !dropDownVisible"
      @click="
        selectValue = '';
        closeVisible = false;
        dropDownVisible = true;
      "
    >
      <path
        d="M511.333 127.333c51.868 0 102.15 10.144 149.451 30.15 45.719 19.337 86.792 47.034 122.078 82.321 35.287 35.286 62.983 76.359 82.321 122.078 20.006 47.3 30.15 97.583 30.15 149.451s-10.144 102.15-30.15 149.451c-19.337 45.719-47.034 86.792-82.321 122.078-35.286 35.287-76.359 62.983-122.078 82.321-47.3 20.006-97.583 30.15-149.451 30.15s-102.15-10.144-149.451-30.15c-45.719-19.337-86.792-47.034-122.078-82.321-35.287-35.286-62.983-76.359-82.321-122.078-20.006-47.3-30.15-97.583-30.15-149.451s10.144-102.15 30.15-149.451c19.337-45.719 47.034-86.792 82.321-122.078 35.286-35.287 76.359-62.983 122.078-82.321 47.301-20.006 97.583-30.15 149.451-30.15m0-64c-247.424 0-448 200.576-448 448s200.576 448 448 448 448-200.576 448-448-200.576-448-448-448z"
        fill="#8a8a8a"
        p-id="3563"
      ></path>
      <path
        d="M557.254 512l147.373-147.373c12.497-12.497 12.497-32.758 0-45.255-12.496-12.497-32.758-12.497-45.254 0L512 466.746 364.627 319.373c-12.497-12.497-32.758-12.497-45.255 0s-12.497 32.758 0 45.255L466.746 512 319.373 659.373c-12.497 12.496-12.497 32.758 0 45.254C325.621 710.876 333.811 714 342 714s16.379-3.124 22.627-9.373L512 557.254l147.373 147.373C665.621 710.876 673.811 714 682 714s16.379-3.124 22.627-9.373c12.497-12.496 12.497-32.758 0-45.254L557.254 512z"
        fill="#8a8a8a"
        p-id="3564"
      ></path>
    </svg>

    <svg
      t="1652169643316"
      class="select-icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2452"
      :width="size === 'normal' ? '17' : size === 'small' ? '14' : '19'"
      :height="size === 'normal' ? '17' : size === 'small' ? '14' : '19'"
      @click="visible = !visible"
      v-if="dropDownVisible"
    >
      <path
        d="M65.409221 340.948229c42.307571-35.385928 65.340147-52.599985 106.850563-88.881306 145.652288 142.907781 145.652288 142.907781 339.739704 331.683215 120.79925-111.760386 223.503377-215.061101 339.745844-322.608535 35.456536 31.605835 69.40472 61.860906 106.844423 95.232968-150.207024 139.312906-298.090119 276.471752-448.054619 415.557484-10.259668-9.280364-19.784602-17.652032-29.03529-26.319435L65.409221 340.948229z"
        p-id="2453"
        fill="#8a8a8a"
      ></path>
    </svg>

    <div :class="`select-option select-o-${size}`" v-if="visible" @mouseleave="visible=false">
      <span
        v-for="(i, index) in options"
        class="select-item"
        :class="i.value == selectValue ? 'bg-color' : ''"
        :key="index"
        @click="itemSelect(i.value, i.label)"
        >{{ i.value }}</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

interface Prop {
  modelValue?: string;
  name?: string;
  id?: string;
  options?: any[];
  size?: string;
  clearable?: boolean;
  placeholder?: string;
}

const props = withDefaults(defineProps<Prop>(), {
  modelValue: "",
  options: () => [
    { label: "选项1", value: "选项1" },
    { label: "选项2", value: "选项2" },
  ],
  size: "normal",
  clearable: false,
  placeholder: "请选择",
  name: "select",
  id: "ds-select",
});

const emits = defineEmits(["select", "update:modelValue"]);

const options = ref<any[]>(props.options);
const selectValue = ref<string>(props.modelValue);
const visible = ref<boolean>(false);
const closeVisible = ref<boolean>(props.clearable);
const dropDownVisible = ref<boolean>(true);

watch(
  () => props.options,
  () => (options.value = props.options)
);
watch(
  () => props.modelValue,
  () => (selectValue.value = props.modelValue)
);
watch(
  () => props.clearable,
  () => (closeVisible.value = props.clearable)
);

const itemSelect = (value: string, label: string | number) => {
  visible.value = false;
  selectValue.value = value;
  emits("update:modelValue", value);
  emits("select", value, label);
};

const dropDownOver = () => {
  if (selectValue.value) {
    closeVisible.value = true;
    dropDownVisible.value = false;
  }
};

const dropDownLeave = () => {
  closeVisible.value = false;
  dropDownVisible.value = true;
};
</script>

<style scoped lang="less">
.ds-select {
  padding: 7px 18px;
  outline-color: #338eff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  font-size: 15px;
  color: #000000d9;
  display: inline-flex;
  justify-content: center;
  position: relative;
}

.ds-select:hover {
  border: 1px #338eff solid;
}

.select-input {
  width: calc(100%);
  border: none;
  outline-color: #fff;
  font-size: 15px;
}

.select-icon {
  margin-top: 2px;
  cursor: pointer;
}

.select-option {
  position: absolute;
  top: 36px;
  width: calc(100%);
  max-height: 245px;
  overflow-y: auto;
  box-shadow: 0px 5px 8px 2px #48474743;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 8px 0;
  background-color: #fff;
  z-index: 100;
}
.select-item {
  display: inline-block;
  width: 100%;
  text-align: left;
  padding: 5px 10px;
}
.select-item:hover {
  background-color: #bfbfbf7b;
  color: #000000d9;
}
.select-item:active {
  background-color: #8cc8ff;
}

.bg-color {
  background-color: #e6f7ff;
}

//size
.select-s-normal {
  padding: 7px 18px;
}
.select-i-normal {
  font-size: 15px;
}
.select-s-small {
  padding: 2.75px 6px;
  font-size: 13px;
}
.select-i-small {
  font-size: 13px;
}
.select-s-large {
  padding: 8.75px 20px;
  font-size: 20px;
}
.select-i-large {
  font-size: 20px;
}
.select-o-small {
  top: 27px;
}
.select-o-normal {
  top: 36px;
}
.select-o-large {
  top: 45px;
}
</style>