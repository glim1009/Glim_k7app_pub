<template>
  <button type="button" :class="['btn-tooltip', {'is-active': isActive} ]" @click="toggleClick">
    <slot/>
    <EIco name="tooltip" />
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'tooltip-toggle', isActive: boolean): void
}>()

const isActive = ref(false);

const toggleClick = () => {
  isActive.value = !isActive.value;
  emit('tooltip-toggle', isActive.value);
}
</script>

