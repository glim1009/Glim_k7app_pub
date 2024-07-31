<template>
  <!-- 데이터가 있는 경우 -->
  <div v-if="isData">
    <ContWrap>
      <ContBox>
        <BtnWrap type="full">
          <EBtn color="gray" @click="openAddAddress">
            <EIco name="plus" size="sm" color="white"></EIco>
            <span class="text">주소지 추가</span>
          </EBtn>
          <ETBtn tag="button" size="xs" @click="openAddAddress">
            <EIco name="current-location" size="sm"></EIco>
            <span class="text">현재 위치 주소에 추가</span>
          </ETBtn>
        </BtnWrap>
      </ContBox>
      <ContBox>
        <RowListWrap>
          <li class="item">
            <ColorBox color="white" size="lg">
              <div class="box-info-header">
                <FlexGroup align="start">
                  <div class="info-flex-left">
                    <span class="ui-rdo">
                      <input type="radio" id="demoRdo01" name="demoRdo01">
                      <label for="demoRdo01"><span class="text-xl fw-sb">사무실</span></label>
                    </span>
                    <div class="bar-group">
                      <span class="bar-text-sm fc-black">홍*동</span>
                      <span class="bar-text-sm fc-black">010-4554-8785</span>
                    </div>
                  </div>
                  <div class="flex-right">
                    <BtnWrap>
                      <EBtn color="light-gray" size="xs">
                        <EIco name="delete" size="xs"><span class="offscreen">삭제</span></EIco>
                      </EBtn>
                      <EBtn color="light-green" size="xs" @click="openEditAddress">
                        <EIco name="write" color="green" size="xs"><span class="offscreen">수정</span></EIco>
                      </EBtn>
                    </BtnWrap>
                  </div>
                </FlexGroup>
              </div>
              <RowListWrap size="xs">
                <p class="stext-sm fw-md fc-black">085421</p>
                <TableWrap type="info" size="xs" table-name="정보성 테이블">
                  <colgroup>
                    <col style="width: 42px;">
                    <col style="width: auto;">
                  </colgroup>
                  <tbody>
                  <tr>
                    <th scope="row">도로명</th>
                    <td>서울 강동구 상암로 **길 ***호 </td>
                  </tr>
                  <tr>
                    <th scope="row">지번</th>
                    <td>서울 강동구 암사동 265-5번지 203호 서울 강동구 암사동 265-5번지 ***호</td>
                  </tr>
                  </tbody>
                </TableWrap>
              </RowListWrap>
            </ColorBox>
          </li>
          <li class="item">
            <ColorBox color="white" size="lg">
              <div class="box-info-header">
                <FlexGroup align="start">
                  <div class="info-flex-left">
                    <span class="ui-rdo">
                      <input type="radio" id="demoRdo02" name="demoRdo01">
                      <label for="demoRdo02"><span class="text-xl fw-sb">엄마집</span></label>
                    </span>
                    <div class="bar-group">
                      <span class="bar-text-sm fc-black">홍*동</span>
                      <span class="bar-text-sm fc-black">010-4554-8785</span>
                    </div>
                  </div>
                  <div class="flex-right">
                    <BtnWrap>
                      <EBtn color="light-gray" size="xs">
                        <EIco name="delete" size="xs"><span class="offscreen">삭제</span></EIco>
                      </EBtn>
                      <EBtn color="light-green" size="xs" @click="openEditAddress">
                        <EIco name="write" color="green" size="xs"><span class="offscreen">수정</span></EIco>
                      </EBtn>
                    </BtnWrap>
                  </div>
                </FlexGroup>
              </div>
              <RowListWrap size="xs">
                <p class="stext-sm fw-md fc-black">085421</p>
                <TableWrap type="info" size="xs" table-name="정보성 테이블">
                  <colgroup>
                    <col style="width: 42px;">
                    <col style="width: auto;">
                  </colgroup>
                  <tbody>
                  <tr>
                    <th scope="row">도로명</th>
                    <td>서울 강동구 상암로 **길 ***호 </td>
                  </tr>
                  <tr>
                    <th scope="row">지번</th>
                    <td>서울 강동구 암사동 265-5번지 203호 서울 강동구 암사동 265-5번지 ***호</td>
                  </tr>
                  </tbody>
                </TableWrap>
              </RowListWrap>
            </ColorBox>
          </li>
          <li class="item">
            <ColorBox color="white" size="lg">
              <div class="box-info-header">
                <FlexGroup align="start">
                  <div class="info-flex-left">
                    <span class="ui-rdo">
                      <input type="radio" id="demoRdo03" name="demoRdo01">
                      <label for="demoRdo03"><span class="text-xl fw-sb">우리집</span></label>
                    </span>
                    <div class="bar-group">
                      <span class="bar-text-sm fc-black">홍*동</span>
                      <span class="bar-text-sm fc-black">010-4554-8785</span>
                    </div>
                  </div>
                  <div class="flex-right">
                    <BtnWrap>
                      <EBtn color="light-gray" size="xs">
                        <EIco name="delete" size="xs"><span class="offscreen">삭제</span></EIco>
                      </EBtn>
                      <EBtn color="light-green" size="xs" @click="openEditAddress">
                        <EIco name="write" color="green" size="xs"><span class="offscreen">수정</span></EIco>
                      </EBtn>
                    </BtnWrap>
                  </div>
                </FlexGroup>
              </div>
              <RowListWrap size="xs">
                <p class="stext-sm fw-md fc-black">085421</p>
                <TableWrap type="info" size="xs" table-name="정보성 테이블">
                  <colgroup>
                    <col style="width: 42px;">
                    <col style="width: auto;">
                  </colgroup>
                  <tbody>
                  <tr>
                    <th scope="row">도로명</th>
                    <td>서울 강동구 상암로 **길 ***호 </td>
                  </tr>
                  <tr>
                    <th scope="row">지번</th>
                    <td>서울 강동구 암사동 265-5번지 203호 서울 강동구 암사동 265-5번지 ***호</td>
                  </tr>
                  </tbody>
                </TableWrap>
              </RowListWrap>
            </ColorBox>
          </li>
        </RowListWrap>
      </ContBox>
    </ContWrap>
    <ContDocker>
      <BtnWrap type="flex">
        <EBtn color="green" size="lg" disabled>
          <span class="text">기본 주소지로 설정</span>
        </EBtn>
      </BtnWrap>
    </ContDocker>
  </div>
  <!--// 데이터가 있는 경우 -->

  <!-- 데이터가 없는 경우  -->
  <div v-if="isNoData">
    <ContWrap>
      <ContWrap>
        <ContBox>
          <BtnWrap type="full">
            <EBtn color="gray" @click="openAddAddress">
              <EIco name="plus" size="sm" color="white"></EIco>
              <span class="text">주소지 추가</span>
            </EBtn>
            <ETBtn tag="button" size="xs">
              <EIco name="current-location" size="sm"></EIco>
              <span class="text">현재 위치 주소에 추가</span>
            </ETBtn>
          </BtnWrap>
        </ContBox>
        <ContBox>
          <InfoGuideWrap
            type="no-data"
            name="temp"
            sub-desc="추가된 주소지가 없습니다."
          />
        </ContBox>
      </ContWrap>
    </ContWrap>
  </div>
  <!-- // 데이터가 없는 경우  -->

  <!-- pop : 주소록 추가 -->
  <PopMyAddAddress v-model:sta="popAddAddress" />
  <!-- // pop : 주소록 추가 -->

  <!-- pop : 주소록 수정 -->
  <PopMyEditAddress v-model:sta="popEditAddress" />
  <!-- // pop : 주소록 수정 -->
</template>

<script setup lang="ts">
definePageMeta({
  title: '주소록 관리',
  hideRightHeader: ['home'],
  hideDocker: true,
})

const isData = ref(true);
const isNoData = ref(true);

const popAddAddress = ref({ open: false });
const openAddAddress = () => popAddAddress.value.open = true;

const popEditAddress = ref({ open: false });
const openEditAddress = () => popEditAddress.value.open = true;

</script>

<style scoped>
  @import url("assets/css/pages/my/my.scss");
</style>
