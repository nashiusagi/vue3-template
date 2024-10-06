<script setup lang="ts">
defineProps<{
  error: string;
}>();
</script>

<template>
  <p :class="$style.error_label" class="error_label">
    {{ error }}
  </p>
</template>

<style module>
.error_label {
  color: #ff0000;
}
</style>
