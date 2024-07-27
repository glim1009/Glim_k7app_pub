<template>
  <div :class="className">
    <FoldHeader @toggle-click="toggle">
      <slot name="header"></slot>
    </FoldHeader>
    <FoldCont :is-open="isOpen">
      <slot name="content"></slot>
    </FoldCont>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  type?: 'cont' | 'box';
}>(), {
  type: 'box'
});

const className = computed(() => {
  let cNm = 'fold';
  if( props.type !== 'box' ) cNm += '-' + props.type;
  cNm += '-box';
  return cNm;
});

const isOpen = ref(false);

const toggle = () => { isOpen.value = !isOpen.value; };

</script>

<style lang="scss" scoped>
@import url('/assets/css/components/fold.scss');
</style>
