const home = [
  {
    path: '/',
    name: 'home',
    component: () => import("@/views/home/index.vue")
  },
  {
    path: '/test',
    name: 'test',
    component: () => import("@/views/test/index.vue")
  }
]

export default home