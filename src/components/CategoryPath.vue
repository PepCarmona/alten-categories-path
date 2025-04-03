<script setup lang="ts">
import { computed } from 'vue';
import { getCategoryPath } from '../helpers/getCategoryPath';
import type { Category } from '../types/category';

interface CategoryPathProps {
  categories: Category[];
  categoryName: string;
}
const props = defineProps<CategoryPathProps>();

const categoryPath = computed<string>(() => {
  try {
    return getCategoryPath(props.categories, props.categoryName);
  } catch (error) {
    return String(error);
  }
});
</script>

<template>
  <div class="category-path">Category path: {{ categoryPath }}</div>
</template>
