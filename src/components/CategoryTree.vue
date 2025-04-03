<script setup lang="ts">
import type { Category } from '../types/category';
import CategoryDetails from './CategoryDetails.vue';
import CategoryTitle from './CategoryTitle.vue';

interface CategoryTreeProps {
  categories: Category[];
}
const props = defineProps<CategoryTreeProps>();

interface CategoryTreeEmits {
  (eventName: 'select-category', categoryName: string): void;
}
const emit = defineEmits<CategoryTreeEmits>();
</script>

<template>
  <div class="category-tree">
    <CategoryTitle>Categories</CategoryTitle>

    <ul>
      <li v-for="category in props.categories" :key="category.name">
        <CategoryDetails
          :category="category"
          @select-category="emit('select-category', $event)" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.category-tree .title {
  text-align: center;
}
</style>
