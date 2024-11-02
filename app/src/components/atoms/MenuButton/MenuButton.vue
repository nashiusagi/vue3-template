<script setup lang="ts">
import { useDark } from "@vueuse/core";
import { Menu } from "@element-plus/icons-vue";
import { ref, watch } from "vue";

const isDark = ref(useDark().value);
watch(useDark(), () => {
  isDark.value = useDark().value;
});
</script>

<template>
  <button :class="[$style.menuButton, { [$style.dark]: isDark }]">
    <el-icon :size="24"><Menu /></el-icon>
  </button>
</template>

<style module>
.menuButton {
  background-color: #eee;
  color: #000;
}
.menuButton.dark {
  background-color: #111;
  color: #fff;
}
</style>
