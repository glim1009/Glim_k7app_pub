<template>
  <NuxtLink v-if="tag === 'a'" :to="to" :class="className">
    <slot></slot>
  </NuxtLink>
  <component :is="tag" v-else :class="className">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  color?: string;
  size?: 'md' | 'sm' | 'xs'; // xs - 13px, sm - 14px, md - 15px
  tag?: 'button' | 'a';
  name?: string;
  to?: string;
}>(), {
  size: 'md',
  tag: 'button',
});

const className = computed(() => {
  let cNm = 'tbtn';
  if (props.name)
    cNm += `-${props.name}`;
  if (props.color)
    cNm += `-${props.color}`; // color 지정 안했을때 X
  cNm += `-${props.size}`;
  return cNm;
});
</script>

<style lang="scss" scoped>
@import url('/assets/css/components/button.scss');
</style>
