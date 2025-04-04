<script setup lang="ts">
import { ref } from 'vue';
import type { Category } from '../types/category';
import CategoryPath from './CategoryPath.vue';
import CategoryTree from './CategoryTree.vue';
import CategoryInput from './CategoryInput.vue';
import SectionTitle from './ui/SectionTitle.vue';

interface InteractiveCategoryPathProps {
  categories: Category[];
}
const props = defineProps<InteractiveCategoryPathProps>();

const selectedCategoryName = ref<string | null>(null);
</script>

<template>
  <section class="interactive-category-path">
    <SectionTitle>Interactive Solution</SectionTitle>

    <div class="contents">
      <CategoryTree :categories="props.categories" />

      <div class="result">
        <CategoryInput @search="selectedCategoryName = $event" />

        <CategoryPath
          v-if="selectedCategoryName !== null"
          :categories="props.categories"
          :categoryName="selectedCategoryName"
          @clear="selectedCategoryName = null" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.interactive-category-path {
  .contents {
    display: flex;
    flex-direction: column-reverse;

    gap: 2em;

    .result {
      display: flex;
      flex-direction: column;

      gap: 2em;
    }
  }

  @media screen and (min-width: 600px) {
    .contents {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;

      gap: 4em;
    }
  }
}
</style>
