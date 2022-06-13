<template>
  <ds-button type="default" size="normal" :loading="loading" @click="btnClick"></ds-button>
  &nbsp;
  <ds-input v-model="value" size="normal" placeholder="输入名字" @search="getValue" withSearch></ds-input>
  <br /><br />

  <ds-select v-model="selectValue" @select="select" :options="options" size="normal" clearable></ds-select>
  <br /><br />

  <CloseCircleOutlined />
  <CloseOutlined />
  <DownOutlined />
  <SearchOutlined />
  <SettingOutlined />
  <LoadingOutlined />
  <br /><br />

  <span>嘿嘿</span>
  <ds-divider vertical height="16px" width="1px" type="dashed"></ds-divider>
  <span>哈哈</span>
  <br /><br />

  <ds-breadcrumb size="14px">
    <ds-breadcrumb-item href="http://localhost:3000/#/test">嘿嘿嘿</ds-breadcrumb-item>
    <ds-breadcrumb-item activeColor="green" color="red">嘿嘿嘿</ds-breadcrumb-item>
    <ds-breadcrumb-item>嘿嘿嘿</ds-breadcrumb-item>
    <ds-breadcrumb-item>嘿嘿嘿</ds-breadcrumb-item>
  </ds-breadcrumb>
  <br /><br />

  <ds-switch @switch="switchHadel" checkedText="开" uncheckedText="关" size="small" />
  <ds-switch @switch="switchHadel" checkedText="开" uncheckedText="关" size="normal" />
  <ds-switch @switch="switchHadel" checkedText="开" uncheckedText="关" size="large" style="margin-left: 15px" />
  <br /><br />

  <ds-button @click="showMessage">message</ds-button> <br><br>

  <ds-row gap="5px 20px" :row="12" class="ds-row">
    <ds-col :span="6">aaa</ds-col>
    <ds-col :span="6">aaa</ds-col>
    <ds-col>aaa</ds-col>
  </ds-row>
  <br><br>

  <ds-dropdown color="#338eff" :options="options2"></ds-dropdown>
  <br><br>

  <ds-menu :activeIndex="0">
    <ds-menu-item>
      <template #icon>
        <SettingOutlined size="16" />
      </template>
      Home
    </ds-menu-item>
    <ds-menu-item>
      <template #icon>
        <SettingOutlined size="16" />
      </template>
      Propducts
    </ds-menu-item>
    <ds-menu-item>History</ds-menu-item>
    <ds-menu-item>Message Info</ds-menu-item>
    <ds-menu-item>About Us</ds-menu-item>
  </ds-menu>
  <br><br>

  <ds-radio v-model="radioValue" :option="radioOption" name="sex" checkedColor="red" @change="getRadioValue"></ds-radio>
  <br><br>

  <ds-carousel :time="3000" :images="images" :dots="false" width="100%" height="100%"
    style="width: 500px;height: 260px" /> <br>
  <ds-carousel :time="2000" :images="images2" autoplay width="100%" />
  <br><br>

  <ds-collapse>
    <ds-collapse-panel>content1</ds-collapse-panel>
    <ds-collapse-panel>content2</ds-collapse-panel>
  </ds-collapse>
  <br><br>

  <ds-table :columns="columns" :dataSource="dataSource" sortable></ds-table>
  <br><br>

  <div style="width: 100%;height: 300px;">
    <ds-layout type="1">
      <template #sider>
        <div style="width: 100%;height: 100%;background-color:  #0092ff;"></div>
      </template>
      <template #header>
        <div style="width: 100%;height: 100%;background-color:  #0092ffbf;"></div>
      </template>
      <template #content>
        <div style="width: 100%;height: 100%;background-color:  #0092ff90;"></div>
      </template>
      <template #footer>
        <div style="width: 100%;height: 100%;background-color:  #0092ffbf;"></div>
      </template>
    </ds-layout>
  </div>

  <div style="width: 100%;height: 300px;margin-top: 20px">
    <ds-layout type="2">
      <template #sider>
        <div style="width: 100%;height: 100%;background-color:  #0092ff;"></div>
      </template>
      <template #header>
        <div style="width: 100%;height: 100%;background-color:  #0092ffbf;"></div>
      </template>
      <template #content>
        <div style="width: 100%;height: 100%;background-color:  #0092ff90;"></div>
      </template>
      <template #footer>
        <div style="width: 100%;height: 100%;background-color:  #0092ffbf;"></div>
      </template>
    </ds-layout>
  </div> <br><br>

</template>

<script setup lang="ts">
import { ref } from "vue";

import Message from "../../components/Message";
import one from '../../assets/one.jpg'
import two from '../../assets/two.jpg'
import three from '../../assets/three.jpg'
import four from '../../assets/four.jpg'

const loading = ref<boolean>(false);
const value = ref<string>("");
const selectValue = ref<string>("");
const options = ref<any[]>([
  {
    label: "1",
    value: "猫",
  },
  {
    label: "2",
    value: "狗",
  },
]);
const options2 = ref([
  {
    link: 'http://www.baidu.com',
    text: '百度一下'
  }
])
const radioOption = ref([
  {
    lable: 'man',
    value: 'man'
  },
  {
    lable: 'woman',
    value: 'woman'
  }
])

const radioValue = ref('man')

const columns = ref<any>([
  {
    title: 'Month',
    dataIndex: 'month',
  },
  {
    title: 'Savings',
    dataIndex: 'money',
    sort: (a: any, b: any) => a.money - b.money
  },
  {
    title: 'Cost',
    dataIndex: 'cost',
    sort: (a: any, b: any) => a.cost - b.cost
  }
])

const dataSource = ref<any>([
  {
    key: 1,
    month: 'January',
    money: '80',
    cost: 100
  },
  {
    key: 2,
    month: 'February',
    money: '300',
    cost: 50
  },
  {
    key: 3,
    month: 'Jun',
    money: '200',
    cost: 80
  },
])

const toolbar = ref({
  customToolbar: {
    icon: "toolbar图标类名",
    title: "hover时显示的标题",
    action(editor: any) {
      // toolbar点击时触发的函数
    },
  },
});

const images = [two, one, three, four]
const images2 = [two, three, four]

const btnClick = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 1000);
};

const getValue = (value: string) => {
  console.log(value);
};

const getRadioValue = (value: string) => {
  console.log(value);
}

const select = (value: string, label: string) => {
  console.log(value, label);
};

const switchHadel = (value: boolean) => {
  console.log(value);
};

const showMessage = () => {
  Message({ type: 'success', msg: '请求成功', time: 800 })
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
}

.ds-row {
  width: 100%;

  & div {
    background-color: #338eff;
  }
}
</style>
