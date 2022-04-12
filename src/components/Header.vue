<script setup lang="ts">
import { isDark, toggleDark } from '~/composables'
</script>

<template>
  <div h-13 w-full fixed top-0 right-0 bg-gray-100 dark:bg-black-100 z-60>
    <nav fixed top-4 right-7 text-xl inline-flex gap-4>
      <button class="icon-btn !outline-none" @click="toggleDark()">
        <div v-if="isDark" i-carbon-moon />
        <div v-else i-carbon-sun />
      </button>
      <a class="icon-btn" i-carbon-logo-github rel="noreferrer" href="https://github.com/xieyezi/food-storage-list.git"
        target="_blank" title="GitHub" />
    </nav>
  </div>
</template>
