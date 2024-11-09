<script setup lang="ts">
</script>

<template>
  <div :class="$style.stamp">
    <span :class="$style.stamp_text">
      !
    </span>
  </div>
</template>

<style module>
.stamp {
  border-radius: 999px;
  border: 3px solid #ca2828;
  width: 48px;
  height: 48px;
  background-color: #ca2828;
}

.stamp_text {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  color: #fff;
  font-size: 32px;
  line-height: 100%;
}
</style>
