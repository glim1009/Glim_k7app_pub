<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-full">
    <template #title>
      <EInputBox type="search" enterkeyhint="search" title="지역 및 매장명 검색" placeholder="지역 및 매장명 입력">
        <EBadge color="gray" badge-text="매장찾기" />
        <NuxtLink to="javascript:" class="btn-input-search">
          <span class="offscreen">검색</span>
        </NuxtLink>
      </EInputBox>
    </template>
    <template #body>
      <div class="dialog-inner">
        <StoreSearchList v-if="!isSearchData" :first-tab="props.firstTab" />
        <StoreSearchResult v-if="isSearchData" />
      </div>
    </template>
  </ContDialog>
</template>

<script setup lang="ts">
const props = defineProps<{
  sta: DialogState;
  firstTab?: "list" | "map" | "bookmark" | string | undefined;
  isSearchData?: boolean; // 임시 :: 컨텐츠 확인을 위해 추가 ( 개발시 삭제 요청 )
}>();

const emit = defineEmits(["update:sta"]);

interface DialogState {
  open: boolean;
}

const isOpen = computed({
  get: () => props.sta.open,
  set: value => emit("update:sta", { ...props.sta, open: value }),
});
</script>

<style scoped lang="scss">

</style>
