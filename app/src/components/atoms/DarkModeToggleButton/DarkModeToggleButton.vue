<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
import { Moon } from "@element-plus/icons-vue";

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div :class="$style.dark_mode_button">
    <span @click.stop="toggleDark()"><el-icon :size="24"><Moon /></el-icon> </span>
    <el-switch v-model="isDark" size="large" ></el-switch>
  </div>
</template>

<style module>
.dark_mode_button {
  line-height: 40px;
  display: flex;
  gap: 4px;

  span {
    line-height: 40px;
    svg {
      margin-top: 14px;
    }
  }
}
</style>
