<template>
  <ContDialog v-model="isOpen">
    <template #title>
      <div class="dialog-title">
        공유
      </div>
    </template>
    <template #body>
      <ContWrap type="white" in-top="zero">
        <ContBox>
          <p class="stext">
            세븐일레븐의 다양한 정보를 공유해 보세요!
          </p>
        </ContBox>
        <ContBox>
          <GridListWrap col="3">
            <li class="item-grid">
              <NuxtLink class="link-sns-share" to="javascript:">
                <EIco name="share-kakao" />
                <div class="stext-gray90">
                  카카오톡
                </div>
              </NuxtLink>
            </li>
            <li class="item-grid">
              <button type="button" class="link-sns-share" @click="copyRoute">
                <EIco name="share-url" />
                <div class="stext-gray90">
                  URL 복사
                </div>
              </button>
            </li>
            <li class="item-grid">
              <button type="button" class="link-sns-share">
                <EIco name="share-more" />
                <div class="stext-gray90">
                  더보기
                </div>
              </button>
            </li>
          </GridListWrap>
        </ContBox>
      </ContWrap>
    </template>
  </ContDialog>
</template>

<script setup lang="ts">
interface DialogState {
  open: boolean;
}

const props = defineProps<{
  sta: DialogState;
}>();

const emit = defineEmits(["update:sta"]);

const isOpen = computed({
  get: () => props.sta.open,
  set: value => emit("update:sta", { ...props.sta, open: value }),
});

const closeDialog = () => {
  isOpen.value = false;
};
const { $showToast } = useNuxtApp();

// const thisRoute = window.location.href; // 현재 href 확인을 위해 추가

function copyRoute() {
  /* if (thisRoute) { // 현재 href 확인을 위해 추가
    window.navigator.clipboard.writeText(thisRoute).then(() => {
      $showToast({ msg: "URL이 복사되었습니다." });
    });
  } */
  $showToast({ msg: "URL이 복사되었습니다." });
}
</script>
