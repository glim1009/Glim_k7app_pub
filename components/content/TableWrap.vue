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
  size?: 'xs' | 'sm' | 'md'; // gap xs 4px, sm 6px , md 10px
  tableName: string,
}>(), {
  type: 'row',
});

const className = computed(() => {
  let cNm = 'tbl';
  cNm += '-' + props.type;
  cNm += '-wrap';
  return cNm;
});
const tblName = computed(() => {
  let tNm = 'tbl';
  tNm += '-' + props.type;
  if(props.size) tNm += '-' + props.size;
  return tNm;
});
</script>
<style lang="scss" scoped>
@import url('/assets/css/components/table.scss');
</style>
