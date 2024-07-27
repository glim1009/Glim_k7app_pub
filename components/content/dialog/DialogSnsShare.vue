<template>
  <ContDialog v-model="isOpen">
    <template #title> SNS 공유 </template>
    <template #body>
      SNS 공유하기 팝업 ( 작업전 )
    </template>
    <template #footer>
      <EBtn color="green" @click="closeDialog">
        <span class="text">Dialog close</span>
      </EBtn>
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

const emit = defineEmits(['update:sta']);

const isOpen = computed({
  get: () => props.sta.open,
  set: (value) => emit('update:sta', { ...props.sta, open: value })
});

const closeDialog = () => {
  isOpen.value = false;
};
</script>