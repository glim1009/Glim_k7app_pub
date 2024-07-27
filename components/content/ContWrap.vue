<template>
  <div :class="className">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  type?: 'default' | 'white' | 'divider'; // default - gray, white, divider - 미정
  inTop?: 'zero' | 'md' | 'lg'; // zero - 0, md - 20px, lg - 30px
  inBottom?: 'zero' | 'md'; // zero - 0, md - 30px
}>(), {
  type: 'default',
  inTop: 'md',
  inBottom: 'md',
});

// cont-{type}-{inTop/inBottom}-wrap
// cont-white-zerobz-wrap
// cont-white-lgbz-
const className = computed(() => {
  let cNm = 'cont';
  let bottomClass = 'bz';

  if (props.type !== 'default') cNm += '-' + props.type;

  // top -md, bottom-zero
  if (props.inTop !== 'md') {
    if (props.inTop === 'zero') cNm += '-zero';
    else if (props.inTop === 'lg') cNm += '-lg';
  }
  else {
    bottomClass = '-' + bottomClass;
  }

  if (props.inBottom === 'zero') cNm += bottomClass;

  cNm += '-wrap';
  return cNm;
});
</script>

<style lang="scss" scoped>
@import url('/assets/css/components/contWrap.scss');
</style>
