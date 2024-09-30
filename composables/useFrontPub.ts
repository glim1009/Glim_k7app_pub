import type {Swiper as SwiperType} from "swiper";

export interface Tab {
  path: string
  text: string
}

export function useLinkTabSwiper(tabs: Tab[], basePath: string) {
  const route = useRoute()
  const swiperInstance = ref<SwiperType | null>(null)

  const onSwiper = (swiper: SwiperType) => {
    swiperInstance.value = swiper
  }

  const swiperMovePos = (idx: number): number => {
    if (!swiperInstance.value) return 0

    const swiper = swiperInstance.value
    const swiperScrollWidth = swiper.wrapperEl.scrollWidth
    const swiperWidth = swiper.width
    const slides = swiper.slides

    let listWidth = 0
    slides.forEach((slide) => {
      if (slide instanceof HTMLElement) {
        listWidth += slide.offsetWidth
      }
    })

    const boxHalf = swiperWidth / 2
    const targetSlide = slides[idx]
    if (!(targetSlide instanceof HTMLElement)) return 0

    const targetPos = (swiper as any).slidesGrid[idx] + targetSlide.offsetWidth / 2

    let pos: number

    if (listWidth <= swiperWidth) return 0

    if (targetPos <= boxHalf) {
      pos = 0
    } else if (listWidth - targetPos <= boxHalf) {
      pos = -(listWidth - swiperWidth)
    } else {
      pos = -(targetPos - boxHalf)
    }

    return Math.max(Math.min(pos, 0), -(listWidth - swiperWidth))
  }

  const updateSwiperIndex = (speed: number = 300) => {
    if (!swiperInstance.value) return

    const currentIndex = tabs.findIndex(tab => {
      const str = route.path.replace(basePath, "");
      const arr = str.split("/");
      const pathArr = tab.path.split("/");
      return arr[1] === pathArr[1];
    });

    if (currentIndex !== -1) {
      const pos = swiperMovePos(currentIndex);
      setTimeout(() => {
        swiperInstance.value?.translateTo(pos, speed)
      }, 0);

    }
  }

  onMounted(() => {
    updateSwiperIndex(0);
  })

  watch(() => route.path, () => updateSwiperIndex())

  return {
    onSwiper,
    updateSwiperIndex
  }
}

/// Toast
const toastState = ref<{
  open: boolean;
  msg: string;
  isClose?: boolean;
}>({
  open: false,
  msg: "",
  isClose: false
})

export function useToast() {
  let timer: NodeJS.Timeout | null = null;
  const showToast = (options: { msg: string; isClose?: boolean }) => {
    if (toastState.value.open) closeToast();
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    toastState.value = {
      open: true,
      msg: options.msg,
      isClose: options.isClose ?? false,
    }
    if (!options.isClose) {
      timer = setTimeout(() => {
        toastState.value.open = false
      }, 3000) // 3초 후 자동으로 닫힘
    }
  }

  const closeToast = () => {
    toastState.value.open = false
    toastState.value.isClose = false;
  }

  const toastMsg = computed(() => toastState.value.msg)
  const isToastOpen = computed(() => toastState.value.open)
  const isClose = computed(() => toastState.value.isClose)

  return {
    showToast,
    closeToast,
    toastMsg,
    isToastOpen,
    isClose,
  }
}
