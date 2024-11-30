<script setup lang="ts">
defineProps<{
  imagePath: string
}>()
</script>

<template>
  <div>
    <img :src="imagePath" />
  </div>
</template>
