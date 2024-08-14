<template>
  <div class="board-detail-wrap">
    <div class="board-detail-header">
      <slot name="header"/>
    </div>
    <div class="board-detail-content">
      <slot name="content"/>
    </div>
    <slot/>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
@import url('/assets/css/components/board.scss');
</style>
