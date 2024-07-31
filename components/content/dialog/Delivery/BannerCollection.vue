<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-full">
    <template #title>
      <div class="dialog-title">전체보기</div>
    </template>
    <template #body>
      <div class="dialog-inner">
        <ContWrap>
          <RowListWrap gap="md">
            <li class="item-banner">
              <div class="thumb-box">
                <img src="/assets/images/temp/temp_banner_marketing_1.png" alt="배너 이미지">
              </div>
            </li>
            <li class="item-banner">
              <div class="thumb-box">
                <img src="/assets/images/temp/temp_banner_marketing_2.png" alt="배너 이미지">
              </div>
            </li>
            <li class="item-banner">
              <div class="thumb-box">
                <img src="/assets/images/temp/temp_banner_marketing_1.png" alt="배너 이미지">
              </div>
            </li>
            <li class="item-banner">
              <div class="thumb-box">
                <img src="/assets/images/temp/temp_banner_marketing_2.png" alt="배너 이미지">
              </div>
            </li>
            <li class="item-banner">
              <div class="thumb-box">
                <img src="/assets/images/temp/temp_banner_marketing_1.png" alt="배너 이미지">
              </div>
            </li>
            <li class="item-banner">
              <div class="thumb-box">
                <img src="/assets/images/temp/temp_banner_marketing_2.png" alt="배너 이미지">
              </div>
            </li>
            <li class="item-banner">
              <div class="thumb-box">
                <img src="/assets/images/temp/temp_banner_marketing_1.png" alt="배너 이미지">
              </div>
            </li>
            <li class="item-banner">
              <div class="thumb-box">
                <img src="/assets/images/temp/temp_banner_marketing_2.png" alt="배너 이미지">
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

const openDialog = () => {
  isOpen.value = true;
};

const emit = defineEmits(['update:sta']);

const isOpen = computed({
  get: () => props.sta.open,
  set: (value) => emit('update:sta', { ...props.sta, open: value }),
});

const closeDialog = () => {
  isOpen.value = false;
};
</script>

<style lang="scss" scoped>
@import url('assets/css/pages/delivery/delivery.scss');
</style>
