<script setup lang="ts">
import { ref } from 'vue';
import type { Category } from '../types/category';
import CategoryPath from './CategoryPath.vue';
import CategoryTree from './CategoryTree.vue';

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
    <CategoryPath
      v-if="selectedCategoryName !== null"
      :categories="props.categories"
      :categoryName="selectedCategoryName" />
  </div>
</template>
