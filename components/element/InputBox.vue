<template>
  <div class="input-box" :class="[{ 'is-disabled': disabled || readonly }, { 'has-value': isValue }, { 'is-focus': isFocused }]">
    <input
      v-model="inputValue"
      class="ui-input"
      :type="props.type"
      :title="props.title"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      :readonly="props.readonly"
      :inputmode="props.inputmode"
      :maxlength="props.maxlength"
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
  maxlength?: number;
  enterkeyhint?: 'search';
  disabled?: boolean;
  readonly?: boolean;
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

function setInputStatus(value = inputValue.value) {
  const newVal = typeof value === 'string' ? value : JSON.stringify(value);
  isValue.value = newVal.length > 0;
}

watch(inputValue, (newValue) => {
  setInputStatus(newValue);
  emit('input', newValue);
});

onMounted(() => {
  setInputStatus();
});
</script>
