<template>
  <BoardDetailWrap>
    <template #header>
      <CtitleWrap size="zero">
        <BadgeGroup size="xl">
          <EBadge color="light-orange" size="sm" badge-text="SECRET" />
        </BadgeGroup>
        <ETit type="board-detail">
          세븐일레븐 모닝 도시락모음 기획전 세븐일레븐 모닝 도시락모음 기획전
        </ETit>
        <FlexGroup align="end">
          <div class="flex-left">
            <div class="stext board-date">
              2024.07.17 ~ 2024.07.20
            </div>
          </div>
          <div class="flex-right">
            <button type="button" class="btn-share" @click="openSnsShare">
              <EIco name="share">
                <span class="offscreen">공유</span>
              </EIco>
            </button>
          </div>
        </FlexGroup>
      </CtitleWrap>
    </template>
    <template #content>
      <NuxtPage />
    </template>
  </BoardDetailWrap>

  <!-- pop : 금액권선택 -->
  <popCommSnsShare v-model:sta="popSnsShare" />
  <!-- // pop : 금액권선택 -->
</template>

<script setup lang="ts">
definePageMeta({
  hideRightHeader: ['chat'],
});

// 공유하기 팝업
const popSnsShare = ref({ open: false });
const openSnsShare = () => popSnsShare.value.open = true;
</script>

<style lang="scss" scoped>
@import url('@/assets/css/pages/event.scss');
</style>
