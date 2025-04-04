<script setup lang="ts">
import CodeSnippet from './ui/CodeSnippet.vue';
import SectionTitle from './ui/SectionTitle.vue';
</script>

<template>
  <div class="statement-solution">
    <SectionTitle>The Solution</SectionTitle>
    <CodeSnippet
      allow-copy
      mode="block"
      code="function getCategoryPath(
  categories: Category[],
  categoryName: string,
  path = ''
): string | null {
  for (const category of categories) {
    // Build the current path by appending the current category name.
    const currentPath = `${path}/${category.name}`;

    // If the current category matches the target category name, return the current path.
    if (category.name === categoryName) {
      return currentPath;
    }

    // If the current category has no subcategories, skip it.
    if (category.subcategories.length === 0) {
      continue;
    }

    // Recursively explore the subcategories and return the path if the category is found.
    const subCategoryPath = getCategoryPath(
      category.subcategories,
      categoryName,
      currentPath
    );

    // If the category is not found in the subcategories, skip this category.
    if (subCategoryPath === null) {
      continue;
    }

    // Return the path found in the subcategories.
    return subCategoryPath;
  }

  // If the category is not found in the root categories, return null.
  return null;
}" />
  </div>
</template>
