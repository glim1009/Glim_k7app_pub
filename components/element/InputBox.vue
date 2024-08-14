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

interface boxClass {
  isClassValue: boolean;
  isClassFocus: boolean;
}

const props = withDefaults(defineProps<{
  type?: 'text' | 'number' | 'search' | 'password';
  title?: string;
  placeholder?: string;
  value?: string;
  inputmode?: 'enterkey' | 'numeric' | 'tel';
  maxlength?: number;
  enterkeyhint?: 'search';
  disabled?: boolean;
  readonly?: boolean;
  modelValue?: boxClass;
}>(), {
  type: 'text',
});

const emit = defineEmits<{
  (e: 'input', value: string): void;
  (e: 'clear'): void;
  (e: 'update:modelValue', value: boxClass): void;
}>();

const inputValue = ref(props.value || '');
const isFocused = ref(props.modelValue?.isClassFocus || false);
const isValue = ref(props.modelValue?.isClassValue || false);

function inputFocus() { isFocused.value = true; }
function inputFocusout() { isFocused.value = false; }

watch( () => props.modelValue, (newValue:any) => {
  isFocused.value = newValue.inputFocus;
  isValue.value = newValue.isClassValue;
}, {deep: true});

const updateClassSta = () => {
  emit('update:modelValue', {
    isClassValue: isValue.value,
    isClassFocus: isFocused.value
  });
};

function clearInput() {
  inputValue.value = '';
  isValue.value = false;
  emit('clear');
  updateClassSta();
}

function setInputStatus(value = inputValue.value) {
  const newVal = (typeof value === 'string') ? value : JSON.stringify(value);
  isValue.value = newVal.length > 0;
  updateClassSta();
}

watch(inputValue, (newValue) => {
  setInputStatus(newValue);
  emit('input', newValue);
  updateClassSta();
});

onMounted(() => {
  setInputStatus();
});
</script>

<style lang="scss" scoped>
@import url('/assets/css/components/inputBox.scss');
</style>
