<script setup lang="ts">
import 'highlight.js/styles/github-dark.css';
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import json from 'highlight.js/lib/languages/json';
import hljsVuePlugin from '@highlightjs/vue-plugin';
import IconCopy from './IconCopy.vue';
import IconCheck from './IconCheck.vue';
import AppButton from './AppButton.vue';
import { ref } from 'vue';

interface CodeSnippetProps {
  code: string;
  mode: 'inline' | 'block';
  allowCopy?: boolean;
}
const props = defineProps<CodeSnippetProps>();

hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('json', json);

const CodeHighlighter = hljsVuePlugin.component;

const hasRecentlyCopiedWithSuccess = ref<boolean>(false);

function copyToClipboard(text: string): void {
  navigator.clipboard.writeText(text).then(() => {
    hasRecentlyCopiedWithSuccess.value = true;

    setTimeout(() => {
      hasRecentlyCopiedWithSuccess.value = false;
    }, 2000);
  });
}
</script>

<template>
  <span class="code-snippet">
    <AppButton
      type="free"
      v-if="props.allowCopy"
      class="copy-icon"
      :title="
        hasRecentlyCopiedWithSuccess ? 'Copied successfully' : 'Copy snippet'
      "
      @click="copyToClipboard(props.code)">
      <Transition name="fade">
        <IconCheck class="success" v-if="hasRecentlyCopiedWithSuccess" />
        <IconCopy v-else />
      </Transition>
    </AppButton>

    <CodeHighlighter
      v-if="props.mode === 'block'"
      autodetect
      :code="props.code"
      :class="props.mode" />

    <code
      v-else
      :class="[props.mode, 'hljs']"
      v-html="hljs.highlight(props.code, { language: 'typescript' }).value" />
  </span>
</template>

<style scoped lang="scss">
.code-snippet {
  position: relative;

  .copy-icon {
    position: absolute;
    top: 1em;
    right: 1em;
    padding: 0.5em;
    background-color: var(--background-color);
    border-radius: 0.5em;

    .success {
      color: green;
    }

    .fade-enter-active,
    .fade-leave-active {
      transition: opacity 200ms ease-out;
    }
    .fade-enter-from,
    .fade-leave-to {
      position: absolute;
      opacity: 0;
    }
  }

  .block {
    margin: 0;

    :deep(.hljs) {
      border-radius: 0.5em;
    }
  }

  .inline {
    border-radius: 0.5em;
  }
}
</style>
