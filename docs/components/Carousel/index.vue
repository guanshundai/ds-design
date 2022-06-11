<template>
  <div class="ds-carousel" @click="changeOne($event)">
    <!-- 图片 -->
    <ul class="imgBox">
      <li v-for="(item, index) in images" :key="index" :class="index === 0 ? 'active' : ''" @click.stop>
        <img :src="item" loading="lazy">
      </li>
    </ul>

    <!-- 焦点 -->
    <ol class="point" :style="{ display: dots ? 'flex' : 'none' }">
      <li v-for="(item, index) in images" :key="index" :active-index="index" @mousemove="mouseMove"
        @mouseleave="mouseLeave" :class="index === 0 ? 'active dot' : 'dot'"></li>
    </ol>

    <!-- 左右切换 -->
    <div class="left" @mousemove="mouseMove" @mouseleave="mouseLeave">
      <svg t="1653273633059" class="icon lt" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="1967" :width="28" :height="28">
        <path class="lt" d="M378.24 512l418.88 418.88L704 1024 192 512l512-512 93.12 93.12z"
          fill="rgb(255, 255, 255, .75)" p-id="1968"></path>
      </svg>
    </div>
    <div class="right" @mousemove="mouseMove" @mouseleave="mouseLeave">
      <svg t="1653274034041" class="icon rt" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="2964" :width="28" :height="28">
        <path class="rt" d="M610.88 512L192 93.12 285.12 0l512 512-512 512L192 930.88z" fill="rgb(255, 255, 255, .75)"
          p-id="2965">
        </path>
      </svg>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, onMounted, watch, onUnmounted, getCurrentInstance } from 'vue'

const instance = getCurrentInstance()
const { vnode, ctx } = instance as any

interface Prop {
  images: any[],
  width?: string,
  height?: string,
  time?: number,
  autoplay?: boolean,
  dots?: boolean
}
const props = withDefaults(defineProps<Prop>(), {
  images: [] as any,
  width: 'auto',
  height: 'auto',
  time: 1000,
  autoplay: false,
  dots: true
})

const images = ref<any[]>(props.images)
const width = ref<string>(props.width)
const height = ref<string>(props.height)
const time = ref<number>(props.time)
const autoplay = ref<boolean>(props.autoplay)
const dots = ref<boolean>(props.dots)
const imgIndex = ref<number>(0)

watch(
  () => props.images,
  () => images.value = props.images
)
watch(
  () => props.width,
  () => width.value = props.width
)
watch(
  () => props.height,
  () => height.value = props.height
)
watch(
  () => props.time,
  () => time.value = props.time
)
watch(
  () => props.autoplay,
  () => autoplay.value = props.autoplay
)
watch(
  () => props.dots,
  () => dots.value = props.dots
)

onMounted(() => {
  if (ctx.autoplay) {
    autoPlay()
  }
})

onUnmounted(() => {
  ctx.timer = null
  clearInterval(ctx.timer)
})

const changeOne = (e: any) => {
  // console.log(e)
  const total = [...e.composedPath()]
  const carousel = total.filter(i => i.className == 'ds-carousel')
  const imgBox = carousel[0].firstElementChild
  const imgs = [...imgBox.children]
  const points = [...carousel[0].children[1].children]
  // console.log(points)

  if (e.target.nodeName !== 'IMG' && e.target.className !== 'point') {
    imgs.forEach(i => {
      i.className = ''
    })
    points.forEach(i => {
      i.className = 'dot'
    })
  }
  if (String(e.target.className).indexOf('dot') !== -1) {
    e.target.className = 'active dot'
    imgIndex.value = e.target.attributes[0].value
    imgs[imgIndex.value].className = 'active'
    // console.log(e.target.attributes[0].value)
  }

  if (e.target.className == 'left') {
    imgIndex.value--
    if (imgIndex.value < 0) imgIndex.value = imgs.length - 1
    imgs[imgIndex.value].className = 'active'
    points[imgIndex.value].className = 'active dot'
  }
  if (e.target.className == 'right') {
    imgIndex.value++
    if (imgIndex.value > imgs.length - 1) imgIndex.value = 0
    imgs[imgIndex.value].className = 'active'
    points[imgIndex.value].className = 'active dot'
  }
  if (e.target.className.baseVal && e.target.className.baseVal.indexOf('lt') !== -1) {
    imgIndex.value--
    if (imgIndex.value < 0) imgIndex.value = imgs.length - 1
    imgs[imgIndex.value].className = 'active'
    points[imgIndex.value].className = 'active dot'
  }
  if (e.target.className.baseVal && e.target.className.baseVal.indexOf('rt') !== -1) {
    imgIndex.value++
    if (imgIndex.value > imgs.length - 1) imgIndex.value = 0
    imgs[imgIndex.value].className = 'active'
    points[imgIndex.value].className = 'active dot'
  }
}

const autoPlay = () => {
  const carousel = vnode.el
  const imgBox = carousel.children[0]
  const imgs = [...imgBox.children]
  const points = [...carousel.children[1].children]
  ctx.timer = null
  // console.log(ctx)
  // console.log(imgs, points)
  ctx.timer = setInterval(() => {
    imgs.forEach(i => {
      i.className = ''
    })
    points.forEach(i => {
      i.className = 'dot'
    })
    if (imgIndex.value > imgs.length - 1) imgIndex.value = 0
    imgs[imgIndex.value].className = 'active'
    points[imgIndex.value].className = 'active dot'
    imgIndex.value++
  }, time.value)
}

const mouseMove = () => {
  if (ctx.autoplay) {
    clearInterval(ctx.timer)
  }
}
const mouseLeave = () => {
  if (ctx.autoplay) {
    autoPlay()
  }
}

</script>

<style lang='less' scoped>
.ds-carousel {
  width: 100%;
  height: 300px;
  background-color: #338effbf;
  position: relative;
  display: inline-block;
  color: #fff;
  overflow: hidden;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul {
    width: 100%;
    height: 100%;
    position: relative;

    li {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity .5s linear;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    li.active {
      opacity: 1
    }

    img {
      width: v-bind(width);
      height: v-bind(height);
      display: block;
      margin: 0 auto;
    }
  }

  ol {
    width: 100%;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: absolute;
    bottom: 10px;
    margin: 0 auto;

    li {
      width: 10px;
      height: 10px;
      margin-left: 6px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.665);
      transition: width .3s linear;
    }

    li:hover {
      background-color: #fff;
      width: 20px;
      border-radius: 8px;
      cursor: pointer;
    }

    li.active {
      background-color: #fff;
      width: 20px;
      border-radius: 8px;
    }
  }

  .left {
    position: absolute;
    top: 50%;
    width: 10%;
    height: 100%;
    transform: translateY(-50%);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    cursor: pointer;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      border-right: 1px solid rgba(200, 220, 201, .1);
      border-image: linear-gradient(transparent, rgba(200, 220, 201, .5), transparent) 5 5;
    }
  }

  .right {
    position: absolute;
    top: 50%;
    right: 0;
    width: 10%;
    height: 100%;
    transform: translateY(-50%);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    cursor: pointer;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      border-left: 1px solid rgba(200, 220, 201, .1);
      border-image: linear-gradient(transparent, rgba(200, 220, 201, .5), transparent) 5 5;
    }
  }

}
</style>