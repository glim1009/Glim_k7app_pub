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

<style scoped>
@import url('/assets/css/components/tabs.scss');
</style>
