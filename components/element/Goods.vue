<template>
  <span :class="className">
    <span class="val">
      {{ val }}<slot v-if="!val" />
    </span>
    <span class="unit">{{ unit }}</span>
  </span>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  size?: 'sm' | 'md' | 'lg' | 'xl';// font size | sm 13px, md 14px, lg 16px, xl 18px
  type?: 'origin' | 'percent'; // 'origin' 원가 / 'percent' 할인율(미정)
  val?: string;
  unit?: string;
}>(), {

});

const className = computed(() => {
  let cNm = 'goods';
  if(props.size) cNm += '-' + props.size;
  if(props.type) cNm += ' ' + props.type;
  return cNm;
});
</script>


