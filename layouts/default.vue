<template>
  <div class="skip-nav">
    <a href="#container" onclick="document.getElementById('body').tabIndex = -1; document.getElementById('container').focus(); return false;">본문으로 가기</a>
  </div>
  <div v-touch:press="startHandler" v-touch:drag="movingHandler" v-touch:release="endHandler" class="wrapper">
    <slot name="header">
      <LayoutHeader :title="changeTitle" :hide-right-header="changeRightHeader" :not-back="notBack" />
    </slot>
    <div v-if="isDragging && !notDragRefresh" class="drag-refresh-loading">
      <div style="height: 100px; background: pink;">
        로딩 TBD
      </div>
    </div>
    <LayoutContainer id="container" :style="conditionalStyle">
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
  notDragRefresh?: boolean | undefined;
}

const route = useRoute();
const routeMeta = computed(() => route.meta as RouteMetaWithLayout);

const changeTitle = ref<any>("");
const notBack = ref<any>("");
const changeRightHeader = ref<any>("" || routeMeta?.value.hideRightHeader);

/* 드래그 - refresh loading */
const dragStartY = ref<number>(55);
const dragDistance = ref<number>(55);
const isDragging = ref<boolean>(false);
const notDragRefresh = ref<boolean>(false);

/* 드래그 start */
const startHandler = (event: any) => {
  if (notDragRefresh.value)
    return;
  if (getScrollPosition() <= 0) {
    dragStartY.value = event.touches[0].clientY;
    isDragging.value = true;
  }
};

/* 드래그 moving */
const movingHandler = (event: any) => {
  if (notDragRefresh.value)
    return;
  if (getScrollPosition() <= 0 && isDragging.value) {
    const deltaY = event.touches[0].clientY - dragStartY.value;
    dragDistance.value = Math.min(155, Math.max(55, deltaY));
  }
};

/* 드래그 end */
const endHandler = () => {
  if (notDragRefresh.value)
    return;
  if (dragDistance.value > 55) {
    isDragging.value = false;
    dragDistance.value = 55;
    dragStartY.value = 55;
    // 페이지 리프레쉬
  }
};

/* drag - container style */
const conditionalStyle = computed(() => {
  return !notDragRefresh.value
    ? {
        paddingTop: `${dragDistance.value}px`,
        transition: !isDragging.value ? "none" : "padding-top 0.3s ease-out",
      }
    : {};
});

watch(() => route.path, () => {
  const metaTitle = routeMeta.value.title;
  changeTitle.value = typeof metaTitle === "function" ? metaTitle(route) : (metaTitle || "");
  notBack.value = routeMeta.value.notBack || false;
  notDragRefresh.value = routeMeta.value.notDragRefresh || false;
  if (route.meta.hideRightHeader !== undefined)
    changeRightHeader.value = route.meta.hideRightHeader;
}, { immediate: true });
</script>
