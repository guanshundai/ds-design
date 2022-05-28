import { createApp } from 'vue'
import App from './App.vue'
import defineComponent from './utils/defineComponent'
import '@/assets/theme/default.less'
import router from './routers/index'
// import DSDesign from 'ds-design'
// import 'ds-design/style.css'

const app = createApp(App)

defineComponent(app)

app.use(router)

// app.use(DSDesign)

app.mount('#app')
