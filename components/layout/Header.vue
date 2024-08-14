<template>
  <div class="header-wrapper">
    <div class="header-box">
      <div class="header-left">
        <button class="btn-header-back">
          <EIco name="back" />
        </button>
        <div v-if="title" class="ptitle">
          {{ title }}
        </div>
      </div>
      <div v-if="isIconVisible" class="header-right">
        <NuxtLink v-if="isIconVisible('chat')" to="javascript:" class="btn-header-util">
          <EIco name="chat" />
        </NuxtLink>
        <NuxtLink v-if="isIconVisible('search')" to="javascript:" class="btn-header-util">
          <EIco name="search" />
        </NuxtLink>
        <NuxtLink v-if="isIconVisible('cart')" to="javascript:" class="btn-header-util cart">
          <EIco name="cart" />
          <span class="count">99</span>
        </NuxtLink>
        <NuxtLink v-if="isIconVisible('home')" to="/" class="btn-header-util">
          <EIco name="home" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title?: string | undefined;
  hideRightHeader?: string[] | boolean | undefined; ///  ['chat', 'search']
}>();


function isIconVisible(name: string) {
  let view = true;
  if( typeof props.hideRightHeader === 'boolean' ) view = props.hideRightHeader;
  else if ( typeof props.hideRightHeader === 'object' ) view = !props.hideRightHeader?.includes(name);
  return view;
}
</script>

<style lang="scss" scoped>
@import url('@/assets/css/layout/header.scss');
</style>
