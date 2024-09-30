<template>
  <div :class="[className, { 'fw-md' : type === 'board'}]">
    {{ text }}
    <slot v-if="!text" />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  text?: string;
  type?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}>(), {
  type: 'cont',
});

const fontSizes = {
  '2xl': ref<string[]>(['prod-detail']), // 22px
  xl: ref<string[]>(['fold', 'xlCont']), // 20px
  lg: ref<string[]>(['lgCont', 'board-detail']), // 18px
  md: ref<string[]>(['cont', 'box']), // 16px
  sm: ref<string[]>(['form', 'sFold', 'board', 'place']), // 15px
  xs: ref<string[]>(['prod', 'goods', 'account']), // 14px
  '2xs': ref<string[]>(['sCont']), // 13px
  '2xs-gray': ref<string[]>(['sGoods']), // 13px
}

const className = computed(() => {
  let cNm = 'ctitle';
  if (props.type) {
    for (const [size, types] of Object.entries(fontSizes)) {
      if (types.value.includes(props.type)) {
        cNm += `-${size}`;
        break;
      }
    }

  } else if (props.size) {
    cNm += `-${props.size}`;
  }
  return cNm;
});
</script>

