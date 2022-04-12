<script setup lang="ts">
import { isDark, toggleDark } from '~/composables'
</script>

<template>
  <nav absolute top-4 right-5 text-xl inline-flex gap-3>
    <button class="icon-btn !outline-none" @click="toggleDark()">
      <div v-if="isDark" i-carbon-moon />
      <div v-else i-carbon-sun />
    </button>

    <a class="icon-btn" i-carbon-logo-github rel="noreferrer" href="https://github.com/xieyezi/food-storage-list.git"
      target="_blank" title="GitHub" />
  </nav>
</template>
