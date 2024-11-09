<script setup lang="ts">
defineProps({
  text: Number,
});
</script>

<template>
  <div :class="$style.stamp">
    <span :class="$style.stamp_text">
      {{ text }}
    </span>
  </div>
</template>

<style module>
.stamp {
  border-radius: 999px;
  border: 3px solid #777;
  width: 48px;
  height: 48px;
  background-color: #777;
}

.stamp_text {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  color: #eee;
  font-size: 24px;
  line-height: 100%;
}
</style>
