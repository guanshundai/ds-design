import {App} from 'vue'
import Carousel from './index.vue'

Carousel.name = 'ds-carousel'

Carousel.install = (app: App) => {
  app.component(Carousel.name, Carousel)
}

export default Carousel