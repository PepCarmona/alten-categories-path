<script setup lang="ts">
interface AppButtonProps {
  type: 'primary' | 'secondary';
}
const props = defineProps<AppButtonProps>();
</script>

<template>
  <button :class="['app-button', props.type]"><slot /></button>
</template>

<style scoped lang="scss">
.app-button {
  padding: 0.5em 1em;
  border-radius: 0.35em;
  border: 1px solid var(--primary-color);
  color: var(--text-color);
  cursor: pointer;

  &.primary {
    background-color: var(--primary-color);
    color: var(--text-color-light);
  }
}
</style>
