<script lang="ts" setup>
import { ref } from 'vue';
import AppInput from './ui/AppInput.vue';
import AppButton from './ui/AppButton.vue';

interface CategoryInputEmits {
  (eventName: 'search', inputText: string): void;
}
const emit = defineEmits<CategoryInputEmits>();

const inputText = ref<string>('');
</script>

<template>
  <div class="category-input">
    <AppInput
      class="input"
      placeholder="Category name"
      v-model="inputText"
      @enter="emit('search', inputText)" />

    <AppButton type="primary" @click="emit('search', inputText)">
      Search
    </AppButton>
  </div>
</template>

<style scoped lang="scss">
.category-input {
  display: flex;
  gap: 0.5em;

  .input {
    width: 100%;
  }
}
</style>
