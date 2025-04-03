<script setup lang="ts">
import type { Category } from '../types/category';
import CategoryDetails from './CategoryDetails.vue';

interface CategoryTreeProps {
  categories: readonly Category[];
}
defineProps<CategoryTreeProps>();
</script>

<template>
  <div class="category-tree">
    <ul>
      <li v-for="category in categories" :key="category.name">
        <CategoryDetails :category="category" />
      </li>
    </ul>
  </div>
</template>
