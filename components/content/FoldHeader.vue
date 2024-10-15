<template>
  <div class="fold-header">
    <slot />
    <button type="button" class="btn-fold" @click="$emit('toggleClick')">
      <span class="offscreen">컨텐츠 열기</span>
    </button>
  </div>
</template>

<script setup lang="ts">
defineEmits(["toggleClick"]);
</script>

<style lang="scss" scoped>
@import url('/assets/css/components/fold.scss');
</style>
