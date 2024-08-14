<template>
  <div :class="className">
    <table :class="tblName">
      <caption>{{ tableName }}</caption>
      <slot />
    </table>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  type?: 'row' | 'col' | 'info';
  gap?: 'sm' | 'md'; // gap sm 6px, md 12px
  size?: 'md' | 'lg'; // font md 13px, lg 14px
  tableName: string;
}>(), {
  type: 'row',
});

const className = computed(() => {
  let cNm = 'tbl';
  cNm += '-' + props.type;
  if (props.type === 'info') cNm += '-' + props.gap;
  cNm += '-wrap';
  return cNm;
});
const tblName = computed(() => {
  let tNm = 'tbl';
  tNm += '-' + props.type;
  if (props.type === 'info') tNm += '-' + props.size;
  return tNm;
});
</script>
<style lang="scss" scoped>
@import url('/assets/css/components/table.scss');
</style>
