<script setup lang="ts">
import type { Category } from '../types/category';
import CategoryTree from './CategoryTree.vue';

interface InteractiveCategoryPathProps {
  categories: readonly Category[];
}
defineProps<InteractiveCategoryPathProps>();
</script>

<template>
  <div class="interactive-category-path">
    <CategoryTree :categories="categories" />
  </div>
</template>
