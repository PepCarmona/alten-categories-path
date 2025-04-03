<script setup lang="ts">
import { computed } from 'vue';
import { getCategoryPath } from '../helpers/getCategoryPath';
import type { Category } from '../types/category';

interface CategoryPathProps {
  categories: Category[];
  categoryName: string;
}
const props = defineProps<CategoryPathProps>();

const categoryPath = computed<string | null>(() =>
  getCategoryPath(props.categories, props.categoryName)
);
</script>

<template>
  <div class="category-path">
    <span class="error" v-if="categoryPath === null">
      Unknown category path. Category name not found.
    </span>
    <span v-else>Category path: {{ categoryPath }}</span>
  </div>
</template>
