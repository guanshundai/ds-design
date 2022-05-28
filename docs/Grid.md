## 删格布局

**示例**

<ds-row gap='10px 5px' :row='12'>
  <ds-col class='flex-r-c' :span='6' style='background-color: #0092ffbf;color: #fff;padding: 10px 0'>span 6</ds-col>
  <ds-col class='flex-r-c' :span='6' style='background-color: #0092ff;color: #fff'>span 6</ds-col>
  <ds-col class='flex-r-c' :span='6' style='background-color: #0092ffbf;color: #fff;padding: 10px 0'>span 6</ds-col>
  <ds-col class='flex-r-c' :span='3' style='background-color: #0092ff;color: #fff'>span 3</ds-col>
  <ds-col class='flex-r-c' :span='3' style='background-color: #0092ffbf;color: #fff'>span 3</ds-col>
  <ds-col class='flex-r-c' :span='12' style='background-color: #0092ff;color: #fff;padding: 10px 0'>span 12</ds-col>
</ds-row>

**代码**

```html

<ds-row gap='10px 5px' :row='12'>
  <ds-col :span='6'>span 6</ds-col>
  <ds-col :span='6'>span 6</ds-col>
  <ds-col :span='6'>span 6</ds-col>
  <ds-col :span='3'>span 3</ds-col>
  <ds-col :span='3'>span 3</ds-col>
  <ds-col :span='12'>span 12</ds-col>
</ds-row>

```

## API

**Row**
| 属性           | 说明           | 类型  | 默认值  |
| ------------- |:-------------:| -----:| -----: |
| gap           | 栅格间隔 [垂直间距,水平间距] | string | 0 |
| row           | 每行分成几份    | number | 12  |

**Col**
| 属性           | 说明           | 类型  | 默认值  |
| ------------- |:-------------:| -----:| -----: |
| span           | 栅格占位格数 | number | 12 |


<script setup>
  import DsRow from './components/Row/index.vue'
  import DsCol from './components/Col/index.vue'
</script>