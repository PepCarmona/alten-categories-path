<script setup lang="ts">
import InteractiveCategoryPath from './components/InteractiveCategoryPath.vue';
import { CATEGORIES } from './data/categories';
</script>

<template>
  <InteractiveCategoryPath :categories="CATEGORIES" />
</template>

<style scoped></style>
