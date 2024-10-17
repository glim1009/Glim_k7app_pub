<template>
  <div :class="className">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  isOpen: boolean;
  contColor?: string;
}>();

const className = computed(() => {
  let cNm = "fold-cont";
  if (props.contColor)
    cNm += `-${props.contColor}`;
  return cNm;
});
</script>

<style lang="scss" scoped>

</style>
