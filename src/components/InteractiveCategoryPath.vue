<script setup lang="ts">
import { ref } from 'vue';
import type { Category } from '../types/category';
import CategoryPath from './CategoryPath.vue';
import CategoryTree from './CategoryTree.vue';
import CategoryInput from './CategoryInput.vue';

interface InteractiveCategoryPathProps {
  categories: Category[];
}
const props = defineProps<InteractiveCategoryPathProps>();

const selectedCategoryName = ref<string | null>(null);
</script>

<template>
  <div class="interactive-category-path">
    <CategoryTree
      :categories="props.categories"
      @select-category="selectedCategoryName = $event" />
    <CategoryInput @search="selectedCategoryName = $event" />
    <CategoryPath
      v-if="selectedCategoryName !== null"
      :categories="props.categories"
      :categoryName="selectedCategoryName"
      @clear="selectedCategoryName = null" />
  </div>
</template>

<style scoped>
.interactive-category-path {
  display: flex;
  flex-direction: column;
  gap: 2em;

  align-items: center;

  margin: auto;
}
</style>
