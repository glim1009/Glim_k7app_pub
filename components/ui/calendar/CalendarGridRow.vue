<template>
  <CalendarGridRow v-bind="forwardedProps">
    <slot></slot>
  </CalendarGridRow>
</template>

<script lang="ts" setup>
import { type HTMLAttributes, computed } from 'vue';
import { CalendarGridRow, type CalendarGridRowProps, useForwardProps } from 'radix-vue';

const props = defineProps<CalendarGridRowProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>
