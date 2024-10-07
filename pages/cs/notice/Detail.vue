<template>
  <BoardDetailWrap>
    <template #header>
      <BadgeGroup size="lg">
        <EBadge color="green" size="sm" badge-text="중요" />
      </BadgeGroup>
      <CtitleWrap size="zero">
        <ETit type="board-detail">
          6/3(월) 홈배송 서비스 일부 고객님들의 주문내역 오류 발생과 접수 지연 사과 안내
        </ETit>
        <div class="stext board-date">
          2024.07.17
        </div>
      </CtitleWrap>
    </template>
    <template #content>
      <ContWrap in-top="md" in-bottom="sm">
        <div class="editor-wrap">
          <!-- 개발 시 삭제 영역 -->
          <div>
            공지사항 내용은 에디터로 입력됩니다.<br>
            한 줄을 초과할 경우 말줄임 없이 줄바꿈하여 내용 전체 노출합니다.<br>
            <br>
            에디터영역 확인을 위한 임시 div입니다.<br>
            개발시 해당 div 삭제 후 작업해 주세요.
          </div>
          <!-- // 개발 시 삭제 영역 -->
        </div>
      </ContWrap>
    </template>
  </BoardDetailWrap>
</template>

<script setup lang="ts">
definePageMeta({
  title: "공지사항",
});
</script>

<style lang="scss" scoped>
@import url("assets/css/pages/cs.scss");
</style>
