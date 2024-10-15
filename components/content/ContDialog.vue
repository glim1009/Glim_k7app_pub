<template>
  <Dialog :open="modelValue" @update:open="$emit('update:modelValue', $event)">
    <DialogContent :class="[contentClass, { 'not-header': notHeader }]" :on-interact-outside="handleInteractOutside">
      <VisuallyHidden as-child>
        <DialogTitle /><DialogDescription />
      </VisuallyHidden>
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
      <div v-if="$slots.footer" class="dialog-footer" :class="[{ 'not-gradient': notFooterGradient }]">
        <slot name="footer" />
      </div>
      <slot />
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { VisuallyHidden } from "radix-vue";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "~/components/ui/dialog";

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  contentClass: {
    type: String,
    default: "ui-dialog",
  },
  notHeader: {
    type: Boolean,
    default: false,
  },
  notFooterGradient: {
    type: Boolean,
    default: false,
  },
  notDimClick: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const slots = useSlots();

const close = () => {
  emit("update:modelValue", false);
};

const handleInteractOutside = (event: Event) => {
  if (props.notDimClick || props.contentClass === "ui-dialog-alert") {
    event.preventDefault();
  }
  else {
    close();
  }
};
</script>

<style lang="scss">
@import url('assets/css/components/dialog.scss');
</style>
