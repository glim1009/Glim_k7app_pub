<template>
  <div class="tab-wrap">
    <div class="tabs">
      <slot name="tabs" :active-tab="activeTab" :set-active-tab="setActiveTab" />
    </div>
    <div class="tab-contents">
      <slot :active-tab="activeTab" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  firActive?: string;
}>(), {
  firActive: "",
});
const activeTab = ref(props.firActive);

function setActiveTab(tabName: string) {
  activeTab.value = tabName;
}

provide("activeTab", activeTab);
provide("setActiveTab", setActiveTab);

defineExpose({ setActiveTab });
</script>

<style lang="scss" scoped>
@import url('/assets/css/components/swiper.scss');
</style>
