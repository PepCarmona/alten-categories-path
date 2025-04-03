<script setup lang="ts">
import type { Category } from '../types/category';

interface CategoryDetailsProps {
  category: Category;
}
defineProps<CategoryDetailsProps>();
</script>

<template>
  <div class="category-details">
    <div class="category-name">
      Category name: <button>{{ category.name }}</button>
    </div>

    <div v-if="category.subcategories.length" class="subcategories">
      Subcategories:
      <ul>
        <li
          v-for="subcategory in category.subcategories"
          :key="subcategory.name">
          <CategoryDetails :category="subcategory" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
