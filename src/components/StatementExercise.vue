<script setup lang="ts">
import StatementProblem from './StatementProblem.vue';
import StatementSolution from './StatementSolution.vue';
</script>

<template>
  <section class="statement-exercise">
    <StatementProblem />
    <StatementSolution />
  </section>
</template>

<style scoped lang="scss">
.statement-exercise {
  display: flex;
  flex-direction: column;
  gap: 2em;

  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: auto;
    gap: 4em;
  }
}
</style>
