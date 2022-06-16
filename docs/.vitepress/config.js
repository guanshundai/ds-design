module.exports = {
  // 网站标题
  title: "ds-design",
  // 网站描述
  description: "Interview with vitePress",
  // 打包目录
  dest: "./dist",
  head: [
    // 添加图标
    ["link", { rel: "icon", href: "/favicon.jpg" }],
  ],
  themeConfig: {
    // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
    // lastUpdated: 'Last Updated', // string | boolean
    // 启动页面丝滑滚动
    smoothScroll: true,
    // 导航栏配置
    nav: [
      // { text: "vue-base-admin", link: "http://www.daiguanshun.cn:9800/" },
      // { text: '掘金', link: 'https://juejin.cn/user/1855631359481847/posts' },
      { text: "Github", link: "https://github.com/guanshundai" },
      { text: "辽ICP备2021000835号-1", link: "https://beian.miit.gov.cn" },
    ],
    // sidebar: 'auto'
    sidebar: {
      "/": getSidebar(),
    },
  },
};

function getSidebar() {
  return [
    {
      text: "开始",
      link: "/",
    },
    {
      text: "Grid 删格布局",
      link: "/Grid",
    },
    {
      text: "Layout 布局",
      link: "/Layout",
    },
    {
      text: "Button 按钮",
      link: "/Button",
    },
    {
      text: "Icon 图标",
      link: "/Icon",
    },
    {
      text: "Input 输入框",
      link: "/Input",
    },
    {
      text: "Select 选择框",
      link: "/Select",
    },
    {
      text: "Divider 分割线",
      link: "/Divider",
    },
    {
      text: "Breadcrumb 面包屑",
      link: "/Breadcrumb",
    },
    {
      text: "Switch 开关",
      link: "/Switch",
    },
    {
      text: "Message 消息",
      link: "/Message",
    },
    {
      text: "Dropdown 下拉菜单",
      link: "/Dropdown",
    },
    {
      text: "Menu 导航菜单",
      link: "/Menu",
    },
    {
      text: "Radio 单选框",
      link: "/Radio",
    },
    {
      text: "Carousel 轮播",
      link: "/Carousel",
    },
    {
      text: "Table 表格",
      link: "/Table",
    },
    {
      text: "Collapse 折叠面板",
      link: "/Collapse",
    },
  ];
}
