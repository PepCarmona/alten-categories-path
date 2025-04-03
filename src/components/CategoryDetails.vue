<script setup lang="ts">
import type { Category } from '../types/category';

interface CategoryDetailsProps {
  category: Category;
}
const props = defineProps<CategoryDetailsProps>();

interface CategoryDetailsEmits {
  (eventName: 'select-category', categoryName: string): void;
}
const emit = defineEmits<CategoryDetailsEmits>();
</script>

<template>
  <div class="category-details">
    <div class="category-name">
      Category name:
      <button @click="emit('select-category', props.category.name)">
        {{ props.category.name }}
      </button>
    </div>

    <div v-if="props.category.subcategories.length" class="subcategories">
      Subcategories:
      <ul>
        <li
          v-for="subcategory in category.subcategories"
          :key="subcategory.name">
          <CategoryDetails
            :category="subcategory"
            @select-category="emit('select-category', $event)" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
