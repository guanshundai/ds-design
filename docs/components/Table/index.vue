<template>
  <div class="ds-table">
    <table rules="rows" frame="box" cellpadding="10px" width="100%">
      <thead>
        <tr>
          <th v-for="i in columns" :key="i.dataIndex" :align="i.align ? i.align : 'left'">
            {{ i.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in dataSource" :key="item.key">
          <td v-for="i in columns" :key="i.dataIndex" :align="i.align ? i.align : 'left'">
            {{ item[i.dataIndex] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang='ts'>
import { ref, watch } from 'vue'

interface Prop {
  columns?: any[],
  dataSource?: any[],
  width?: string
}
const props = withDefaults(defineProps<Prop>(), {
  columns: <any>[],
  dataSource: <any>[],
  width: '100%'
})

const columns = ref<any>(props.columns)
const dataSource = ref<any>(props.dataSource)
const width = ref<string>(props.width)

watch(
  () => props.columns,
  () => columns.value = props.columns
)
watch(
  () => props.dataSource,
  () => dataSource.value = props.dataSource
)
watch(
  () => props.width,
  () => width.value = props.width
)

</script>

<style scoped lang='less'>
.ds-table {
  width: v-bind(width);
  display: inline-block;
  color: #333;

  table {
    display: table;
    border-spacing: 0;
    text-align: left;
    border: 1px solid #f0f0f0;
    font-size: 14px;

    tbody {

      tr {
        
        &:nth-child(2n) {
          background-color: #fff;
        }

        &:hover {
          background-color: #eeeeee64;
        }
      }

    }
  }

  th {
    background-color: #edededba;
  }
}
</style>