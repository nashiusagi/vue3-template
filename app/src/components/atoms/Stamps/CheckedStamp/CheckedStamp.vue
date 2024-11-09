<script setup lang="ts">
import { Check } from "@element-plus/icons-vue";
</script>
<template>
  <div :class="$style.stamp">
    <span :class="$style.stamp_text">
      <el-icon size="32"><Check /></el-icon>
    </span>
  </div>
</template>

<style module>
.stamp {
  border-radius: 999px;
  border: 3px solid #28ca28;
  width: 48px;
  height: 48px;
  background-color: #28ca28;
}

.stamp_text {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  color: #fff;
}
</style>
