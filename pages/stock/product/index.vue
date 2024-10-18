<template>
  <ContWrap type="white">
    <ContBox>
      <CtitleWrap>
        <FlexGroup>
          <div class="flex-left">
            <ETit type="cont">
              최근 검색어
            </ETit>
          </div>
          <div class="flex-right">
            <EBtn size="xs" color="line-light-gray">
              <EIco name="delete" color="gray" size="xs" />
              <span class="text">전체삭제</span>
            </EBtn>
          </div>
        </FlexGroup>
      </CtitleWrap>
      <!-- 최근 검색어 데이터 있음 -->
      <div v-if="isRecentSearchData" class="tag-md-group">
        <!-- tag-md -->
        <span class="tag-md">
          <NuxtLink to="javascript:" class="text">초콜릿</NuxtLink>
          <button type="button" class="btn-delete">
            <EIco name="close" color="gray" size="xs">
              <span class="offscreen">최근 검색어 삭제</span>
            </EIco>
          </button>
        </span>
        <!-- // tag-md -->
        <!-- tag-md -->
        <span class="tag-md">
           <NuxtLink to="javascript:" class="text">카덴양념장어구이덮밥...</NuxtLink>
          <button type="button" class="btn-delete">
            <EIco name="close" color="gray" size="xs">
              <span class="offscreen">최근 검색어 삭제</span>
            </EIco>
          </button>
        </span>
        <!-- // tag-md -->
        <!-- tag-md -->
        <span class="tag-md">
           <NuxtLink to="javascript:" class="text">7-SELECT</NuxtLink>
          <button type="button" class="btn-delete">
            <EIco name="close" color="gray" size="xs">
              <span class="offscreen">최근 검색어 삭제</span>
            </EIco>
          </button>
        </span>
        <!-- // tag-md -->
        <!-- tag-md -->
        <span class="tag-md">
          <NuxtLink to="javascript:" class="text">삼각김밥</NuxtLink>
          <button type="button" class="btn-delete">
            <EIco name="close" color="gray" size="xs">
              <span class="offscreen">최근 검색어 삭제</span>
            </EIco>
          </button>
        </span>
        <!-- // tag-md -->
        <!-- tag-md -->
        <span class="tag-md">
          <NuxtLink to="javascript:" class="text">제로콜라</NuxtLink>
          <button type="button" class="btn-delete">
            <EIco name="close" color="gray" size="xs">
              <span class="offscreen">최근 검색어 삭제</span>
            </EIco>
          </button>
        </span>
        <!-- // tag-md -->
        <!-- tag-md -->
        <span class="tag-md">
          <NuxtLink to="javascript:" class="text">10자 노출 이후 말줄임 처리 됩니다...</NuxtLink>
          <button type="button" class="btn-delete">
            <EIco name="close" color="gray" size="xs">
              <span class="offscreen">최근 검색어 삭제</span>
            </EIco>
          </button>
        </span>
        <!-- // tag-md -->
      </div>
      <!-- // 최근 검색어 데이터 있음 -->
      <!-- 최근 검색어 데이터 없음 -->
      <p v-if="isRecentSearchNoData" class="stext-lg fw-md ta-center">
        최근 검색어가 없습니다.
      </p>
      <!-- // 최근 검색어 데이터 없음 -->
    </ContBox>
  </ContWrap>
  <ContWrap type="divider" in-top="lg">
    <ContBox>
      <CtitleWrap size="lg">
        <FlexGroup>
          <div class="flex-left">
            <ETit type="cont">
              인기 검색어
            </ETit>
          </div>
          <div class="flex-right">
            <span class="stext">08:00 기준</span>
          </div>
        </FlexGroup>
      </CtitleWrap>
      <SContColWrap>
        <SContLineBox>
          <RowListWrap class="search-rank">
            <li class="item-search-rank">
              <FlexGroup>
                <div class="flex-rank-left">
                  <span class="rank">1</span>
                  <span class="keyword">바인더</span>
                </div>
                <div class="flex-rank-right">
                  <span class="rank-status up">
                    1
                    <span class="offscreen">등수 오름</span>
                  </span>
                </div>
              </FlexGroup>
              <NuxtLink class="btn-link" to="/search/result">
                <span class="offscreen">검색결과 바로가기</span>
              </NuxtLink>
            </li>
            <li class="item-search-rank">
              <FlexGroup>
                <div class="flex-rank-left">
                  <span class="rank">2</span>
                  <span class="keyword">KBO</span>
                </div>
                <div class="flex-rank-right">
                  <span class="rank-status">
                    <span class="offscreen">등수 유지</span>
                  </span>
                </div>
              </FlexGroup>
              <NuxtLink class="btn-link" to="/search/result">
                <span class="offscreen">검색결과 바로가기</span>
              </NuxtLink>
            </li>
            <li class="item-search-rank">
              <FlexGroup>
                <div class="flex-rank-left">
                  <span class="rank">3</span>
                  <span class="keyword">초콜릿</span>
                </div>
                <div class="flex-rank-right">
                  <span class="rank-status down">
                    3
                    <span class="offscreen">등수내림</span>
                  </span>
                </div>
              </FlexGroup>
              <NuxtLink class="btn-link" to="/search/result">
                <span class="offscreen">검색결과 바로가기</span>
              </NuxtLink>
            </li>
            <li class="item-search-rank">
              <FlexGroup>
                <div class="flex-rank-left">
                  <span class="rank">4</span>
                  <span class="keyword">검색어</span>
                </div>
                <div class="flex-rank-right">
                  <span class="rank-status">
                    <span class="offscreen">등수 유지</span>
                  </span>
                </div>
              </FlexGroup>
              <NuxtLink class="btn-link" to="/search/result">
                <span class="offscreen">검색결과 바로가기</span>
              </NuxtLink>
            </li>
            <li class="item-search-rank">
              <FlexGroup>
                <div class="flex-rank-left">
                  <span class="rank">5</span>
                  <span class="keyword">검색어텍스트...</span>
                </div>
                <div class="flex-rank-right">
                  <span class="rank-status">
                    <span class="offscreen">등수 유지</span>
                  </span>
                </div>
              </FlexGroup>
              <NuxtLink class="btn-link" to="/search/result">
                <span class="offscreen">검색결과 바로가기</span>
              </NuxtLink>
            </li>
          </RowListWrap>
        </SContLineBox>
        <SContLineBox>
          <RowListWrap class="search-rank">
            <li class="item-search-rank">
              <FlexGroup>
                <div class="flex-rank-left">
                  <span class="rank">6</span>
                  <span class="keyword">검색어</span>
                </div>
                <div class="flex-rank-right">
                  <span class="rank-status">
                    <span class="offscreen">등수 유지</span>
                  </span>
                </div>
              </FlexGroup>
              <NuxtLink class="btn-link" to="/search/result">
                <span class="offscreen">검색결과 바로가기</span>
              </NuxtLink>
            </li>
            <li class="item-search-rank">
              <FlexGroup>
                <div class="flex-rank-left">
                  <span class="rank">7</span>
                  <span class="keyword">검색어텍스트...</span>
                </div>
                <div class="flex-rank-right">
                  <span class="rank-status">
                    <span class="offscreen">등수 유지</span>
                  </span>
                </div>
              </FlexGroup>
              <NuxtLink class="btn-link" to="/search/result">
                <span class="offscreen">검색결과 바로가기</span>
              </NuxtLink>
            </li>
            <li class="item-search-rank">
              <FlexGroup>
                <div class="flex-rank-left">
                  <span class="rank">8</span>
                  <span class="keyword">검색어텍스트...</span>
                </div>
                <div class="flex-rank-right">
                  <span class="rank-status">
                    <span class="offscreen">등수 유지</span>
                  </span>
                </div>
              </FlexGroup>
              <NuxtLink class="btn-link" to="/search/result">
                <span class="offscreen">검색결과 바로가기</span>
              </NuxtLink>
            </li>
            <li class="item-search-rank">
              <FlexGroup>
                <div class="flex-rank-left">
                  <span class="rank">9</span>
                  <span class="keyword">검색어텍스트...</span>
                </div>
                <div class="flex-rank-right">
                  <span class="rank-status">
                    <span class="offscreen">등수 유지</span>
                  </span>
                </div>
              </FlexGroup>
              <NuxtLink class="btn-link" to="/search/result">
                <span class="offscreen">검색결과 바로가기</span>
              </NuxtLink>
            </li>
            <li class="item-search-rank">
              <FlexGroup>
                <div class="flex-rank-left">
                  <span class="rank">10</span>
                  <span class="keyword">검색어말줄임텍...</span>
                </div>
                <div class="flex-rank-right">
                  <span class="rank-status">
                    <span class="offscreen">등수 유지</span>
                  </span>
                </div>
              </FlexGroup>
              <NuxtLink class="btn-link" to="/search/result">
                <span class="offscreen">검색결과 바로가기</span>
              </NuxtLink>
            </li>
          </RowListWrap>
        </SContLineBox>
      </SContColWrap>
    </ContBox>
  </ContWrap>
  <ContWrap type="divider" in-top="lg">
    <ContBox>
      <CtitleWrap>
        <ETit type="cont">
          이런 상품은 어떠세요?
        </ETit>
      </CtitleWrap>
      <SwiperAutoWrap gap="10" class="side-zero">
        <swiper-slide>
          <!-- thumb-prod -->
          <div class="thumb-prod">
            <!-- thumb-prod-2xl -->
            <EThumbProdBox size="2xl">
              <!-- DESC :: 활성화시 is-active 클래스 추가 -->
              <button type="button" class="btn-wish">
                <EIco name="wish" size="sm">
                  <span class="offscreen">관심 등록</span>
                </EIco>
              </button>
              <template #thumb>
                <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
              </template>
            </EThumbProdBox>
            <!-- // thumb-prod-2xl -->
            <div class="info-box">
              <BadgeGroup gap="md">
                <EBadge color="light-gray" size="sm" badge-text="BEST" />
              </BadgeGroup>
              <ETit type="prod">
                바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
              </ETit>
              <div class="goods-group">
                <EGoods type="origin" size="sm" val="3,000" unit="원" />
                <EGoods type="percent" size="md" val="10" unit="%" />
                <EGoods size="md" val="2,700" unit="원" />
              </div>
              <div class="rating">
                <EIco name="rating" color="gray50" size="xs">
                  <span class="offscreen">별점</span>
                </EIco>
                <span class="score-sm">4.0 (10)</span>
              </div>
            </div>
          </div>
          <!-- // thumb-prod -->
          <NuxtLink class="btn-link" to="javascript:">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </swiper-slide>
        <swiper-slide>
          <!-- thumb-prod -->
          <div class="thumb-prod">
            <!-- thumb-prod-2xl -->
            <EThumbProdBox size="2xl">
              <div class="left-group">
                <EBadge color="gray" size="sm" badge-text="혜택" />
              </div>
              <!-- DESC :: 활성화시 is-active 클래스 추가 -->
              <button type="button" class="btn-wish">
                <EIco name="wish" size="sm">
                  <span class="offscreen">관심 등록</span>
                </EIco>
              </button>
              <template #thumb>
                <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
              </template>
            </EThumbProdBox>
            <!-- // thumb-prod-2xl -->
            <div class="info-box">
              <BadgeGroup gap="md">
                <EBadge color="light-gray" size="sm" badge-text="BEST" />
              </BadgeGroup>
              <ETit type="prod">
                바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
              </ETit>
              <div class="goods-group">
                <EGoods type="origin" size="sm" val="3,000" unit="원" />
                <EGoods type="percent" size="md" val="10" unit="%" />
                <EGoods size="md" val="2,700" unit="원" />
              </div>
              <div class="rating">
                <EIco name="rating" color="gray50" size="xs">
                  <span class="offscreen">별점</span>
                </EIco>
                <span class="score-sm">4.0 (10)</span>
              </div>
            </div>
          </div>
          <!-- // thumb-prod -->
          <NuxtLink class="btn-link" to="javascript:">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </swiper-slide>
        <swiper-slide>
          <!-- thumb-prod -->
          <div class="thumb-prod">
            <!-- thumb-prod-2xl -->
            <EThumbProdBox size="2xl">
              <!-- DESC :: 활성화시 is-active 클래스 추가 -->
              <button type="button" class="btn-wish">
                <EIco name="wish" size="sm">
                  <span class="offscreen">관심 등록</span>
                </EIco>
              </button>
            </EThumbProdBox>
            <!-- // thumb-prod-2xl -->
            <div class="info-box">
              <BadgeGroup gap="md">
                <EBadge color="light-gray" size="sm" badge-text="BEST" />
              </BadgeGroup>
              <ETit type="prod">
                바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
              </ETit>
              <div class="goods-group">
                <EGoods type="origin" size="sm" val="3,000" unit="원" />
                <EGoods type="percent" size="md" val="10" unit="%" />
                <EGoods size="md" val="2,700" unit="원" />
              </div>
              <div class="rating">
                <EIco name="rating" color="gray50" size="xs">
                  <span class="offscreen">별점</span>
                </EIco>
                <span class="score-sm">4.0 (10)</span>
              </div>
            </div>
          </div>
          <!-- // thumb-prod -->
          <NuxtLink class="btn-link" to="javascript:">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </swiper-slide>
        <swiper-slide>
          <!-- thumb-prod -->
          <div class="thumb-prod">
            <!-- thumb-prod-2xl -->
            <EThumbProdBox size="2xl">
              <div class="right-group">
                <EBadge color="red" size="sm" badge-text="19" />
              </div>
              <!-- DESC :: 활성화시 is-active 클래스 추가 -->
              <button type="button" class="btn-wish">
                <EIco name="wish" size="sm">
                  <span class="offscreen">관심 등록</span>
                </EIco>
              </button>
              <template #thumb>
                <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
              </template>
            </EThumbProdBox>
            <!-- // thumb-prod-2xl -->
            <div class="info-box">
              <BadgeGroup gap="md">
                <EBadge color="light-gray" size="sm" badge-text="BEST" />
              </BadgeGroup>
              <ETit type="prod">
                바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
              </ETit>
              <div class="goods-group">
                <EGoods type="origin" size="sm" val="3,000" unit="원" />
                <EGoods type="percent" size="md" val="10" unit="%" />
                <EGoods size="md" val="2,700" unit="원" />
              </div>
              <div class="rating">
                <EIco name="rating" color="gray50" size="xs">
                  <span class="offscreen">별점</span>
                </EIco>
                <span class="score-sm">4.0 (10)</span>
              </div>
            </div>
          </div>
          <!-- // thumb-prod -->
          <NuxtLink class="btn-link" to="javascript:">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </swiper-slide>
        <swiper-slide>
          <!-- thumb-prod -->
          <div class="thumb-prod">
            <!-- thumb-prod-2xl -->
            <EThumbProdBox size="2xl" dim="19">
              <!-- DESC :: 활성화시 is-active 클래스 추가 -->
              <button type="button" class="btn-wish">
                <EIco name="wish" size="sm">
                  <span class="offscreen">관심 등록</span>
                </EIco>
              </button>
              <template #thumb>
                <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
              </template>
            </EThumbProdBox>
            <!-- // thumb-prod-2xl -->
            <div class="info-box">
              <BadgeGroup gap="md">
                <EBadge color="light-gray" size="sm" badge-text="BEST" />
              </BadgeGroup>
              <ETit type="prod">
                바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
              </ETit>
              <div class="goods-group">
                <EGoods type="origin" size="sm" val="3,000" unit="원" />
                <EGoods type="percent" size="md" val="10" unit="%" />
                <EGoods size="md" val="2,700" unit="원" />
              </div>
              <div class="rating">
                <EIco name="rating" color="gray50" size="xs">
                  <span class="offscreen">별점</span>
                </EIco>
                <span class="score-sm">4.0 (10)</span>
              </div>
            </div>
          </div>
          <!-- // thumb-prod -->
          <NuxtLink class="btn-link" to="javascript:">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </swiper-slide>
        <swiper-slide>
          <!-- thumb-prod -->
          <div class="thumb-prod">
            <!-- thumb-prod-2xl -->
            <EThumbProdBox size="2xl">
              <!-- DESC :: 활성화시 is-active 클래스 추가 -->
              <button type="button" class="btn-wish is-active">
                <EIco name="wish" size="sm">
                  <span class="offscreen">관심 등록</span>
                </EIco>
              </button>
              <template #thumb>
                <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
              </template>
            </EThumbProdBox>
            <!-- // thumb-prod-2xl -->
            <div class="info-box">
              <BadgeGroup gap="md">
                <EBadge color="light-gray" size="sm" badge-text="BEST" />
              </BadgeGroup>
              <ETit type="prod">
                바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
              </ETit>
              <div class="goods-group">
                <EGoods type="origin" size="sm" val="3,000" unit="원" />
                <EGoods type="percent" size="md" val="10" unit="%" />
                <EGoods size="md" val="2,700" unit="원" />
              </div>
              <div class="rating">
                <EIco name="rating" color="gray50" size="xs">
                  <span class="offscreen">별점</span>
                </EIco>
                <span class="score-sm">4.0 (10)</span>
              </div>
            </div>
          </div>
          <!-- // thumb-prod -->
          <NuxtLink class="btn-link" to="javascript:">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </swiper-slide>
        <swiper-slide>
          <!-- thumb-prod -->
          <div class="thumb-prod">
            <!-- thumb-prod-2xl -->
            <EThumbProdBox size="2xl">
              <!-- DESC :: 활성화시 is-active 클래스 추가 -->
              <button type="button" class="btn-wish">
                <EIco name="wish" size="sm">
                  <span class="offscreen">관심 등록</span>
                </EIco>
              </button>
              <template #thumb>
                <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
              </template>
            </EThumbProdBox>
            <!-- // thumb-prod-2xl -->
            <div class="info-box">
              <BadgeGroup gap="md">
                <EBadge color="light-gray" size="sm" badge-text="BEST" />
              </BadgeGroup>
              <ETit type="prod">
                바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
              </ETit>
              <div class="goods-group">
                <EGoods type="origin" size="sm" val="3,000" unit="원" />
                <EGoods type="percent" size="md" val="10" unit="%" />
                <EGoods size="md" val="2,700" unit="원" />
              </div>
              <div class="rating">
                <EIco name="rating" color="gray50" size="xs">
                  <span class="offscreen">별점</span>
                </EIco>
                <span class="score-sm">4.0 (10)</span>
              </div>
            </div>
          </div>
          <!-- // thumb-prod -->
          <NuxtLink class="btn-link" to="javascript:">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </swiper-slide>
        <swiper-slide>
          <!-- thumb-prod -->
          <div class="thumb-prod">
            <!-- thumb-prod-2xl -->
            <EThumbProdBox size="2xl">
              <!-- DESC :: 활성화시 is-active 클래스 추가 -->
              <button type="button" class="btn-wish">
                <EIco name="wish" size="sm">
                  <span class="offscreen">관심 등록</span>
                </EIco>
              </button>
              <template #thumb>
                <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
              </template>
            </EThumbProdBox>
            <!-- // thumb-prod-2xl -->
            <div class="info-box">
              <BadgeGroup gap="md">
                <EBadge color="light-gray" size="sm" badge-text="BEST" />
              </BadgeGroup>
              <ETit type="prod">
                바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
              </ETit>
              <div class="goods-group">
                <EGoods type="origin" size="sm" val="3,000" unit="원" />
                <EGoods type="percent" size="md" val="10" unit="%" />
                <EGoods size="md" val="2,700" unit="원" />
              </div>
              <div class="rating">
                <EIco name="rating" color="gray50" size="xs">
                  <span class="offscreen">별점</span>
                </EIco>
                <span class="score-sm">4.0 (10)</span>
              </div>
            </div>
          </div>
          <!-- // thumb-prod -->
          <NuxtLink class="btn-link" to="javascript:">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </swiper-slide>
        <swiper-slide>
          <!-- thumb-prod -->
          <div class="thumb-prod">
            <!-- thumb-prod-2xl -->
            <EThumbProdBox size="2xl">
              <!-- DESC :: 활성화시 is-active 클래스 추가 -->
              <button type="button" class="btn-wish">
                <EIco name="wish" size="sm">
                  <span class="offscreen">관심 등록</span>
                </EIco>
              </button>
              <template #thumb>
                <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
              </template>
            </EThumbProdBox>
            <!-- // thumb-prod-2xl -->
            <div class="info-box">
              <BadgeGroup gap="md">
                <EBadge color="light-gray" size="sm" badge-text="BEST" />
              </BadgeGroup>
              <ETit type="prod">
                바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
              </ETit>
              <div class="goods-group">
                <EGoods type="origin" size="sm" val="3,000" unit="원" />
                <EGoods type="percent" size="md" val="10" unit="%" />
                <EGoods size="md" val="2,700" unit="원" />
              </div>
              <div class="rating">
                <EIco name="rating" color="gray50" size="xs">
                  <span class="offscreen">별점</span>
                </EIco>
                <span class="score-sm">4.0 (10)</span>
              </div>
            </div>
          </div>
          <!-- // thumb-prod -->
          <NuxtLink class="btn-link" to="javascript:">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </swiper-slide>
      </SwiperAutoWrap>
    </ContBox>
  </ContWrap>
</template>

<script setup lang="ts">
const isRecentSearchData = ref(true); // 임시 : 최근 검색어 컨텐츠 확인을 위해 추가
const isRecentSearchNoData = ref(false); // 임시 : 최근 검색어 데이터 없음 컨텐츠 확인을 위해 추가
</script>

<style lang="scss" scoped>

</style>
