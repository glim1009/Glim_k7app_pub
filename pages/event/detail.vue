<template>
  <BoardDetailWrap>
    <template #header>
      <CtitleWrap v-if="!$route.path.includes('winning')" size="zero">
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
      <CtitleWrap v-if="$route.path.includes('winning')" size="sm">
        <ETit type="board-detail">
          세븐일레븐 모닝 도시락모음 기획전 세븐일레븐 모닝 도시락모음 기획전
        </ETit>
      </CtitleWrap>
      <TableWrap v-if="$route.path.includes('winning')" type="info" gap="sm" size="md" table-name="당첨자 발표 정보">
        <colgroup>
          <col style="width: 55px;">
          <col style="width: auto;">
        </colgroup>
        <tbody>
          <tr>
            <th scope="row">
              발표일
            </th>
            <td>2024.08.01</td>
          </tr>
          <tr>
            <th scope="row">
              응모기간
            </th>
            <td>2024.07.01 ~ 2024.07.31</td>
          </tr>
        </tbody>
      </TableWrap>
    </template>
    <template #content>
      <NuxtPage />
    </template>
  </BoardDetailWrap>

  <!-- pop : SNS 공유 -->
  <popCommSnsShare v-model:sta="popSnsShare" />
  <!-- // pop : SNS 공유 -->
</template>

<script setup lang="ts">
definePageMeta({
  hideRightHeader: ["chat"],
});

// 공유하기 팝업
const popSnsShare = ref({ open: false });
const openSnsShare = () => popSnsShare.value.open = true;
</script>

<style lang="scss" scoped>
@import url('@/assets/css/pages/event.scss');
</style>
