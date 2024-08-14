<template>
  <div class="fold-overflow-box">
    <Transition @enter="onEnter" name="fold">
      <FoldCont ref="FoldContRef" :style="customStyle" :is-open="isOpen" :class="{ 'is-active' : isOpen }">
        <slot />
      </FoldCont>
    </Transition>
    <div class="fold-header">
      <EBtn color="light-gray" size="sm" :class="['btn-fold-toggle', { 'is-active' : isOpen }]" @click="toggle">
        <span v-if="isOpen" class="text">접기</span>
        <span v-if="!isOpen" class="text">펼치기</span>
        <EIco name="arw-down" color="gray" size="xs" />
      </EBtn>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  minHeight?: string
}>(), {
  minHeight: '0'
});
/*

const className = computed(() => {
  let cNm = 'fold';
  if( props.type !== 'box' ) cNm += '-' + props.type;
  cNm += '-box';
  return cNm;
});*/

const isOpen = ref(false);
const FoldContRef = ref<HTMLElement | null>(null);
const FoldContHeight = ref(0);

const toggle = () => {
  isOpen.value = !isOpen.value;
};

const onEnter = ( el ) => {
  const {  height } = useElementSize(el);
  FoldContHeight.value = height.value;
  console.log( FoldContHeight.value );
}

const customStyle = computed(()=> {
  return {
    '--content-min-height' : props.minHeight + 'px',
    '--content-height' : FoldContHeight.value + 'px'
  }
})

onMounted(() => {
});

</script>

<style lang="scss" scoped>
@import url('/assets/css/components/fold.scss');
</style>
