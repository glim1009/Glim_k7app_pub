<template>
  <EventHomeTab>
    <ContWrap>
      <ContBox>
        <RowListWrap v-if="isData" gap="xl">
          <li class="item">
            <!-- thumb-event -->
            <div class="thumb-event">
              <EThumbEventBox>
                <div class="right-group">
                  <span class="event-badge-white-md">
                    <span class="text">참여중</span>
                  </span>
                  <span class="event-badge-green-md">
                    <span class="text">스탬프</span>
                  </span>
                </div>
                <template #thumb>
                  <img src="/assets/images/temp/temp_banner_service_1.png" alt="이벤트명 이미지">
                </template>
              </EThumbEventBox>
              <div class="info-box">
                <ETit type="cont">
                  오늘도 하루하루 행복한 세븐일레븐 앱과 함께 길어질 시 한줄 말줄임 됩니다 오늘도 하루하루 행복한 세븐일레븐 앱과 함께 길어질 시 한줄 말줄임 됩니다
                </ETit>
                <div class="date-group">
                  <EBadge color="orange" size="md" badge-text="D-26" />
                  <p class="stext-lg-gray70">
                    2024.06.29 ~ 2024.07.31
                  </p>
                </div>
              </div>
            </div>
            <!-- // thumb-event -->
            <NuxtLink class="btn-link" to="/event/detail">
              <span class="offscreen">바로가기</span>
            </NuxtLink>
          </li>
          <li class="item">
            <!-- thumb-event -->
            <div class="thumb-event">
              <EThumbEventBox>
                <div class="right-group">
                  <span class="event-badge-white-md">
                    <span class="text">참여중</span>
                  </span>
                </div>
                <template #thumb>
                  <img src="/assets/images/temp/temp_banner_service_1.png" alt="이벤트명 이미지">
                </template>
              </EThumbEventBox>
              <div class="info-box">
                <ETit type="cont">
                  오늘도 하루하루 행복한 세븐일레븐 앱과 함께 길어질 시 한줄 말줄임 됩니다 오늘도 하루하루 행복한 세븐일레븐 앱과 함께 길어질 시 한줄 말줄임 됩니다
                </ETit>
                <div class="date-group">
                  <EBadge color="orange" size="md" badge-text="D-26" />
                  <p class="stext-lg-gray70">
                    2024.06.29 ~ 2024.07.31
                  </p>
                </div>
              </div>
            </div>
            <!-- // thumb-event -->
            <NuxtLink class="btn-link" to="/event/detail">
              <span class="offscreen">바로가기</span>
            </NuxtLink>
          </li>
          <li class="item">
            <!-- thumb-event -->
            <div class="thumb-event">
              <EThumbEventBox>
                <template #thumb>
                  <img src="/assets/images/temp/temp_banner_service_1.png" alt="이벤트명 이미지">
                </template>
              </EThumbEventBox>
              <div class="info-box">
                <ETit type="cont">
                  오늘도 하루하루 행복한 세븐일레븐 앱과 함께 길어질 시 한줄 말줄임 됩니다 오늘도 하루하루 행복한 세븐일레븐 앱과 함께 길어질 시 한줄 말줄임 됩니다
                </ETit>
                <div class="date-group">
                  <EBadge color="orange" size="md" badge-text="D-26" />
                  <p class="stext-lg-gray70">
                    2024.06.29 ~ 2024.07.31
                  </p>
                </div>
              </div>
            </div>
            <!-- // thumb-event -->
            <NuxtLink class="btn-link" to="/event/detail">
              <span class="offscreen">바로가기</span>
            </NuxtLink>
          </li>
          <li class="item">
            <!-- thumb-event -->
            <div class="thumb-event">
              <EThumbEventBox dim="19">
                <template #thumb>
                  <img src="/assets/images/temp/temp_banner_service_1.png" alt="성인인증이 필요한 이벤트 이미지">
                </template>
              </EThumbEventBox>
              <div class="info-box">
                <ETit type="cont">
                  오늘도 하루하루 행복한 세븐일레븐 앱과 함께 길어질 시 한줄 말줄임 됩니다 오늘도 하루하루 행복한 세븐일레븐 앱과 함께 길어질 시 한줄 말줄임 됩니다
                </ETit>
                <div class="date-group">
                  <EBadge color="orange" size="md" badge-text="D-26" />
                  <p class="stext-lg-gray70">
                    2024.06.29 ~ 2024.07.31
                  </p>
                </div>
              </div>
            </div>
            <!-- // thumb-event -->
            <!-- 연령제한 회원 기획전 경로 이동 CASE 01 : 성인인 경우 -->
            <NuxtLink class="btn-link" to="/event/detail">
              <span class="offscreen">바로가기</span>
            </NuxtLink>
            <!-- // 연령제한 회원 기획전 경로 이동 CASE 01 : 성인인 경우 -->
            <!-- 연령제한 회원 기획전 경로 이동 CASE 02 : 19세 미만인 경우 -->
            <!-- <button type="button" class="btn-link">
              <span class="offscreen">19세 미만 접근제한</span>
            </button> -->
            <!-- // 연령제한 회원 기획전 경로 이동 CASE 02 : 19세 미만인 경우 -->
          </li>
        </RowListWrap>
        <InfoGuideWrap
          v-if="isNoData"
          type="no-data"
          name="event"
          desc="참여중인 이벤트가 없습니다."
        />
      </ContBox>
    </ContWrap>
  </EventHomeTab>
</template>

<script setup lang="ts">
definePageMeta({
  title: "이벤트",
  hideRightHeader: ["home"],
});

const isData = ref(true);
const isNoData = ref(true);
</script>

<style lang="scss" scoped>

</style>
