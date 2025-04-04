<script setup lang="ts">
interface AppInputProps {
  placeholder?: string;
}
const props = defineProps<AppInputProps>();

interface AppInputEmits {
  (eventName: 'enter'): void;
}
const emit = defineEmits<AppInputEmits>();

const model = defineModel<string>();
</script>

<template>
  <input
    class="app-input"
    type="text"
    :placeholder="props.placeholder"
    v-model="model"
    @keypress.enter="emit('enter')" />
</template>

<style scoped lang="scss">
.app-input {
  padding: 0.5em;
  border-radius: 0.35em;
  outline: none;
  border: 1px solid var(--shadow-color);
  background-color: #0d1117;
  color: var(--text-color);

  &::placeholder {
    color: var(--shadow-color);
  }

  &:focus-visible {
    outline: 1px solid var(--text-color);
  }
}
</style>
