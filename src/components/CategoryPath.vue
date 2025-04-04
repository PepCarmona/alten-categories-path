<script setup lang="ts">
import { computed } from 'vue';
import { getCategoryPath } from '../helpers/getCategoryPath';
import type { Category } from '../types/category';
import CodeSnippet from './ui/CodeSnippet.vue';
import AppButton from './ui/AppButton.vue';

interface CategoryPathProps {
  categories: Category[];
  categoryName: string;
}
const props = defineProps<CategoryPathProps>();

interface CategoryPathEmits {
  (eventName: 'clear'): void;
}
const emit = defineEmits<CategoryPathEmits>();

const categoryPath = computed<string | null>(() =>
  getCategoryPath(props.categories, props.categoryName)
);
</script>

<template>
  <div class="category-path">
    <code class="error" v-if="categoryPath === null">
      Category name not found.
    </code>
    <CodeSnippet v-else mode="inline" :code="categoryPath" />

    <AppButton type="secondary" @click="emit('clear')">Clear</AppButton>
  </div>
</template>

<style scoped lang="scss">
.category-path {
  display: flex;
  gap: 0.5em;

  .error {
    background-color: #351414;
    font-family: monospace;
    border-radius: 0.5em;
    padding: 3px 5px;
  }
}
</style>
