<template>
  <div class="ds-message-div" v-show="visible">
    <div class="ds-message">
      <svg t="1652837740889" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="1987" width="20" height="20" v-if="type === 'success'">
        <path
          d="M512 85.333333c235.637333 0 426.666667 191.029333 426.666667 426.666667S747.637333 938.666667 512 938.666667 85.333333 747.637333 85.333333 512 276.362667 85.333333 512 85.333333z m182.613333 297.354667a32 32 0 0 0-45.258666 0.032L458.922667 573.44l-84.341334-83.989333a32 32 0 0 0-45.162666 45.344l106.986666 106.549333a32 32 0 0 0 45.226667-0.064l213.013333-213.333333a32 32 0 0 0-0.032-45.258667z"
          p-id="1988" fill="#23b21c"></path>
      </svg>
      <svg t="1652838992291" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="3227" width="20" height="20" v-if="type === 'error'">
        <path
          d="M512 85.333333c235.637333 0 426.666667 191.029333 426.666667 426.666667S747.637333 938.666667 512 938.666667 85.333333 747.637333 85.333333 512 276.362667 85.333333 512 85.333333z m-86.474667 296.96a30.570667 30.570667 0 1 0-43.232 43.232L468.768 512l-86.474667 86.474667a30.570667 30.570667 0 1 0 43.232 43.232L512 555.232l86.474667 86.474667a30.570667 30.570667 0 1 0 43.232-43.232L555.232 512l86.474667-86.474667a30.570667 30.570667 0 1 0-43.232-43.232L512 468.768z"
          p-id="3228" fill="#d81e06"></path>
      </svg>
      <svg t="1652839079549" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="4202" width="20" height="20" v-if="type === 'warning'">
        <path
          d="M512 992C246.912 992 32 777.088 32 512 32 246.912 246.912 32 512 32c265.088 0 480 214.912 480 480 0 265.088-214.912 480-480 480zM480 256v352a32 32 0 0 0 64 0V256a32 32 0 0 0-64 0z m-16 528a48 48 0 1 0 96 0 48 48 0 0 0-96 0z"
          p-id="4203" fill="#e8b66c"></path>
      </svg>

      <span class="text">{{ msg }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";

interface Prop {
  type: string,
  msg: string,
  time: number,
  visible: boolean
}
const props = withDefaults(defineProps<Prop>(), {
  type: 'success',
  msg: 'message',
  time: 1000,
  visible: false
})

const visible = ref(props.visible);

watch(
  () => props.visible,
  () => visible.value = props.visible
)

</script>

<style scoped lang="less">
//	css样式部分可以根据需求自定义
.ds-message-div {
  position: fixed;
  top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 30%;
  z-index: 999;
}

.ds-message {
  display: inline-flex;
  overflow: auto;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  height: auto;
  margin: 0 auto;
  padding: 8px 12px;
  box-shadow: 0 0 12px 2px #d9d9d9;
  background-color: #fff;
  color: "black";
  font-size: 14px;
  background-color: "#fff";
  border-radius: 4px;
  //	以下是过渡动画，如不需要可删去亦可改进
  animation: move 0.2s linear forwards;

  .icon {
    margin-right: 6px
  }

  @keyframes move {
    0% {
      transform: translate3d(0, -75px, 0);
      opacity: 0.16;
    }

    50% {
      opacity: 0.68;
    }

    100% {
      transform: none;
      opacity: 1;
    }
  }
}
</style>
