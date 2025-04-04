<script setup lang="ts">
import CodeSnippet from './ui/CodeSnippet.vue';
import SectionTitle from './ui/SectionTitle.vue';
</script>

<template>
  <div class="statement-solution">
    <SectionTitle>The Solution</SectionTitle>
    <CodeSnippet
      mode="block"
      code="function getCategoryPath(
  categories: Category[],
  categoryName: string,
  path = ''
): string | null {
  for (const category of categories) {
    const currentPath = `${path}/${category.name}`;

    if (category.name === categoryName) {
      return currentPath;
    }

    if (category.subcategories.length === 0) {
      continue;
    }

    const subCategoryPath = getCategoryPath(
      category.subcategories,
      categoryName,
      currentPath
    );

    if (subCategoryPath === null) {
      continue;
    }

    return subCategoryPath;
  }

  return null;
}" />
  </div>
</template>
