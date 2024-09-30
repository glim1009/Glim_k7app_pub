<template>
  <TabWrap v-if="!$route.path.includes('result')" class="justify-tab" fir-active="list">
    <template #tabs="{ activeTab, setActiveTab }">
      <SwiperAutoWrap type="line">
        <swiper-slide class="tab-item">
          <button
            type="button" class="tab-link"
            :class="{ 'is-active': activeTab === 'list' }"
            @click="setActiveTab('list')"
          >
            <span class="tab-text">목록보기</span>
          </button>
        </swiper-slide>
        <swiper-slide class="tab-item">
          <button
            type="button" class="tab-link"
            :class="{ 'is-active': activeTab === 'map' }"
            @click="setActiveTab('map')"
          >
            <span class="tab-text">지도보기</span>
          </button>
        </swiper-slide>
        <swiper-slide class="tab-item">
          <button
            type="button" class="tab-link"
            :class="{ 'is-active': activeTab === 'bookmark' }"
            @click="setActiveTab('bookmark')"
          >
            <span class="tab-text">단골매장</span>
          </button>
        </swiper-slide>
      </SwiperAutoWrap>
    </template>
    <template #default="{ activeTab }">
      <ContWrap v-if="activeTab === 'list'">
        <ContBox>
          <div v-if="isData || isFilterNoData" class="list-header">
            <FlexGroup align="center">
              <div class="flex-left">
                <div class="goods-group">
                  <EGoods val="8" unit="건" />
                </div>
              </div>
              <div class="flex-right">
                <!-- DESC :: 활성화시 is-active 클래스 추가 -->
                <button type="button" class="btn-filter is-active" @click="emitOpenFilter">
                  <EIco name="filter" color="gray" size="xs" />
                </button>
              </div>
            </FlexGroup>
          </div>
          <RowListWrap v-if="isData">
            <!-- CASE 01 : 매장 찾기인 경우 -->
            <li class="item">
              <ColorBox color="white" size="lg">
                <div class="box-info-header">
                  <FlexGroup align="start">
                    <div class="info-flex-left">
                      <ETBtn tag="a" size="lg" to="javascript:">
                        <span class="text">을지로 1가점</span>
                        <EIco name="arw-right" color="gray" size="sm" />
                      </ETBtn>
                      <div class="bar-group">
                        <span class="bar-text-sm fc-gray70">100M</span>
                        <span class="bar-text-sm fc-gray70">
                          <span class="rating">
                            <EIco name="rating" color="green" size="xs"><span class="offscreen">별점</span></EIco>
                            <span class="score-sm">4.0</span>
                          </span>
                        </span>
                      </div>
                    </div>
                    <div class="flex-right">
                      <!-- DESC :: 활성화시 is-active 클래스 추가 -->
                      <button type="button" class="btn-bookmark">
                        <EIco name="bookmark">
                          <span class="offscreen">관심 등록</span>
                        </EIco>
                      </button>
                      <button type="button" class="btn-share">
                        <EIco name="share">
                          <span class="offscreen">공유</span>
                        </EIco>
                      </button>
                    </div>
                  </FlexGroup>
                </div>
                <TableWrap type="info" gap="sm" size="md" table-name="매장 상세 정보">
                  <colgroup>
                    <col style="width: 55px;">
                    <col style="width: auto;">
                  </colgroup>
                  <tbody>
                  <tr>
                    <th scope="row">
                      주소
                    </th>
                    <td>
                      <span class="multi-ellipsis">서울특별시 종로구 12길 (관철동, 종로코아 빌딩) 서울특별시 종로구 12길 (관철동, 종로코아 빌딩) 서울특별시 종로구 12길 (관철동, 종로코아 빌딩) 서울특별시 종로구 12길 (관철동, 종로코아 빌딩)</span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      전화번호
                    </th>
                    <td>
                      <ETBtn tag="a" size="xs" type="underline" to="tel:02-1234-0000">
                        <span class="text fw-rgl">02-1234-0000</span>
                      </ETBtn>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      영업시간
                    </th>
                    <td>24시간</td>
                  </tr>
                  </tbody>
                </TableWrap>
                <BadgeGroup>
                  <EBadge color="light-gray" badge-text="24시간" />
                  <EBadge color="light-gray" badge-text="무인점포 자판기" />
                  <EBadge color="light-gray" badge-text="안전상비 의약품" />
                  <EBadge color="light-gray" badge-text="+2" />
                </BadgeGroup>
              </ColorBox>
            </li>
            <li class="item">
              <ColorBox color="white" size="lg">
                <div class="box-info-header">
                  <FlexGroup align="start">
                    <div class="info-flex-left">
                      <ETBtn tag="a" size="lg" to="javascript:">
                        <span class="text">을지로 1가점</span>
                        <EIco name="arw-right" color="gray" size="sm" />
                      </ETBtn>
                      <div class="bar-group">
                        <span class="bar-text-sm fc-gray70">100M</span>
                        <span class="bar-text-sm fc-gray70">
                          <span class="rating">
                            <EIco name="rating" color="green" size="xs"><span class="offscreen">별점</span></EIco>
                            <span class="score-sm">4.0</span>
                          </span>
                        </span>
                      </div>
                    </div>
                    <div class="flex-right">
                      <!-- DESC :: 활성화시 is-active 클래스 추가 -->
                      <button type="button" class="btn-bookmark">
                        <EIco name="bookmark">
                          <span class="offscreen">관심 등록</span>
                        </EIco>
                      </button>
                      <button type="button" class="btn-share">
                        <EIco name="share">
                          <span class="offscreen">공유</span>
                        </EIco>
                      </button>
                    </div>
                  </FlexGroup>
                </div>
                <TableWrap type="info" gap="sm" size="md" table-name="매장 상세 정보">
                  <colgroup>
                    <col style="width: 55px;">
                    <col style="width: auto;">
                  </colgroup>
                  <tbody>
                  <tr>
                    <th scope="row">
                      주소
                    </th>
                    <td>
                      <span class="multi-ellipsis">서울특별시 종로구 12길 (관철동, 종로코아 빌딩) 서울특별시 종로구 12길 (관철동, 종로코아 빌딩) 서울특별시 종로구 12길 (관철동, 종로코아 빌딩) 서울특별시 종로구 12길 (관철동, 종로코아 빌딩)</span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      전화번호
                    </th>
                    <td>
                      <ETBtn tag="a" size="xs" type="underline" to="tel:02-1234-0000">
                        <span class="text fw-rgl">02-1234-0000</span>
                      </ETBtn>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      영업시간
                    </th>
                    <td>24시간</td>
                  </tr>
                  </tbody>
                </TableWrap>
                <BadgeGroup>
                  <EBadge color="light-gray" badge-text="24시간" />
                  <EBadge color="light-gray" badge-text="무인점포 자판기" />
                  <EBadge color="light-gray" badge-text="안전상비 의약품" />
                  <EBadge color="light-gray" badge-text="+2" />
                </BadgeGroup>
              </ColorBox>
            </li>
            <!-- // CASE 01 : 매장 찾기인 경우 -->
            <!-- CASE 02 : 매장 선택인 경우 -->
            <li class="item">
              <ColorBox color="white" size="lg">
                <div class="box-info-header">
                  <FlexGroup align="start">
                    <div class="info-flex-left">
                      <ETit type="box" text="을지로 1가점" />
                      <div class="bar-group">
                        <span class="bar-text-sm fc-gray70">100M</span>
                        <span class="bar-text-sm fc-gray70">
                          <span class="rating">
                            <EIco name="rating" color="green" size="xs"><span class="offscreen">별점</span></EIco>
                            <span class="score-sm">4.0</span>
                          </span>
                        </span>
                      </div>
                    </div>
                    <div class="flex-right">
                      <!-- DESC :: 활성화시 is-active 클래스 추가 -->
                      <button type="button" class="btn-bookmark">
                        <EIco name="bookmark">
                          <span class="offscreen">관심 등록</span>
                        </EIco>
                      </button>
                      <button type="button" class="btn-share">
                        <EIco name="share">
                          <span class="offscreen">공유</span>
                        </EIco>
                      </button>
                    </div>
                  </FlexGroup>
                </div>
                <TableWrap type="info" gap="sm" size="md" table-name="매장 상세 정보">
                  <colgroup>
                    <col style="width: 55px;">
                    <col style="width: auto;">
                  </colgroup>
                  <tbody>
                  <tr>
                    <th scope="row">
                      주소
                    </th>
                    <td>
                      <span class="multi-ellipsis">서울특별시 종로구 12길 (관철동, 종로코아 빌딩) 서울특별시 종로구 12길 (관철동, 종로코아 빌딩) 서울특별시 종로구 12길 (관철동, 종로코아 빌딩) 서울특별시 종로구 12길 (관철동, 종로코아 빌딩)</span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      전화번호
                    </th>
                    <td>
                      <ETBtn tag="a" size="xs" type="underline" to="tel:02-1234-0000">
                        <span class="text fw-rgl">02-1234-0000</span>
                      </ETBtn>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      영업시간
                    </th>
                    <td>24시간</td>
                  </tr>
                  </tbody>
                </TableWrap>
                <BadgeGroup>
                  <EBadge color="light-gray" badge-text="24시간" />
                  <EBadge color="light-gray" badge-text="무인점포 자판기" />
                  <EBadge color="light-gray" badge-text="안전상비 의약품" />
                  <EBadge color="light-gray" badge-text="+2" />
                </BadgeGroup>
                <BtnWrap size="md">
                  <EBtn color="light-green" size="sm">
                    <EIco name="check" size="xs" color="green" />
                    <span class="text">매장 선택</span>
                  </EBtn>
                </BtnWrap>
              </ColorBox>
            </li>
            <li class="item">
              <ColorBox color="white" size="lg">
                <div class="box-info-header">
                  <FlexGroup align="start">
                    <div class="info-flex-left">
                      <ETit type="box" text="롯데백화점 잠실점 캐슬플라자" />
                      <div class="bar-group">
                        <span class="bar-text-sm fc-gray70">100M</span>
                        <span class="bar-text-sm fc-gray70">
                          <span class="rating">
                            <EIco name="rating" color="green" size="xs"><span class="offscreen">별점</span></EIco>
                            <span class="score-sm">4.0</span>
                          </span>
                        </span>
                      </div>
                    </div>
                    <div class="flex-right">
                      <!-- DESC :: 활성화시 is-active 클래스 추가 -->
                      <button type="button" class="btn-bookmark">
                        <EIco name="bookmark">
                          <span class="offscreen">관심 등록</span>
                        </EIco>
                      </button>
                      <button type="button" class="btn-share">
                        <EIco name="share">
                          <span class="offscreen">공유</span>
                        </EIco>
                      </button>
                    </div>
                  </FlexGroup>
                </div>
                <TableWrap type="info" gap="sm" size="md" table-name="매장 상세 정보">
                  <colgroup>
                    <col style="width: 55px;">
                    <col style="width: auto;">
                  </colgroup>
                  <tbody>
                  <tr>
                    <th scope="row">
                      주소
                    </th>
                    <td>
                      <span class="multi-ellipsis">서울특별시 종로구 12길 (관철동, 종로코아 빌딩) 서울특별시 종로구 12길 (관철동, 종로코아 빌딩) 서울특별시 종로구 12길 (관철동, 종로코아 빌딩) 서울특별시 종로구 12길 (관철동, 종로코아 빌딩)</span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      전화번호
                    </th>
                    <td>
                      <ETBtn tag="a" size="xs" type="underline" to="tel:02-1234-0000">
                        <span class="text fw-rgl">02-1234-0000</span>
                      </ETBtn>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      영업시간
                    </th>
                    <td>24시간</td>
                  </tr>
                  </tbody>
                </TableWrap>
                <BadgeGroup>
                  <EBadge color="light-gray" badge-text="24시간" />
                  <EBadge color="light-gray" badge-text="무인점포 자판기" />
                  <EBadge color="light-gray" badge-text="안전상비 의약품" />
                  <EBadge color="light-gray" badge-text="+2" />
                </BadgeGroup>
                <BtnWrap size="md">
                  <EBtn color="light-green" size="sm">
                    <EIco name="check" size="xs" color="green" />
                    <span class="text">매장 선택</span>
                  </EBtn>
                </BtnWrap>
              </ColorBox>
            </li>
            <!-- // CASE 02 : 매장 선택인 경우 -->
          </RowListWrap>
          <InfoGuideWrap
            v-if="isFilterNoData"
            type="no-data"
            name="filter-result"
            desc="선택한 조건의 결과가 없습니다."
            sub-desc="조건을 다시 선택해 주세요."
          />
          <InfoGuideWrap
            v-if="isNoData"
            type="no-data"
            name="store"
            desc="현 위치 내 매장 정보가 없습니다."
            sub-desc="지역/매장 명을 검색해 보세요."
          />
        </ContBox>
      </ContWrap>
      <ContWrap v-if="activeTab === 'map'" type="white">
        <ContBox>
          <div class="list-header">
            <FlexGroup align="center">
              <div class="flex-left">
                <div class="goods-group">
                  <EGoods val="8" unit="건" />
                </div>
              </div>
              <div class="flex-right">
                <!-- DESC :: 활성화시 is-active 클래스 추가 -->
                <button type="button" class="btn-filter is-active" @click="emitOpenFilter">
                  <EIco name="filter" color="gray" size="xs" />
                </button>
              </div>
            </FlexGroup>
          </div>
          <div class="map-wrap">
            <div class="map-area">
              <!-- 지도 임시 영역 -->
              <div style="height: 100%; background: rgba(255, 0, 0, .1);">
                <br><br><br>지도 API 영역 확인을 위한 임시 div입니다.

                <div class="map-content">
                  <!-- DESC :: 매장 정보 숨김 기능 처리 예시를 위한 임시 버튼입니다. 개발시 해당 EBtn 삭제 후 작업해 주세요. -->
                  <EBtn color="gray" size="xs" style="position: absolute; left: 0; top: 0" @click="hideStoreInfo">
                    <span class="text">매장 정보 숨김</span>
                  </EBtn>

                  <!-- 이 지역 재검색 버튼 -->
                  <EBtn color="line-light-gray" size="sm" class="btn-reset">
                    <EIco name="reset" color="gray" size="sm" />
                    <span class="text">이 지역 재검색</span>
                  </EBtn>
                  <!-- // 이 지역 재검색 버튼 -->

                  <!-- 재고정보 pin 버튼 repeat -->
                  <button
                    :class="{ 'is-active': activeButton === 1 }"
                    class="btn-store-pin"
                    style="right: 218px; top: 235px"
                    @click="ActivePin(1)"
                  >
                    <span class="text">상봉본점</span>
                  </button>
                  <!-- 재고정보 pin 버튼 repeat -->
                  <!-- 재고정보 pin 버튼 repeat || disabled -->
                  <button
                    :class="{ 'is-active': activeButton === 2 }"
                    class="btn-store-pin"
                    style="right: 163px; top: 88px"
                    @click="ActivePin(2)"
                  >
                    <span class="text">상봉코스트코점</span>
                  </button>
                  <!-- // 재고정보 pin 버튼 repeat -->
                  <!-- 재고정보 pin 버튼 repeat -->
                  <button
                    :class="{ 'is-active': activeButton === 3 }"
                    class="btn-store-pin"
                    style="right: 44px; top: 234px"
                    @click="ActivePin(3)"
                  >
                    <span class="text">면목점</span>
                  </button>
                  <!-- 재고정보 pin repeat -->
                  <!-- // 재고정보 pin 버튼 repeat -->
                  <button
                    :class="{ 'is-active': activeButton === 4 }"
                    class="btn-store-pin"
                    style="right: 165px; top: 498px"
                    @click="ActivePin(4)"
                  >
                    <span class="text">면목그린점</span>
                  </button>
                  <!-- // 재고정보 pin repeat -->
                  <!-- 재고정보 pin 버튼 repeat -->
                  <button
                    :class="{ 'is-active': activeButton === 6 }"
                    class="btn-store-pin"
                    style="right: 273px; top: 398px"
                    @click="ActivePin(6)"
                  >
                    <span class="text">면목사랑점</span>
                  </button>
                  <!-- // 재고정보 pin repeat -->

                  <!-- 현 위치 이동 버튼 -->
                  <button type="button" class="btn-access-location">
                    <EIco name="access-location" color="gray" />
                    <span class="offscreen">현 위치로 이동</span>
                  </button>
                  <!-- // 현 위치 이동 버튼 -->

                  <!-- 매장 세부 정보 컨텐츠 -->
                  <ColorBox color="white" size="lg" :class="{ 'is-visible': activeButton }">
                    <div class="box-info-header">
                      <FlexGroup align="start">
                        <div class="info-flex-left">
                          <!-- 매장명 노출 CASE 01: 매장 찾기인 경우 -->
                          <ETBtn tag="a" size="lg" to="javascript:">
                            <span class="text">을지로 1가점</span>
                            <EIco name="arw-right" color="gray" size="sm" />
                          </ETBtn>
                          <!-- 매장명 노출 CASE 01: 매장 찾기인 경우 -->
                          <!-- 매장명 노출 CASE 02: 매장 선택인 경우 -->
                          <!-- <ETit text="을지로 1가점" type="box" /> -->
                          <!-- 매장명 노출 CASE 02: 매장 선택인 경우 -->
                          <div class="bar-group">
                            <span class="bar-text-sm fc-gray70">100M</span>
                            <span class="bar-text-sm fc-gray70">
                              <span class="rating">
                                <EIco name="rating" color="green" size="xs"><span class="offscreen">별점</span></EIco>
                                <span class="score-sm">4.0</span>
                              </span>
                            </span>
                          </div>
                        </div>
                        <div class="flex-right">
                          <!-- DESC :: 활성화시 is-active 클래스 추가 -->
                          <button type="button" class="btn-bookmark">
                            <EIco name="bookmark">
                              <span class="offscreen">즐겨찾기 등록</span>
                            </EIco>
                          </button>
                          <button type="button" class="btn-share">
                            <EIco name="share">
                              <span class="offscreen">공유</span>
                            </EIco>
                          </button>
                        </div>
                      </FlexGroup>
                    </div>
                    <TableWrap type="info" gap="sm" size="md" table-name="매장 상세 정보">
                      <colgroup>
                        <col style="width: 55px;">
                        <col style="width: auto;">
                      </colgroup>
                      <tbody>
                      <tr>
                        <th scope="row">
                          주소
                        </th>
                        <td>
                          <span class="multi-ellipsis">서울특별시 종로구 12길 (관철동, 종로코아 빌딩) 서울특별시 종로구 12길 (관철동, 종로코아 빌딩) 서울특별시 종로구 12길 (관철동, 종로코아 빌딩) 서울특별시 종로구 12길 (관철동, 종로코아 빌딩)</span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          전화번호
                        </th>
                        <td>
                          <ETBtn tag="a" size="xs" type="underline" to="tel:01-1234-0000">
                            <span class="text fw-rgl">02-1234-0000</span>
                          </ETBtn>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          영업시간
                        </th>
                        <td>24시간</td>
                      </tr>
                      </tbody>
                    </TableWrap>
                    <BadgeGroup>
                      <EBadge color="light-gray" badge-text="24시간" />
                      <EBadge color="light-gray" badge-text="무인점포 자판기" />
                      <EBadge color="light-gray" badge-text="안전상비 의약품" />
                      <EBadge color="light-gray" badge-text="+2" />
                    </BadgeGroup>
                    <!-- 버튼 노출 CASE 02: 매장 선택인 경우 -->
                    <BtnWrap size="md">
                      <EBtn color="light-green" size="sm">
                        <EIco name="check" color="green" size="xs" />
                        <span class="text">매장 선택</span>
                      </EBtn>
                    </BtnWrap>
                    <!-- // 버튼 노출 CASE 02: 매장 선택인 경우 -->
                  </ColorBox>
                  <!-- // 매장 세부 정보 컨텐츠 -->
                </div>
              </div>
            </div>
            <!-- // 지도 임시 영역 -->
          </div>
        </ContBox>
      </ContWrap>
      <ContWrap v-if="activeTab === 'bookmark'">
        <ContBox>
          <div v-if="isData || isFilterNoData" class="list-header">
            <FlexGroup align="center">
              <div class="flex-left">
                <div class="goods-group">
                  <EGoods val="8" unit="건" />
                </div>
              </div>
              <div class="flex-right">
                <!-- DESC :: 활성화시 is-active 클래스 추가 -->
                <button type="button" class="btn-filter is-active" @click="emitOpenFilter">
                  <EIco name="filter" color="gray" size="xs" />
                </button>
              </div>
            </FlexGroup>
          </div>
          <RowListWrap v-if="isData">
            <!-- CASE 01 : 매장 찾기인 경우 -->
            <li class="item">
              <ColorBox color="white" size="lg">
                <div class="box-info-header">
                  <FlexGroup align="start">
                    <div class="info-flex-left">
                      <ETBtn tag="a" size="lg" to="javascript:">
                        <span class="text">을지로 1가점</span>
                        <EIco name="arw-right" color="gray" size="sm" />
                      </ETBtn>
                      <div class="bar-group">
                        <span class="bar-text-sm fc-gray70">100M</span>
                        <span class="bar-text-sm fc-gray70">
                          <span class="rating">
                            <EIco name="rating" color="green" size="xs"><span class="offscreen">별점</span></EIco>
                            <span class="score-sm">4.0</span>
                          </span>
                        </span>
                      </div>
                    </div>
                    <div class="flex-right">
                      <!-- DESC :: 활성화시 is-active 클래스 추가 -->
                      <button type="button" class="btn-bookmark is-active">
                        <EIco name="bookmark">
                          <span class="offscreen">관심 등록</span>
                        </EIco>
                      </button>
                      <button type="button" class="btn-share">
                        <EIco name="share">
                          <span class="offscreen">공유</span>
                        </EIco>
                      </button>
                    </div>
                  </FlexGroup>
                </div>
                <TableWrap type="info" gap="sm" size="md" table-name="매장 상세 정보">
                  <colgroup>
                    <col style="width: 55px;">
                    <col style="width: auto;">
                  </colgroup>
                  <tbody>
                  <tr>
                    <th scope="row">
                      주소
                    </th>
                    <td>
                      <span class="multi-ellipsis">서울특별시 종로구 12길 (관철동, 종로코아 빌딩) 서울특별시 종로구 12길 (관철동, 종로코아 빌딩) 서울특별시 종로구 12길 (관철동, 종로코아 빌딩) 서울특별시 종로구 12길 (관철동, 종로코아 빌딩)</span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      전화번호
                    </th>
                    <td>
                      <ETBtn tag="a" size="xs" type="underline" to="tel:02-1234-0000">
                        <span class="text fw-rgl">02-1234-0000</span>
                      </ETBtn>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      영업시간
                    </th>
                    <td>24시간</td>
                  </tr>
                  </tbody>
                </TableWrap>
                <BadgeGroup>
                  <EBadge color="light-gray" badge-text="24시간" />
                  <EBadge color="light-gray" badge-text="무인점포 자판기" />
                  <EBadge color="light-gray" badge-text="안전상비 의약품" />
                  <EBadge color="light-gray" badge-text="+2" />
                </BadgeGroup>
              </ColorBox>
            </li>
            <li class="item">
              <ColorBox color="white" size="lg">
                <div class="box-info-header">
                  <FlexGroup align="start">
                    <div class="info-flex-left">
                      <ETBtn tag="a" size="lg" to="javascript:">
                        <span class="text">을지로 1가점</span>
                        <EIco name="arw-right" color="gray" size="sm" />
                      </ETBtn>
                      <div class="bar-group">
                        <span class="bar-text-sm fc-gray70">100M</span>
                        <span class="bar-text-sm fc-gray70">
                          <span class="rating">
                            <EIco name="rating" color="green" size="xs"><span class="offscreen">별점</span></EIco>
                            <span class="score-sm">4.0</span>
                          </span>
                        </span>
                      </div>
                    </div>
                    <div class="flex-right">
                      <!-- DESC :: 활성화시 is-active 클래스 추가 -->
                      <button type="button" class="btn-bookmark is-active">
                        <EIco name="bookmark">
                          <span class="offscreen">관심 등록</span>
                        </EIco>
                      </button>
                      <button type="button" class="btn-share">
                        <EIco name="share">
                          <span class="offscreen">공유</span>
                        </EIco>
                      </button>
                    </div>
                  </FlexGroup>
                </div>
                <TableWrap type="info" gap="sm" size="md" table-name="매장 상세 정보">
                  <colgroup>
                    <col style="width: 55px;">
                    <col style="width: auto;">
                  </colgroup>
                  <tbody>
                  <tr>
                    <th scope="row">
                      주소
                    </th>
                    <td>
                      <span class="multi-ellipsis">서울특별시 종로구 12길 (관철동, 종로코아 빌딩) 서울특별시 종로구 12길 (관철동, 종로코아 빌딩) 서울특별시 종로구 12길 (관철동, 종로코아 빌딩) 서울특별시 종로구 12길 (관철동, 종로코아 빌딩)</span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      전화번호
                    </th>
                    <td>
                      <ETBtn tag="a" size="xs" type="underline" to="tel:02-1234-0000">
                        <span class="text fw-rgl">02-1234-0000</span>
                      </ETBtn>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      영업시간
                    </th>
                    <td>24시간</td>
                  </tr>
                  </tbody>
                </TableWrap>
                <BadgeGroup>
                  <EBadge color="light-gray" badge-text="24시간" />
                  <EBadge color="light-gray" badge-text="무인점포 자판기" />
                  <EBadge color="light-gray" badge-text="안전상비 의약품" />
                  <EBadge color="light-gray" badge-text="+2" />
                </BadgeGroup>
              </ColorBox>
            </li>
            <!-- // CASE 01 : 매장 찾기인 경우 -->
            <!-- CASE 02 : 매장 선택인 경우 -->
            <li class="item">
              <ColorBox color="white" size="lg">
                <div class="box-info-header">
                  <FlexGroup align="start">
                    <div class="info-flex-left">
                      <ETit type="box" text="을지로 1가점" />
                      <div class="bar-group">
                        <span class="bar-text-sm fc-gray70">100M</span>
                        <span class="bar-text-sm fc-gray70">
                          <span class="rating">
                            <EIco name="rating" color="green" size="xs"><span class="offscreen">별점</span></EIco>
                            <span class="score-sm">4.0</span>
                          </span>
                        </span>
                      </div>
                    </div>
                    <div class="flex-right">
                      <!-- DESC :: 활성화시 is-active 클래스 추가 -->
                      <button type="button" class="btn-bookmark is-active">
                        <EIco name="bookmark">
                          <span class="offscreen">관심 등록</span>
                        </EIco>
                      </button>
                      <button type="button" class="btn-share">
                        <EIco name="share">
                          <span class="offscreen">공유</span>
                        </EIco>
                      </button>
                    </div>
                  </FlexGroup>
                </div>
                <TableWrap type="info" gap="sm" size="md" table-name="매장 상세 정보">
                  <colgroup>
                    <col style="width: 55px;">
                    <col style="width: auto;">
                  </colgroup>
                  <tbody>
                  <tr>
                    <th scope="row">
                      주소
                    </th>
                    <td>
                      <span class="multi-ellipsis">서울특별시 종로구 12길 (관철동, 종로코아 빌딩) 서울특별시 종로구 12길 (관철동, 종로코아 빌딩) 서울특별시 종로구 12길 (관철동, 종로코아 빌딩) 서울특별시 종로구 12길 (관철동, 종로코아 빌딩)</span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      전화번호
                    </th>
                    <td>
                      <ETBtn tag="a" size="xs" type="underline" to="tel:02-1234-0000">
                        <span class="text fw-rgl">02-1234-0000</span>
                      </ETBtn>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      영업시간
                    </th>
                    <td>24시간</td>
                  </tr>
                  </tbody>
                </TableWrap>
                <BadgeGroup>
                  <EBadge color="light-gray" badge-text="24시간" />
                  <EBadge color="light-gray" badge-text="무인점포 자판기" />
                  <EBadge color="light-gray" badge-text="안전상비 의약품" />
                  <EBadge color="light-gray" badge-text="+2" />
                </BadgeGroup>
                <BtnWrap size="md">
                  <EBtn color="light-green" size="sm">
                    <EIco name="check" size="xs" color="green" />
                    <span class="text">매장 선택</span>
                  </EBtn>
                </BtnWrap>
              </ColorBox>
            </li>
            <li class="item">
              <ColorBox color="white" size="lg">
                <div class="box-info-header">
                  <FlexGroup align="start">
                    <div class="info-flex-left">
                      <ETit type="box" text="롯데백화점 잠실점 캐슬플라자" />
                      <div class="bar-group">
                        <span class="bar-text-sm fc-gray70">100M</span>
                        <span class="bar-text-sm fc-gray70">
                          <span class="rating">
                            <EIco name="rating" color="green" size="xs"><span class="offscreen">별점</span></EIco>
                            <span class="score-sm">4.0</span>
                          </span>
                        </span>
                      </div>
                    </div>
                    <div class="flex-right">
                      <!-- DESC :: 활성화시 is-active 클래스 추가 -->
                      <button type="button" class="btn-bookmark is-active">
                        <EIco name="bookmark">
                          <span class="offscreen">관심 등록</span>
                        </EIco>
                      </button>
                      <button type="button" class="btn-share">
                        <EIco name="share">
                          <span class="offscreen">공유</span>
                        </EIco>
                      </button>
                    </div>
                  </FlexGroup>
                </div>
                <TableWrap type="info" gap="sm" size="md" table-name="매장 상세 정보">
                  <colgroup>
                    <col style="width: 55px;">
                    <col style="width: auto;">
                  </colgroup>
                  <tbody>
                  <tr>
                    <th scope="row">
                      주소
                    </th>
                    <td>
                      <span class="multi-ellipsis">서울특별시 종로구 12길 (관철동, 종로코아 빌딩) 서울특별시 종로구 12길 (관철동, 종로코아 빌딩) 서울특별시 종로구 12길 (관철동, 종로코아 빌딩) 서울특별시 종로구 12길 (관철동, 종로코아 빌딩)</span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      전화번호
                    </th>
                    <td>
                      <ETBtn tag="a" size="xs" type="underline" to="tel:02-1234-0000">
                        <span class="text fw-rgl">02-1234-0000</span>
                      </ETBtn>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      영업시간
                    </th>
                    <td>24시간</td>
                  </tr>
                  </tbody>
                </TableWrap>
                <BadgeGroup>
                  <EBadge color="light-gray" badge-text="24시간" />
                  <EBadge color="light-gray" badge-text="무인점포 자판기" />
                  <EBadge color="light-gray" badge-text="안전상비 의약품" />
                  <EBadge color="light-gray" badge-text="+2" />
                </BadgeGroup>
                <BtnWrap size="md">
                  <EBtn color="light-green" size="sm">
                    <EIco name="check" size="xs" color="green" />
                    <span class="text">매장 선택</span>
                  </EBtn>
                </BtnWrap>
              </ColorBox>
            </li>
            <!-- // CASE 02 : 매장 선택인 경우 -->
          </RowListWrap>
          <InfoGuideWrap
            v-if="isFilterNoData"
            type="no-data"
            name="filter-result"
            desc="선택한 조건의 결과가 없습니다."
            sub-desc="조건을 다시 선택해 주세요."
          />
          <InfoGuideWrap
            v-if="isNoData"
            type="no-data"
            name="store"
            desc="설정한 단골 매장이 없습니다."
            sub-desc="단골 매장을 설정해 주세요."
          />
        </ContBox>
      </ContWrap>
    </template>
  </TabWrap>
</template>

<script setup lang="ts">
const emit = defineEmits(["openFilter"]);

const isData = ref(true);
const isFilterNoData = ref(false);
const isNoData = ref(false);
const activeButton = ref<number | boolean | null>(null);
const { $showToast } = useNuxtApp();

// 즐겨찾기 등록한 경우 토스트 노출
/* $showToast({ msg: '단골매장이 등록되었습니다.' }); */
// 즐겨찾기 등록 해지한 경우 토스트 노출
/* $showToast({ msg: '단골매장 등록이 해지되었습니다.' }); */

function ActivePin(buttonIndex: number) {
  activeButton.value = buttonIndex;
}

function hideStoreInfo() {
  if (activeButton.value)
    activeButton.value = false;
}

// 필터팝업 : open
const emitOpenFilter = () => {
  emit("openFilter");
};
</script>

<style lang="scss" scoped>

</style>
