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
  border-radius: 0.35em;
  cursor: pointer;

  &.primary {
    color: var(--text-color-light);
    padding: 0.5em 1em;
    background-color: var(--primary-color);
    border: 1px solid var(--primary-color);
  }

  &.secondary {
    color: var(--text-color);
    padding: 0.25em 0.5em;
    background-color: var(--background-color);
    border: 1px solid var(--shadow-color);

    font-size: small;
  }
}
</style>
