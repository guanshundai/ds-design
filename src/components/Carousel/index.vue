<template>
  <div class="ds-carousel">
    <div class="ds-carousel-list" @mousemove="handleListMove" @mouseleave="handleListLeave">
      <slot>
        <div>
          <span style="font-size: 32px">1</span>
        </div>
      </slot>
    </div>
    <div class="ds-carousel-left" @mousemove="handleMove" @mouseleave="handleLeave" @click="leftClick">
      <svg t="1653273633059" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="1967" :width="size" :height="size">
        <path d="M378.24 512l418.88 418.88L704 1024 192 512l512-512 93.12 93.12z" fill="rgb(255, 255, 255, .75)"
          p-id="1968"></path>
      </svg>
    </div>
    <div class="ds-carousel-right" @mousemove="handleMove" @mouseleave="handleLeave" @click="rightClick()">
      <svg t="1653274034041" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="2964" :width="size" :height="size">
        <path d="M610.88 512L192 93.12 285.12 0l512 512-512 512L192 930.88z" fill="rgb(255, 255, 255, .75)" p-id="2965">
        </path>
      </svg>
    </div>
    <div class="ds-carousel-dot"></div>
  </div>
</template>

<script setup lang='ts'>
import { ref, onMounted, watch, onUnmounted } from 'vue'

interface Prop {
  width?: string,
  height?: string,
  time?: number,
  autoplay?: boolean,
  dots?: boolean
}
const props = withDefaults(defineProps<Prop>(), {
  width: '100%',
  height: '200px',
  time: 1000,
  autoplay: false,
  dots: true
})

const size = ref('28')
const opacity = ref(0)
const curIndex = ref(0)
const carousel = ref(0)
const carouselWidth = ref(props.width)

const width = ref<string>(props.width)
const height = ref<string>(props.height)
const time = ref<number>(props.time)
const carouselListLength = ref(1)
const autoplay = ref<boolean>(props.autoplay)
const dots = ref<boolean>(props.dots)

let timer: any = null

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

watch(
  () => carousel.value,
  () => carouselWidth.value = carousel.value + 'px'
)

onMounted(() => {
  carousel.value = (document.querySelector('.ds-carousel') as any).clientWidth
  const rightList = document.querySelector('.ds-carousel-list') as any
  const dotFather = document.querySelector('.ds-carousel-dot') as any
  let rightListLength = rightList.childNodes.length - 2

  //初始化圆点
  dotFather.innerHTML = ''

  carouselListLength.value = rightList.childNodes.length - 2
  carouselWidth.value = carousel.value + 'px'
  // console.log(carouselWidth.value);

  let MutationObserver = window.MutationObserver
  let element = document.querySelector('.ds-carousel') as any

  let observer = new MutationObserver((mutationList) => {
    // console.log(mutationList);
    let width = getComputedStyle(element).getPropertyValue('width')
    const rightListCopy = document.querySelector('.ds-carousel-list') as any
    const rightListCopyLength = rightListCopy.childNodes.length - 2

    if (carouselWidth.value !== width) {
      carousel.value = Number(width.slice(0, width.indexOf('px')))
      carouselWidth.value = width
      // console.log(width, '+++');
    }

    // console.log(rightListLength, rightListCopyLength);
    if (rightListLength !== rightListCopyLength) {
      dotFather.innerHTML = ''
      for (let i = 0; i < rightListCopy.childNodes.length - 2; i++) {
        const dot = document.createElement('div')
        dot.setAttribute('class', 'ds-carousel-dot-item')
        dotFather.appendChild(dot)
        rightListLength = rightListCopyLength
      }
    }
  })
  observer.observe(element, { attributeFilter: ['style'], attributeOldValue: true })

  //添加圆点
  for (let i = 0; i < rightList.childNodes.length - 2; i++) {
    const dot = document.createElement('div')
    dot.setAttribute('class', 'ds-carousel-dot-item')
    dot.addEventListener('click', function (e: any) {
      curIndex.value = i - 1
      rightClick()
      dotFather.childNodes[i].style.backgroundColor = '#fff'
      for (let j = 0; j < dotFather.childNodes.length; j++) {
        if (j !== i) {
          dotFather.childNodes[j].style.backgroundColor = 'rgba(255, 255, 255, 0.6)'
        }
      }
      console.log();
    })
    dot.addEventListener('mousemove', function (e) {
      clearInterval(timer)
    })
    dot.addEventListener('mouseleave', function (e) {
      if (autoplay.value) {
        timer = setInterval(() => {
          rightClick()
        }, time.value)
      }
    })
    dotFather.appendChild(dot)
  }

  //初始化激活圆点
  dotFather.childNodes[curIndex.value].style.backgroundColor = '#fff'
  for (let j = 0; j < dotFather.childNodes.length; j++) {
    if (j !== curIndex.value) {
      dotFather.childNodes[j].style.backgroundColor = 'rgba(255, 255, 255, 0.6)'
    }
  }

  //自动切换
  if (autoplay.value) {
    timer = setInterval(() => {
      rightClick()
    }, time.value)
  }
  // console.log(dotFather);
})

