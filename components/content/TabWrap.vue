<template>
  <div class="tab-wrap">
    <div class="tabs">
      <slot name="tabs" :active-tab="activeTab" :set-active-tab="setActiveTab"></slot>
    </div>
    <div class="tab-contents">
      <slot :active-tab="activeTab"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  firActive?: string;
  inTop?: 'zero' | 'sm' | 'md' | 'lg'; // zero - 0, sm - 10px , md - 20px, lg - 30px
}>(), {
  firActive: '',
});

const activeTab = ref(props.firActive);

function setActiveTab(tabName: string) {
  activeTab.value = tabName;
}

provide('activeTab', activeTab);
provide('setActiveTab', setActiveTab);

</script>

<style lang="scss" scoped>
@import url('/assets/css/components/swiper.scss');
</style>
