<template>
  <div class="skip-nav">
    <a href="#container" onclick="document.getElementById('body').tabIndex = -1; document.getElementById('container').focus(); return false;">본문으로 가기</a>
  </div>
  <div class="wrapper">
    <slot name="header">
      <LayoutHeader :title="changeTitle" :hideRightHeader="changeRightHeader" />
    </slot>
    <LayoutContainer id="container">
      <slot />
    </LayoutContainer>
    <LayoutFloating />
  </div>
</template>

<script setup lang="ts">

interface RouteMetaWithLayout {
  hideRightHeader?: string[] | boolean;
  title?: string | undefined;
}
const routeMeta = useRoute().meta as RouteMetaWithLayout;


const route = useRoute();

const changeTitle = ref<any>(routeMeta?.title || '');
const changeRightHeader = ref<any>( routeMeta?.hideRightHeader || '');

watch( () => route.path, () => {
  changeTitle.value = route.meta.title;
  if( route.meta.hideRightHeader ) changeRightHeader.value = route.meta.hideRightHeader;
});

</script>

