<script setup lang="ts">
import 'highlight.js/styles/github-dark.css';
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import json from 'highlight.js/lib/languages/json';
import hljsVuePlugin from '@highlightjs/vue-plugin';

interface CodeSnippetProps {
  code: string;
  mode: 'inline' | 'block';
}
const props = defineProps<CodeSnippetProps>();

hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('json', json);

const CodeHighlighter = hljsVuePlugin.component;
</script>

<template>
  <CodeHighlighter
    v-if="props.mode === 'block'"
    autodetect
    :code="props.code"
    :class="['code-snippet', props.mode]" />

  <code
    v-else
    :class="['code-snippet', props.mode, 'hljs']"
    v-html="hljs.highlight(props.code, { language: 'typescript' }).value" />
</template>

<style scoped lang="scss">
.code-snippet {
  &.block {
    margin: 0;

    & :deep(.hljs) {
      border-radius: 0.5em;
    }
  }

  &.inline {
    border-radius: 0.5em;
  }
}
</style>
