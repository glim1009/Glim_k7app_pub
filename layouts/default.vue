<template>
  <div class="skip-nav">
    <a href="#container" onclick="document.getElementById('body').tabIndex = -1; document.getElementById('container').focus(); return false;">본문으로 가기</a>
  </div>
  <div class="wrapper">
    <slot name="header">
      <LayoutHeader :title="changeTitle" :hideRightHeader="changeRightHeader" :notBack="notBack" />
    </slot>
    <LayoutContainer id="container">
      <slot />
    </LayoutContainer>
    <slot name="footer" />
    <LayoutFloating />
  </div>
</template>

<script setup lang="ts">

interface RouteMetaWithLayout {
  hideRightHeader?: string[] | boolean;
  title?: string | undefined | (() => string | undefined);
  notBack?: boolean | undefined;
}

const route = useRoute();
const routeMeta = computed(() => route.meta as RouteMetaWithLayout);

const changeTitle = ref<any>("");
const notBack = ref<any>("");
const changeRightHeader = ref<any>( "" || routeMeta?.value.hideRightHeader );

watch(() => route.path, () => {
  const metaTitle = routeMeta.value.title;
  changeTitle.value = typeof metaTitle === "function" ? metaTitle(route) : (metaTitle || "");
  notBack.value = routeMeta.value.notBack || false;
  if( route.meta.hideRightHeader ) changeRightHeader.value = route.meta.hideRightHeader;
}, { immediate: true });

watch(changeTitle, (newTitle) => {
  if (newTitle) {
    document.title = newTitle;
  }
});


</script>