onUnmounted(() => {
  clearInterval(timer)
})

const handleListMove = () => {
  clearInterval(timer)
  opacity.value = 1
}
const handleListLeave = () => {
  if (autoplay.value) {
    timer = setInterval(() => {
      rightClick()
    }, time.value)
  }
  opacity.value = 0
}

const handleMove = () => {
  clearInterval(timer)
  opacity.value = 1
}
const handleLeave = () => {
  if (autoplay.value) {
    timer = setInterval(() => {
      rightClick()
    }, time.value)
  }
}

const leftClick = () => {
  const dotFather = document.querySelector('.ds-carousel-dot') as any

  carousel.value = (document.querySelector('.ds-carousel') as any).clientWidth
  const rightList = document.querySelector('.ds-carousel-list') as any
  carouselListLength.value = rightList.childNodes.length - 2
  if (curIndex.value === 0) {
    curIndex.value = rightList.childNodes.length - 2
  }
  rightList.childNodes[1].style.marginLeft = `${-carousel.value * (curIndex.value - 1)}px`

  dotFather.childNodes[curIndex.value - 1].style.backgroundColor = '#fff'
  for (let j = 0; j < dotFather.childNodes.length; j++) {
    if (j !== curIndex.value - 1) {
      dotFather.childNodes[j].style.backgroundColor = 'rgba(255, 255, 255, 0.6)'
    }
  }

  curIndex.value--
  // console.log(curIndex.value);
}

const rightClick = () => {
  const dotFather = document.querySelector('.ds-carousel-dot') as any

  carousel.value = (document.querySelector('.ds-carousel') as any).clientWidth
  const rightList = document.querySelector('.ds-carousel-list') as any
  carouselListLength.value = rightList.childNodes.length - 2
  if (curIndex.value === (rightList.childNodes.length - 3)) {
    curIndex.value = -1
  }
  rightList.childNodes[1].style.marginLeft = `${-carousel.value * (curIndex.value + 1)}px`

  dotFather.childNodes[curIndex.value + 1].style.backgroundColor = '#fff'
  for (let j = 0; j < dotFather.childNodes.length; j++) {
    if (j !== curIndex.value + 1) {
      dotFather.childNodes[j].style.backgroundColor = 'rgba(255, 255, 255, 0.6)'
    }
  }

  curIndex.value++
  // console.log(curIndex.value);
}
</script>

<style lang='less' scoped>
.ds-carousel {
  width: v-bind(width);
  height: v-bind(height);
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

  .ds-carousel-list {
    width: calc(100% * v-bind(carouselListLength));
    height: 100%;
    margin: 0 auto;
    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;

    :slotted(div) {
      width: v-bind(carouselWidth);
      height: 100%;
      transition: all 1s;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
    }
  }

  .ds-carousel-left {
    height: 100%;
    padding: 0 10px;
    position: absolute;
    left: 0;
    top: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: v-bind(opacity);
    transition: all 1s;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      border-right: 1px solid rgba(200, 220, 201, .1);
      border-image: linear-gradient(transparent, rgba(200, 220, 201, .5), transparent) 5 5;
    }
  }

  .ds-carousel-right {
    height: 100%;
    padding: 0 10px;
    position: absolute;
    right: 0;
    top: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: v-bind(opacity);
    transition: all .7s;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      border-left: 1px solid rgba(200, 220, 201, .1);
      border-image: linear-gradient(transparent, rgba(200, 220, 201, .5), transparent) 5 5;
    }
  }

  .ds-carousel-dot {
    width: 100%;
    padding: 5px 0 10px 0;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .ds-carousel-dot-item {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.6);
      margin: 0 3px;
      transition: all 0.5s;

      &:hover {
        width: 20px;
        border-radius: 5px;
        background-color: #fff !important;
        cursor: pointer;
      }
    }
  }
}
</style>