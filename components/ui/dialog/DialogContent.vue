<template>
  <DialogPortal>
    <DialogOverlay
      class="fixed inset-0 z-50 bg-black/30"
    />
    <DialogContent
      v-bind="forwarded"
      :onInteractOutside="handleInteractOutside"
      :class="
        cn(
          'z-50',
          props.class,
        )"
    >
      <slot />
    </DialogContent>
  </DialogPortal>
</template>

<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import {
  DialogContent,
  type DialogContentEmits,
  type DialogContentProps,
  DialogOverlay,
  DialogPortal,
  useForwardPropsEmits,
} from 'radix-vue';
import { cn } from '@/lib/utils';

const props = withDefaults(defineProps<{
  class?: HTMLAttributes['class'];
  notDimClick?: boolean;
  isOpen?: boolean;
}>(), {
  notDimClick: false,
  isOpen: undefined,
});

const emits = defineEmits<DialogContentEmits & { 'update:isOpen': [value: boolean] }>();

const delegatedProps = computed(() => {
  const { class: _, notDimClick: __, isOpen: ___, ...delegated } = props;
  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);

const handleInteractOutside = (event: Event) => {
  if (!props.notDimClick) {
    event.preventDefault();
  }
};  ``

// Watch for changes in isOpen prop
watch(() => props.isOpen, (newValue) => {
  if (newValue !== undefined) {
    emits('update:isOpen', newValue);
  }
});

</script>
