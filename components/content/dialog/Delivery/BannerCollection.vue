<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-full">
    <template #title>
      <div class="dialog-title">
        전체보기
      </div>
    </template>
    <template #body>
      <div class="dialog-inner">
        <ContWrap in-top="zero" type="white">
          <RowListWrap gap="md" class="side-box">
            <li class="item-banner">
              <div class="thumb-box">
                <img src="/assets/images/temp/temp_banner_marketing_1.png" alt="배너 전체보기 이미지">
              </div>
            </li>
            <li class="item-banner">
              <div class="thumb-box">
                <img src="/assets/images/temp/temp_banner_marketing_2.png" alt="배너 전체보기 이미지">
              </div>
            </li>
            <li class="item-banner">
              <div class="thumb-box">
                <img src="/assets/images/temp/temp_banner_marketing_1.png" alt="배너 전체보기 이미지">
              </div>
            </li>
            <li class="item-banner">
              <div class="thumb-box">
                <img src="/assets/images/temp/temp_banner_marketing_2.png" alt="배너 전체보기 이미지">
              </div>
            </li>
            <li class="item-banner">
              <div class="thumb-box">
                <img src="/assets/images/temp/temp_banner_marketing_1.png" alt="배너 전체보기 이미지">
              </div>
            </li>
            <li class="item-banner">
              <div class="thumb-box">
                <img src="/assets/images/temp/temp_banner_marketing_2.png" alt="배너 전체보기 이미지">
              </div>
            </li>
            <li class="item-banner">
              <div class="thumb-box">
                <img src="/assets/images/temp/temp_banner_marketing_1.png" alt="배너 전체보기 이미지">
              </div>
            </li>
            <li class="item-banner">
              <div class="thumb-box">
                <img src="/assets/images/temp/temp_banner_marketing_2.png" alt="배너 전체보기 이미지">
              </div>
            </li>
          </RowListWrap>
        </ContWrap>
      </div>
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

const openDialog = () => {
  isOpen.value = true;
};

const isOpen = computed({
  get: () => props.sta.open,
  set: value => emit("update:sta", { ...props.sta, open: value }),
});

const closeDialog = () => {
  isOpen.value = false;
};
</script>
