<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <button class="py-[13px] px-[30px] border-2 border-white text-h3 text-white">
    {{ text }}
  </button>
</template>
