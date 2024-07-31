<template>
  <ContWrap>
    <ColorBox color="white" size="lg">
      <div class="box-info-header">
        <badge-group>
          <EBadge color="gray" size="md" badge-text="일반택배" />
          <EBadge color="light-gray" size="md" badge-text="반송" />
        </badge-group>
        <CtitleWrap>
          <div class="ctitle">
            배추 한박스
          </div>
          <div class="box-info-desc">
            <span class="title">
              송장번호
            </span>
            <span class="stext">
              1234567890987
            </span>
          </div>
        </CtitleWrap>
      </div>
      <ul class="delivery-status-col-list">
        <li class="delivery-item">
          <span class="status">접수완료</span>
          <span class="sub-status">점포입고</span>
        </li>
        <li class="delivery-item">
          <span class="status">배송시작</span>
          <span class="sub-status">집하완료</span>
        </li>
        <li class="delivery-item">
          <span class="status">배송중</span>
          <span class="sub-status">배송중</span>
        </li>
        <li class="delivery-item is-active">
          <span class="status">배송완료</span>
          <span class="sub-status">배송완료</span>
        </li>
      </ul>
      <ColorBox color="light-gray">
        <ul class="delivery-status-row-list">
          <li class="delivery-item is-completed">
            <FlexGroup align="start">
              <div class="flex-left">
                <div class="stext">
                  고객수령 완료 되었습니다.
                </div>
                <span class="date">2024.06.25 15:34</span>
                <span class="sub-status">세븐일레븐 부산본점</span>
              </div>
              <div class="flex-right">
                <span class="status">배송완료</span>
              </div>
            </FlexGroup>
          </li>
          <li class="delivery-item">
            <FlexGroup align="start">
              <div class="flex-left">
                <div class="stext">
                  점포 도착 하였습니다.
                </div>
                <span class="date">2024.06.24 23:58</span>
                <span class="sub-status">세븐일레븐 부산본점</span>
              </div>
              <div class="flex-right">
                <span class="status">배송중</span>
              </div>
            </FlexGroup>
          </li>
          <li class="delivery-item">
            <FlexGroup align="start">
              <div class="flex-left">
                <div class="stext">
                  점포로 출고 되었습니다.
                </div>
                <span class="date">2024.06.23 09:22</span>
                <span class="sub-status">세븐일레븐 부산본점</span>
              </div>
              <div class="flex-right">
                <span class="status">배송시작</span>
              </div>
            </FlexGroup>
          </li>
          <li class="delivery-item">
            <FlexGroup align="start">
              <div class="flex-left">
                <div class="stext">
                  배송센터 입고 되었습니다.
                </div>
                <span class="date">2024.06.24 15:34</span>
                <span class="sub-status">부산 저온센터</span>
              </div>
              <div class="flex-right">
                <span class="status">배송시작</span>
              </div>
            </FlexGroup>
          </li>
          <li class="delivery-item">
            <FlexGroup align="start">
              <div class="flex-left">
                <div class="stext">
                  배송센터 입고 되었습니다.
                </div>
                <span class="date">2024.06.24 15:34</span>
                <span class="sub-status">부산 저온센터</span>
              </div>
              <div class="flex-right">
                <span class="status">배송시작</span>
              </div>
            </FlexGroup>
          </li>
        </ul>
      </ColorBox>
    </ColorBox>
  </ContWrap>
</template>

<script setup lang="ts">
definePageMeta({
  title: '비회원 배송조회',
  hideDocker: true,
});
</script>

<style lang="scss" scoped>
@import url("assets/css/pages/delivery/delivery.scss");
</style>
