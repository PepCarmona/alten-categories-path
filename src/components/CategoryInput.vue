<script lang="ts" setup>
import { ref } from 'vue';
import AppInput from './ui/AppInput.vue';

interface CategoryInputEmits {
  (eventName: 'search', inputText: string): void;
}
const emit = defineEmits<CategoryInputEmits>();

const inputText = ref<string>('');
</script>

<template>
  <div class="category-input">
    <AppInput type="text" placeholder="Category name" v-model="inputText" />

    <button @click="emit('search', inputText)">Search</button>
  </div>
</template>

<style scoped></style>
