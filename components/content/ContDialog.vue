<template>
  <Dialog :open="modelValue" @update:open="$emit('update:modelValue', $event)">
    <DialogContent :class="[contentClass, {'not-header' : notHeader}]" :onInteractOutside="handleInteractOutside">
      <VisuallyHidden asChild><DialogTitle></DialogTitle><DialogDescription></DialogDescription></VisuallyHidden>
      <div v-if="contentClass !== 'ui-dialog-alert' && !notHeader" class="dialog-header">
        <slot name="title" />
        <button type="button" class="dialog-close" @click="close">
          <EIco name="close">
            <span class="offscreen">팝업 닫기</span>
          </EIco>
        </button>
      </div>
      <div v-else-if="$slots.title && contentClass === 'ui-dialog-alert'" class="dialog-header">
        <slot name="title" />
      </div>

      <div class="dialog-body">
        <slot name="body" />
      </div>
      <div :class="['dialog-footer', {'not-gradient' : notFooterGradient}]" v-if="$slots.footer">
        <slot name="footer" />
      </div>
      <slot />
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription
} from '~/components/ui/dialog';

import { VisuallyHidden } from 'radix-vue';

const slots = useSlots();

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  contentClass: {
    type: String,
    default: 'ui-dialog'
  },
  notHeader: {
    type: Boolean,
    default: false
  },
  notFooterGradient: {
    type: Boolean,
    default: false
  },
  notDimClick: {
    type: Boolean,
    default: false
  },
});

const emit = defineEmits(['update:modelValue']);

const close = () => {
  emit('update:modelValue', false);
};

const handleInteractOutside = (event: Event) => {
  if ( props.notDimClick || props.contentClass === "ui-dialog-alert") {
    event.preventDefault();
  } else {
    close();
  }
};

</script>

<style lang="scss">
@import url('assets/css/components/dialog.scss');
</style>
