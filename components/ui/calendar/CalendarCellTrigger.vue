<template>
  <CalendarCellTrigger
    class="date"
    v-bind="forwardedProps"
  >
    <slot></slot>
  </CalendarCellTrigger>
</template>

<script lang="ts" setup>
import { type HTMLAttributes, computed } from 'vue';
import { CalendarCellTrigger, type CalendarCellTriggerProps, useForwardProps } from 'radix-vue';

const props = defineProps<CalendarCellTriggerProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>
