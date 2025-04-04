<script setup lang="ts">
import { computed } from 'vue';
import { getCategoryPath } from '../helpers/getCategoryPath';
import type { Category } from '../types/category';

interface CategoryPathProps {
  categories: Category[];
  categoryName: string;
}
const props = defineProps<CategoryPathProps>();

interface CategoryPathEmits {
  (eventName: 'clear'): void;
}
const emit = defineEmits<CategoryPathEmits>();

const categoryPath = computed<string | null>(() =>
  getCategoryPath(props.categories, props.categoryName)
);
</script>

<template>
  <div class="category-path">
    <span class="error" v-if="categoryPath === null">
      Category name not found.
    </span>
    <span v-else>{{ categoryPath }}</span>

    <button @click="emit('clear')">Clear</button>
  </div>
</template>
