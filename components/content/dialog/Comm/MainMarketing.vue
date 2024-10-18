<template>
  <ContDialog v-model="isOpen" :content-class="isBottom ? 'ui-dialog-bottom' : 'ui-dialog'" :not-footer-gradient="isBottom" not-header>
    <template #body>
      <ContWrap type="white" in-top="zero" in-bottom="zero" class="side-zero">
        <CommMainMarketingBanner />
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
  isBottom?: boolean;
}>();

const emit = defineEmits(["update:sta"]);

const isOpen = computed({
  get: () => props.sta.open,
  set: value => emit("update:sta", { ...props.sta, open: value }),
});

const closeDialog = () => {
  isOpen.value = false;
};
</script>
