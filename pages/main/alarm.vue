<template>
  <ContWrap in-bottom="sm">
    <ContBox gap="md">
      <div class="stext-lg">
        알림은 30일 보관 후에 자동 삭제됩니다.
      </div>
      <RowListWrap>
        <!-- repeat -->
        <li class="item-board">
          <ColorBox color="white">
            <div class="board-info-wrap">
              <CtitleWrap size="zero">
                <ETit type="board">
                  당일픽업
                </ETit>
                <div class="stext">
                  바리스타 로슈거 250ml 외 3건을 09월 30일 12:00에 강남 세븐일레븐점에서 픽업 예정입니다.
                </div>
                <NuxtLink tag="a" class="btn-link" to="javascript:"><span class="offscreen">바로가기</span></NuxtLink>
              </CtitleWrap>
              <FlexGroup align="center">
                <div class="flex-left">
                  <div class="stext board-date">2024.06.29</div>
                </div>
                <div class="flex-right">
                  <ETBtn tag="a" size="xs" to="/cs">
                    <span class="text">더보기</span>
                    <EIco name="arw-right" color="gray" size="xs"/>
                  </ETBtn>
                </div>
              </FlexGroup>
            </div>
          </ColorBox>
        </li>
        <!-- // repeat -->
        <!-- repeat -->
        <li class="item-board">
          <ColorBox color="white">
            <div class="board-info-wrap">
              <CtitleWrap size="zero">
                <ETit type="board">
                  당일픽업
                </ETit>
                <div class="stext">
                  바리스타 로슈거 250ml 외 3건을 09월 30일 12:00에 강남 세븐일레븐점에서 픽업 예정입니다.
                </div>
                <NuxtLink tag="a" class="btn-link" to="javascript:"><span class="offscreen">바로가기</span></NuxtLink>
              </CtitleWrap>
              <FlexGroup align="center">
                <div class="flex-left">
                  <div class="stext board-date">2024.06.29</div>
                </div>
                <div class="flex-right">
                  <ETBtn tag="a" size="xs" to="/cs">
                    <span class="text">더보기</span>
                    <EIco name="arw-right" color="gray" size="xs"/>
                  </ETBtn>
                </div>
              </FlexGroup>
            </div>
          </ColorBox>
        </li>
        <!-- // repeat -->
        <!-- repeat -->
        <li class="item-board">
          <ColorBox color="white">
            <div class="board-info-wrap">
              <CtitleWrap size="zero">
                <ETit type="board">
                  당일픽업
                </ETit>
                <div class="stext">
                  바리스타 로슈거 250ml 외 3건을 09월 30일 12:00에 강남 세븐일레븐점에서 픽업 예정입니다.
                </div>
                <NuxtLink tag="a" class="btn-link" to="javascript:"><span class="offscreen">바로가기</span></NuxtLink>
              </CtitleWrap>
              <FlexGroup align="center">
                <div class="flex-left">
                  <div class="stext board-date">2024.06.29</div>
                </div>
                <div class="flex-right">
                  <ETBtn tag="a" size="xs" to="/cs">
                    <span class="text">더보기</span>
                    <EIco name="arw-right" color="gray" size="xs"/>
                  </ETBtn>
                </div>
              </FlexGroup>
            </div>
          </ColorBox>
        </li>
        <!-- // repeat -->
      </RowListWrap>
    </ContBox>
  </ContWrap>
</template>

<script setup lang="ts">
definePageMeta({
  title: "알림",
  hideRightHeader: ["home"],
});
</script>

<style lang="scss" scoped>

</style>
