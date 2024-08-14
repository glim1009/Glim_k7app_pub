<template>
  <NumberFieldInput data-slot="input" :class="cn('ui-input')" />
</template>

<script setup lang="ts">
import { NumberFieldInput } from 'radix-vue';
import { cn } from '@/lib/utils';
</script>
