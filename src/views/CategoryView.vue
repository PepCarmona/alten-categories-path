<script setup lang="ts">
import { CATEGORIES } from '../data/categories';
import InteractiveCategoryPath from '../components/InteractiveCategoryPath.vue';
import StatementExercise from '../components/StatementExercise.vue';
</script>

<template>
  <div class="category-view">
    <StatementExercise />
    <div class="separator" />
    <InteractiveCategoryPath :categories="CATEGORIES" />
  </div>
</template>

<style scoped lang="scss">
.category-view {
  display: flex;
  flex-direction: column;
  gap: 4em;

  padding: 2em;
  margin: auto;

  max-width: 1024px;

  .separator {
    border: 1px solid var(--text-color);
    width: 60%;
    margin: auto;
    opacity: 0.4;
  }
}
</style>
