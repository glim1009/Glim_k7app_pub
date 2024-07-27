<template>
  <Dialog :open="modelValue" @update:open="$emit('update:modelValue', $event)">
    <DialogContent :class="contentClass">
      <div class="dialog-header">
        <slot name="title" />
        <button type="button" class="dialog-close" @click="close">
          <EIco name="close">
            <span class="offscreen">팝업 닫기</span>
          </EIco>
        </button>
      </div>
      <div class="dialog-body">
        <slot name="body" />
      </div>
      <div class="dialog-footer">
        <slot name="footer" />
      </div>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogContent,
} from '~/components/ui/dialog';

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  contentClass: {
    type: String,
    default: 'ui-dialog'
  }
});

const emit = defineEmits(['update:modelValue']);

const close = () => {
  emit('update:modelValue', false);
};
</script>

<style lang="scss">
@import url('assets/css/components/dialog.scss');
</style>
