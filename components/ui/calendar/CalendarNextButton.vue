<template>
  <CalendarNext
    :class="cn(props.class)"
    v-bind="forwardedProps"
  >
    <slot></slot>
  </CalendarNext>
</template>

<script lang="ts" setup>
import { type HTMLAttributes, computed } from 'vue';
import { CalendarNext, type CalendarNextProps, useForwardProps } from 'radix-vue';
import { cn } from '@/lib/utils';

const props = defineProps<CalendarNextProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>
