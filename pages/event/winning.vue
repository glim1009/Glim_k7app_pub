<template>
  <EventHomeTab>
    <ContWrap class="side-zero" in-top="sm">
      <TabWrap class="justify-tab" fir-active="winningAll">
        <template #tabs="{ activeTab, setActiveTab }">
          <ul class="tab-list">
            <li class="tab-item">
              <button
                type="button" class="tab-link"
                :class="{ 'is-active': activeTab === 'winningAll' }"
                @click="setActiveTab('winningAll')"
              >
                <span class="tab-text">전체</span>
              </button>
            </li>
            <li class="tab-item">
              <!-- CASE 01 : 미로그인 시 로그인 화면 이동 버튼 노출 -->
              <!-- <NuxtLink
                class="tab-link"
                to="/member"
              >
                <span class="tab-text">내가 응모한 이벤트</span>
              </NuxtLink> -->
              <!-- // CASE 01 : 미로그인 시 로그인 화면 이동 버튼 노출 -->
              <!-- CASE 02 : 로그인 시 탭 버튼 노출 -->
              <button
                type="button" class="tab-link"
                :class="{ 'is-active': activeTab === 'myWinning' }"
                @click="setActiveTab('myWinning')"
              >
                <span class="tab-text">내가 응모한 이벤트</span>
              </button>
              <!-- // CASE 02 : 로그인 시 탭 버튼 노출 -->
            </li>
          </ul>
        </template>
        <template #default="{ activeTab }">
          <ContWrap v-if="activeTab === 'winningAll'">
            <ContBox>
              <RowListWrap v-if="isData" gap="xl">
                <li class="item">
                  <!-- thumb-event -->
                  <div class="thumb-event">
                    <EThumbEventBox>
                      <div class="right-group">
                        <span class="event-badge-white-md">
                          <span class="text">응모중</span>
                        </span>
                      </div>
                      <template #thumb>
                        <img src="/assets/images/temp/temp_banner_service_1.png" alt="당첨자발표 게시글 제목 이미지">
                      </template>
                    </EThumbEventBox>
                    <div class="info-box">
                      <ETit type="cont">
                        오늘도 하루하루 행복한 세븐일레븐 앱과 함께 길어질 시 한줄 말줄임 됩니다 오늘도 하루하루 행복한 세븐일레븐 앱과 함께 길어질 시 한줄 말줄임 됩니다
                      </ETit>
                      <div class="bar-group">
                        <span class="bar-text">발표일 2024.08.01</span>
                        <span class="bar-text">2024.07.01 ~ 2024.07.31</span>
                      </div>
                    </div>
                  </div>
                  <!-- // thumb-event -->
                  <NuxtLink class="btn-link" to="/event/detail/winning">
                    <span class="offscreen">바로가기</span>
                  </NuxtLink>
                </li>
                <li class="item">
                  <!-- thumb-event -->
                  <div class="thumb-event">
                    <EThumbEventBox>
                      <template #thumb>
                        <img src="/assets/images/temp/temp_banner_service_1.png" alt="당첨자발표 게시글 제목 이미지">
                      </template>
                    </EThumbEventBox>
                    <div class="info-box">
                      <ETit type="cont">
                        오늘도 하루하루 행복한 세븐일레븐 앱과 함께 길어질 시 한줄 말줄임 됩니다 오늘도 하루하루 행복한 세븐일레븐 앱과 함께 길어질 시 한줄 말줄임 됩니다
                      </ETit>
                      <div class="bar-group">
                        <span class="bar-text">발표일 2024.08.01</span>
                        <span class="bar-text">2024.07.01 ~ 2024.07.31</span>
                      </div>
                    </div>
                  </div>
                  <!-- // thumb-event -->
                  <NuxtLink class="btn-link" to="/event/detail/winning">
                    <span class="offscreen">바로가기</span>
                  </NuxtLink>
                </li>
                <li class="item">
                  <!-- thumb-event -->
                  <div class="thumb-event">
                    <EThumbEventBox>
                      <template #thumb>
                        <img src="/assets/images/temp/temp_banner_service_1.png" alt="당첨자발표 게시글 제목 이미지">
                      </template>
                    </EThumbEventBox>
                    <div class="info-box">
                      <ETit type="cont">
                        오늘도 하루하루 행복한 세븐일레븐 앱과 함께 길어질 시 한줄 말줄임 됩니다 오늘도 하루하루 행복한 세븐일레븐 앱과 함께 길어질 시 한줄 말줄임 됩니다
                      </ETit>
                      <div class="bar-group">
                        <span class="bar-text">발표일 2024.08.01</span>
                        <span class="bar-text">2024.07.01 ~ 2024.07.31</span>
                      </div>
                    </div>
                  </div>
                  <!-- // thumb-event -->
                  <NuxtLink class="btn-link" to="/event/detail/winning">
                    <span class="offscreen">바로가기</span>
                  </NuxtLink>
                </li>
                <li class="item">
                  <!-- thumb-event -->
                  <div class="thumb-event">
                    <EThumbEventBox dim="19">
                      <template #thumb>
                        <img src="/assets/images/temp/temp_banner_service_1.png" alt="성인인증이 필요한 당첨자 발표 이미지">
                      </template>
                    </EThumbEventBox>
                    <div class="info-box">
                      <ETit type="cont">
                        오늘도 하루하루 행복한 세븐일레븐 앱과 함께 길어질 시 한줄 말줄임 됩니다 오늘도 하루하루 행복한 세븐일레븐 앱과 함께 길어질 시 한줄 말줄임 됩니다
                      </ETit>
                      <div class="bar-group">
                        <span class="bar-text">발표일 2024.08.01</span>
                        <span class="bar-text">2024.07.01 ~ 2024.07.31</span>
                      </div>
                    </div>
                  </div>
                  <!-- // thumb-event -->
                  <!-- 연령제한 회원 기획전 경로 이동 CASE 01 : 성인인 경우 -->
                  <NuxtLink class="btn-link" to="/event/winninng/detail">
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
                desc="당첨자 발표 목록이 없습니다."
              />
            </ContBox>
          </ContWrap>
          <ContWrap v-if="activeTab === 'myWinning'">
            <ContBox>
              <RowListWrap v-if="isData" gap="xl">
                <li class="item">
                  <!-- thumb-event -->
                  <div class="thumb-event">
                    <EThumbEventBox>
                      <div class="right-group">
                        <span class="event-badge-white-md">
                          <span class="text">응모중</span>
                        </span>
                      </div>
                      <template #thumb>
                        <img src="/assets/images/temp/temp_banner_service_1.png" alt="당첨자발표 게시글 제목 이미지">
                      </template>
                    </EThumbEventBox>
                    <div class="info-box">
                      <ETit type="cont">
                        오늘도 하루하루 행복한 세븐일레븐 앱과 함께 길어질 시 한줄 말줄임 됩니다 오늘도 하루하루 행복한 세븐일레븐 앱과 함께 길어질 시 한줄 말줄임 됩니다
                      </ETit>
                      <div class="bar-group">
                        <span class="bar-text">발표일 2024.08.01</span>
                        <span class="bar-text">2024.07.01 ~ 2024.07.31</span>
                      </div>
                    </div>
                  </div>
                  <!-- // thumb-event -->
                  <NuxtLink class="btn-link" to="/event/detail/winning">
                    <span class="offscreen">바로가기</span>
                  </NuxtLink>
                </li>
                <li class="item">
                  <!-- thumb-event -->
                  <div class="thumb-event">
                    <EThumbEventBox>
                      <div class="right-group">
                        <span class="event-badge-white-md">
                          <span class="text">응모중</span>
                        </span>
                      </div>
                      <template #thumb>
                        <img src="/assets/images/temp/temp_banner_service_1.png" alt="당첨자발표 게시글 제목 이미지">
                      </template>
                    </EThumbEventBox>
                    <div class="info-box">
                      <ETit type="cont">
                        오늘도 하루하루 행복한 세븐일레븐 앱과 함께 길어질 시 한줄 말줄임 됩니다 오늘도 하루하루 행복한 세븐일레븐 앱과 함께 길어질 시 한줄 말줄임 됩니다
                      </ETit>
                      <div class="bar-group">
                        <span class="bar-text">발표일 2024.08.01</span>
                        <span class="bar-text">2024.07.01 ~ 2024.07.31</span>
                      </div>
                    </div>
                  </div>
                  <!-- // thumb-event -->
                  <NuxtLink class="btn-link" to="/event/detail/winning">
                    <span class="offscreen">바로가기</span>
                  </NuxtLink>
                </li>
                <li class="item">
                  <!-- thumb-event -->
                  <div class="thumb-event">
                    <EThumbEventBox>
                      <div class="right-group">
                        <span class="event-badge-white-md">
                          <span class="text">응모중</span>
                        </span>
                      </div>
                      <template #thumb>
                        <img src="/assets/images/temp/temp_banner_service_1.png" alt="당첨자발표 게시글 제목 이미지">
                      </template>
                    </EThumbEventBox>
                    <div class="info-box">
                      <ETit type="cont">
                        오늘도 하루하루 행복한 세븐일레븐 앱과 함께 길어질 시 한줄 말줄임 됩니다 오늘도 하루하루 행복한 세븐일레븐 앱과 함께 길어질 시 한줄 말줄임 됩니다
                      </ETit>
                      <div class="bar-group">
                        <span class="bar-text">발표일 2024.08.01</span>
                        <span class="bar-text">2024.07.01 ~ 2024.07.31</span>
                      </div>
                    </div>
                  </div>
                  <!-- // thumb-event -->
                  <NuxtLink class="btn-link" to="/event/detail/winning">
                    <span class="offscreen">바로가기</span>
                  </NuxtLink>
                </li>
                <li class="item">
                  <!-- thumb-event -->
                  <div class="thumb-event">
                    <EThumbEventBox>
                      <div class="right-group">
                        <span class="event-badge-white-md">
                          <span class="text">응모중</span>
                        </span>
                      </div>
                      <template #thumb>
                        <img src="/assets/images/temp/temp_banner_service_1.png" alt="당첨자발표 게시글 제목 이미지">
                      </template>
                    </EThumbEventBox>
                    <div class="info-box">
                      <ETit type="cont">
                        오늘도 하루하루 행복한 세븐일레븐 앱과 함께 길어질 시 한줄 말줄임 됩니다 오늘도 하루하루 행복한 세븐일레븐 앱과 함께 길어질 시 한줄 말줄임 됩니다
                      </ETit>
                      <div class="bar-group">
                        <span class="bar-text">발표일 2024.08.01</span>
                        <span class="bar-text">2024.07.01 ~ 2024.07.31</span>
                      </div>
                    </div>
                  </div>
                  <!-- // thumb-event -->
                  <NuxtLink class="btn-link" to="/event/detail/winning">
                    <span class="offscreen">바로가기</span>
                  </NuxtLink>
                </li>
              </RowListWrap>
              <InfoGuideWrap
                v-if="isNoData"
                type="no-data"
                name="event"
                desc="당첨자 발표 목록이 없습니다."
              />
            </ContBox>
          </ContWrap>
        </template>
      </TabWrap>
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
