<template>
  <div :class="cn('ui-spinner', props.class)">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { cn } from '@/lib/utils';

const props = defineProps<{
  class?: HTMLAttributes['class'];
}>();
</script>
