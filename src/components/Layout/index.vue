<template>
  <div class="ds-layout" v-if="type === '1'">
    <div class="ds-layout-sider">
      <slot name="sider"></slot>
    </div>
    <div class="ds-layout-main">
      <div class="ds-layout-header">
        <slot name="header"></slot>
      </div>
      <div class="ds-layout-content">
        <slot name="content"></slot>
      </div>
      <div class="ds-layout-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>

  <div class="ds-layout2" v-if="type === '2'">
    <div class="ds-layout-header">
      <slot name="header"></slot>
    </div>
    <div class="ds-layout-main">
      <div class="ds-layout-sider">
        <slot name="sider"></slot>
      </div>
      <div class="ds-layout-content">
        <slot name="content"></slot>
      </div>
    </div>
    <div class="ds-layout-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, watch } from 'vue'

interface Prop {
  type?: string
}
const props = withDefaults(defineProps<Prop>(), {
  type: '1'
})

const type = ref<string>(props.type)

watch(
  () => props.type,
  () => type.value = props.type
)

</script>

<style scoped lang='less'>
.ds-layout {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;

  .ds-layout-sider {
    width: 200px;
    height: 100%;
  }

  .ds-layout-main {
    width: calc(100% - 200px);
    height: 100%;
    display: flex;
    flex-direction: column;

    .ds-layout-header {
      width: 100%;
      height: 64px;
    }

    .ds-layout-content {
      width: 100%;
      height: calc(100% - 128px);
    }

    .ds-layout-footer {
      width: 100%;
      height: 64px;
    }
  }
}

.ds-layout2 {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .ds-layout-header {
    width: 100%;
    height: 64px;
  }

  .ds-layout-main {
    width: 100%;
    height: calc(100% - 128px);
    display: flex;
    flex-direction: row;

    .ds-layout-sider {
      width: 200px;
      height: 100%;
    }

    .ds-layout-content {
      width: calc(100% - 200px);
      height: 100%;
    }
  }

  .ds-layout-footer {
    width: 100%;
    height: 64px;
  }
}
</style>