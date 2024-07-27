<template>
  <div class="input-box" :class="[{ 'is-disabled': disabled }, { 'has-value': isValue }]">
    <input
      v-model="inputValue"
      class="ui-input"
      :class="{ 'is-focus': isFocused }"
      :type="props.type"
      :title="props.title"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      :inputmode="props.inputmode"
      :enterkeyhint="props.enterkeyhint"
      @focus="inputFocus"
      @blur="inputFocusout"
    />
    <button type="button" class="btn-input-del" @click="clearInput">
      <span class="offscreen">초기화</span>
    </button>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  type?: 'text' | 'number' | 'search';
  title?: string;
  placeholder?: string;
  value?: string;
  inputmode?: 'enterkey' | 'numeric' | 'tel';
  enterkeyhint?: 'search';
  disabled?: boolean;
}>(), {
  type: 'text',
  modelValue: '',
});

const emit = defineEmits<{
  (e: 'input', value: string): void;
  (e: 'clear'): void;
}>();

const inputValue = ref(props.value || '');
const isFocused = ref(false);
const isValue = ref(false);

function inputFocus() { isFocused.value = true; }

function inputFocusout() { isFocused.value = false; }

function clearInput() {
  inputValue.value = '';
  isValue.value = false;
  emit('clear');
}

function setInputStatus() { isValue.value = inputValue.value.length > 0; }

watch(inputValue, (newValue) => {
  setInputStatus();
  emit('input', newValue);
});

onMounted(() => {
  setInputStatus();
});
</script>
