<script setup lang="ts">
import type { Category } from '../types/category';
import CodeSnippet from './ui/CodeSnippet.vue';

interface CategoryTreeProps {
  categories: Category[];
}
const props = defineProps<CategoryTreeProps>();
</script>

<template>
  <div class="category-tree">
    <CodeSnippet
      mode="block"
      :code="JSON.stringify(props.categories, null, 2)" />
  </div>
</template>

<style scoped>
.category-tree .title {
  text-align: center;
}
</style>
