<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-bottom">
    <template #title>
      <div class="dialog-title">
        필터옵션
      </div>
    </template>
    <template #body>
      <div class="dialog-inner">
        <ContWrap type="white">
          <RowListWrap gap="line">
            <slot name="option" />
          </RowListWrap>
        </contwrap>
      </div>
    </template>
    <template #footer>
      <slot name="footer" />
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

</script>
