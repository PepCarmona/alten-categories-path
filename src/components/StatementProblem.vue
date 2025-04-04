<script setup lang="ts">
import CodeSnippet from './ui/CodeSnippet.vue';
import SectionTitle from './ui/SectionTitle.vue';
</script>

<template>
  <div class="statement-problem">
    <SectionTitle>The Problem</SectionTitle>

    <p>
      Given a hierarchical category structure represented as a tree, implement a
      function
      <CodeSnippet
        mode="inline"
        code="getCategoryPath(categories: Category[], categoryName: string)" />
      that returns the full path to a given category as a string.
    </p>

    <div>
      Requirements:
      <ul>
        <li>
          The path should be formatted as
          <CodeSnippet mode="inline" code="/parent/subcategory/categoryName" />.
        </li>
        <li>
          If the category does not exist, the function should return null.
        </li>
        <li>
          The function should stop searching once the category is found to
          optimize performance.
        </li>
        <li>
          The implementation should efficiently handle deep and nested
          structures.
        </li>
      </ul>
    </div>
  </div>
</template>
