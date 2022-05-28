<template>
  <div class="ds-table">
    <table rules="rows" frame="box" cellpadding="10px" width="100%">
      <thead>
        <tr>
          <th v-for="i in columns" :key="i.dataIndex" :align="i.align ? i.align : 'left'" @click="handleSort(i)"
            @mousemove="sortMove(i)" @mouseleave="sortLeave(i)">
            {{ i.title }}

            <svg t="1653643754748" class="icon1" viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="2147" width="13" height="13" v-if="i.sort && sortable">
              <path
                d="M573.056 272l308.8 404.608A76.8 76.8 0 0 1 820.736 800H203.232a76.8 76.8 0 0 1-61.056-123.392L450.976 272a76.8 76.8 0 0 1 122.08 0z"
                p-id="2148" :fill="i.fill1 ? i.fill1 : '#bfbfbf'"></path>
            </svg>
            <svg t="1653643914874" class="icon2" viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="3039" width="13" height="13" v-if="i.sort && sortable">
              <path
                d="M573.056 752l308.8-404.608A76.8 76.8 0 0 0 820.736 224H203.232a76.8 76.8 0 0 0-61.056 123.392L450.976 752a76.8 76.8 0 0 0 122.08 0z"
                p-id="3040" :fill="i.fill2 ? i.fill2 : '#bfbfbf'"></path>
            </svg>

            <div class="hover-box" v-if="i.sort && i.visible">
              {{ i.hoverText ? i.hoverText : '点击降序' }}
            </div>
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
import { ref, watch, onUnmounted } from 'vue'

interface Prop {
  columns?: any[],
  dataSource?: any[],
  width?: string,
  sortable?: boolean
}
const props = withDefaults(defineProps<Prop>(), {
  columns: <any>[],
  dataSource: <any>[],
  width: '100%',
  sortable: false
})

const columns = ref<any>(props.columns)
const dataSource = ref<any>(props.dataSource)
const width = ref<string>(props.width)

const arr = JSON.stringify(dataSource.value)

onUnmounted(() => {
  dataSource.value = JSON.parse(arr)
})

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

const handleSort = (i: any) => {
  if(!props.sortable) return
  if (!i.sort) return
  // console.log(i.count, arr);
  if (!i.count) {
    dataSource.value = dataSource.value.sort(i.sort)
    i.count = 1
    i.fill1 = '#338eff'
    i.fill2 = '#bfbfbf'
    i.hoverText = '点击升序'
    return
  }
  if (i.count == 1) {
    dataSource.value = dataSource.value.sort(i.sort).reverse()
    i.count = 2
    i.fill2 = '#338eff'
    i.fill1 = '#bfbfbf'
    i.hoverText = '取消排序'
    return
  }
  if (i.count == 2) {
    dataSource.value = JSON.parse(arr)
    delete i.count
    i.fill1 = '#bfbfbf'
    i.fill2 = '#bfbfbf'
    i.hoverText = '点击降序'
    return
  }
}

const sortMove = (i: any) => {
  if(!props.sortable) return
  i.visible = true
}
const sortLeave = (i: any) => {
  if(!props.sortable) return
  delete i.visible
}
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

        // &:nth-child(2n) {
        //   background-color: #fff;
        // }
        &:hover {
          background-color: #eeeeee64;
        }
      }
    }

    thead {
      th {
        position: relative;
        background-color: #fafafa;

        .icon1 {
          position: absolute;
          top: 7.5px;
          right: 10px
        }

        .icon2 {
          position: absolute;
          bottom: 7.5px;
          right: 10px
        }

        .hover-box {
          width: 100px;
          height: 40px;
          border-radius: 5px;
          position: absolute;
          top: -30px;
          background-color: #333;
          opacity: .95;
          left: calc(50% - 50px);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          color: #fff;
        }

        &:hover {
          background-color: #f0f0f0;
          cursor: pointer;
        }
      }
    }
  }
}
</style>