<template>
  <div class="skip-nav">
    <a href="#docker" onclick="document.getElementById('body').tabIndex = -1; document.getElementById('docker').focus(); return false;">도커 바로가기</a>
    <a href="#container" onclick="document.getElementById('body').tabIndex = -1; document.getElementById('container').focus(); return false;">본문으로 가기</a>
  </div>
  <div class="wrapper">
    <slot name="header">
      <LayoutHeader :title="routeMeta.title" :hideRightHeader="routeMeta.hideRightHeader" />
    </slot>
    <LayoutContainer id="container">
      <slot />
    </LayoutContainer>
    <LayoutDocker id="docker" v-if="!routeMeta.hideDocker" />
    <LayoutFloating />
  </div>
</template>

<script setup lang="ts">

interface RouteMetaWithLayout {
  hideDocker?: boolean;
  hideRightHeader?: string[] | boolean;
  title?: string | undefined;
}
const routeMeta = useRoute().meta as RouteMetaWithLayout;

</script>

