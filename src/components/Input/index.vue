<template>
  <div style="display: inline-flex;position: relative;align-items: center;">
    <input
      v-model="value"
      :class="`ds-input input-s-${size ? size : 'normal'}`"
      :type="type ? type : 'text'"
      :placeholder="placeholder"
      @input="search(value)"
      ref="inpRef"
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
      v-if="value !== ''"
      @click="value=''"
      style="z-index: 100;background-color: #fff;"
      :style="{right: size === 'small' && withSearch ? '50px' : size === 'normal' && withSearch ? '60px' : size === 'large' && withSearch ? '70px' : '14px'}"
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
    <button
      :class="`ds-btn s-${size ? size : 'normal'}`"
      @click="handleSearch(value)"
      v-if="withSearch"
    >
      <svg
        t="1652149456835"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1990"
        width="20"
        height="20"
      >
        <path
          d="M469.333333 768c-166.4 0-298.666667-132.266667-298.666666-298.666667s132.266667-298.666667 298.666666-298.666666 298.666667 132.266667 298.666667 298.666666-132.266667 298.666667-298.666667 298.666667z m0-85.333333c119.466667 0 213.333333-93.866667 213.333334-213.333334s-93.866667-213.333333-213.333334-213.333333-213.333333 93.866667-213.333333 213.333333 93.866667 213.333333 213.333333 213.333334z m251.733334 0l119.466666 119.466666-59.733333 59.733334-119.466667-119.466667 59.733334-59.733333z"
          fill="#ffffff"
          p-id="1991"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";

interface Prop {
  modelValue?: string;
  type?: string;
  size?: string;
  placeholder?: string;
  withSearch?: boolean;
}

const props = withDefaults(defineProps<Prop>(), {
  type: "text",
  size: "normal",
  placeholder: "请输入...",
  withSearch: false,
  modelValue: "",
});

const emit = defineEmits(["input", "search", "update:modelValue"]);

/**（1）子组件也并不是直接拿 props 传的变量直接用，而是需要声明一个响应式变量 - 通过 ref(props.modelValue) 声明基于 props 传的变量值为初始化值的响应式数据。

（2）且如果父组件传的是异步数据的话，还需要对其进行监听。

（3）当子组件数据改变时需要通过 emit('update:modelValue', e) 去修改父组件数据实现双向绑定。
**/

const value = ref(props.modelValue);
const inpRef = ref();

onMounted(() => {
  // console.log(props.withSearch);
});

watch(
  () => props.modelValue,
  () => (value.value = props.modelValue)
);

const vFocus = {
  mounted(el: any) {
    el.focus();
  },
};

const search = (value: string) => {
  emit("update:modelValue", value);
  emit("input", value);
};

const handleSearch = (value: string) => {
  inpRef.value.focus();
  emit("update:modelValue", value);
  emit("search", value);
};
</script>

<style scoped lang="less">
//default
.ds-input {
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  outline-color: #338eff;
  color: #3f3e3e;
}

.select-icon {
  position: absolute;
  right: 14px;
}

//size
.input-s-normal {
  padding: 8px 16px;
  font-size: 15px;
}
.input-s-small {
  padding: 6.25px 12px;
  font-size: 12px;
}
.input-s-large {
  padding: 11.25px 20px;
  font-size: 17px;
}

//search
.ds-btn {
  border: none;
  box-shadow: 0 2px #0000000b;
  border-radius: 3px;
  background-color: #338eff;
  color: #fff;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  margin-left: -3px;
}
.ds-btn:hover {
  opacity: 0.8;
}
.ds-btn:active {
  opacity: 1;
  box-shadow: 0 0 3px 3px #096dd920;
}

//size
.s-large {
  padding: 10px 20px;
  font-size: 17px;
}
.s-normal {
  padding: 5.75px 16px;
  font-size: 15px;
}
.s-small {
  padding: 3px 12px;
  font-size: 12px;
}
</style>