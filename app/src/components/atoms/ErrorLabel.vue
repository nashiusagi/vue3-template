<script setup lang="ts">
defineProps<{
  error: string
}>()

</script>

<template>
  <p class="error_label">{{ error }}</p>
</template>

<style scoped>
.error_label {
  color: #ff0000;
}
</style>
