<template>
  <div class="grid-list-header">
    <FlexGroup align="center">
      <div class="flex-left">
        <div class="goods-group">
          <span class="label">총</span>
          <EGoods size="lg" :val="props.listValue" unit="건" class="fw-sb" />
        </div>
      </div>
      <div class="flex-right">
        <div class="bar-group">
          <div class="bar-item">
            <div class="ui-select type-text">
              <select :title="props.selectTitle">
                <slot />
              </select>
            </div>
          </div>
          <div class="bar-item">
            <button type="button" class="btn-filter">
              <EIco name="filter" size="sm" />
            </button>
          </div>
        </div>
      </div>
    </FlexGroup>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  listValue?: string; // list 총 N 건 지정
  selectTitle?: string; // select 타이틀 지정
}>(), {

});
</script>

<style scoped>
@import url('/assets/css/components/gridListHeader.scss');
</style>
