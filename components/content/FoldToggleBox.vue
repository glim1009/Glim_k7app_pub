<template>
  <div :class="className">
    <FoldHeader @toggle-click="toggle" :class="{ 'is-active' : isOpen }">
      <slot name="header"></slot>
    </FoldHeader>
    <Transition @enter="onEnter" name="fold">
      <FoldCont ref="FoldContRef" :style="customStyle" :is-open="isOpen" v-if="isOpen">
        <slot name="content" />
      </FoldCont>
    </Transition>
  </div>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
  type?: 'cont' | 'box';
  open?: boolean
}>(), {
  type: 'box',
  open: false
});

const className = computed(() => {
  let cNm = 'fold';
  if( props.type !== 'box' ) cNm += '-' + props.type;
  cNm += '-box';
  return cNm;
});

const isOpen = ref(false);
const FoldContRef = ref<HTMLElement | null>(null);
const FoldContHeight = ref();

const toggle = () => {
  isOpen.value = !isOpen.value;
};

const onEnter = (el, customStyle) => {
  const {  height } = useElementSize(el);
  //console.log( el, height.value );
  FoldContHeight.value = height.value;
  customStyle();
}

const customStyle = () => {
  return {
    '--content-height' : FoldContHeight.value + 'px'
  }
};

onMounted(() => {
  //console.log(isOpen.value);
  if( props.open ) isOpen.value = props.open;
});

</script>

<style lang="scss" scoped>
@import url('/assets/css/components/fold.scss');
</style>
