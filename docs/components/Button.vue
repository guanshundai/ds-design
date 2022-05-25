<template>
  <button
    :class="`ds-btn t-${type ? type : 'default'} s-${size ? size : 'normal'}`"
    :loading="loading"
    :style="{ opacity: loading ? '0.7' : '1'}"
  >
    <div class="flex-r-c">
      <svg
        t="1652083399997"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2947"
        :width="size === 'large' ? '20' : size === 'small' ? '13' : '15'"
        :height="size === 'large' ? '20' : size === 'small' ? '13' : '15'"
        v-if="loading"
      >
        <path
          d="M523.39815 1023.534769a511.75366 511.75366 0 1 1 396.376471-837.41508 519.662581 519.662581 0 0 1 46.52306 67.458437 46.52306 46.52306 0 1 1-80.484894 46.52306A418.70754 418.70754 0 1 0 197.736729 776.497321a418.70754 418.70754 0 0 0 576.420714 70.24982 46.52306 46.52306 0 1 1 55.827672 74.436896A511.75366 511.75366 0 0 1 523.39815 1023.534769z"
          :fill="type === 'normal' ? 'black' : '#ffffff95'"
          p-id="2948"
        ></path>
        <path
          d="M772.761752 290.331343l201.444849-164.691632a23.26153 23.26153 0 0 1 37.683679 20.470146l-18.609224 182.835626a23.26153 23.26153 0 0 1-25.587683 20.935377l-182.835626-18.609224a23.26153 23.26153 0 0 1-12.095995-40.940293z"
          :fill="type === 'normal' ? 'black' : '#ffffff95'"
          p-id="2949"
        ></path>
      </svg>
      <slot>按钮</slot>
    </div>
  </button>
</template>

<script setup lang="ts">
import { emit } from "process";
import { ref, onMounted } from "vue";

interface Props {
  type?: string;
  size?: string;
  loading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: "default",
  size: "normal",
  loading: false,
});

onMounted(() => {});
</script>

<style lang="less" scoped>
// .flex-r-c {
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
// }
.ds-btn {
  border: none;
  box-shadow: 0 2px #0000000b;
  border-radius: 3px;
  padding: 7px 16px;
  font-size: 15px;
}
.ds-btn:hover {
  opacity: 0.8;
}
.ds-btn:active {
  opacity: 1;
  box-shadow: 0 0 3px 3px #096dd920;
}

.icon {
  animation: myRotate 1s infinite linear;
  margin-right: 4px;
}
@keyframes myRotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

//type
.t-default {
  background-color: #338eff;
  color: #fff;
}
.t-normal {
  background-color: #fff;
  color: black;
  border: 1px solid #d9d9d9;
}
.t-normal:hover {
  border: 1px solid #338eff;
  color: #096dd9;
}

.t-danger {
  background-color: #f56c6c;
  color: #fff;
}

//size
.s-large {
  padding: 10px 20px;
  font-size: 17px;
}
.s-normal {
  padding: 7px 16px;
  font-size: 15px;
}
.s-small {
  padding: 6px 12px;
  font-size: 12px;
}
</style>