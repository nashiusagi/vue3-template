<script setup lang="ts">
import DarkModeToggleButton from "@/components/atoms/DarkModeToggleButton/DarkModeToggleButton.vue";
import HeaderItem from "@/components/atoms/HeaderItem/HeaderItem.vue";
import { useBreakpoints, breakpointsElement, useDark } from "@vueuse/core";
import { Menu } from "@element-plus/icons-vue";
import { ref, watch } from "vue";

const isDark = ref(useDark().value);
watch(useDark(), () => {
  isDark.value = useDark().value;
});

const breakpoints = useBreakpoints(breakpointsElement)
const isMobileMode = breakpoints.smallerOrEqual("md")
const isMenuOpenWhenMobile = ref(false)
const toggleIsMenuVisible = () => {
  isMenuOpenWhenMobile.value = !isMenuOpenWhenMobile.value
}
</script>

<template>
  <div :class="[$style.headerWrapper, { [$style.dark]: isDark }]">
    <div v-if="isMobileMode" :class="$style.headerContainer">
      <button @click="toggleIsMenuVisible" :class="[$style.menuButton, { [$style.dark]: isDark }]">
        <el-icon :size="24"><Menu /></el-icon>
      </button>
      <div>
        <span :class="[$style.headerTitle, { [$style.dark]: isDark }]"
          >Vue3 Template</span
        >
      </div>
      <div :class="$style.dark_mode_button_container">
        <DarkModeToggleButton />
      </div>
    </div>
    <div v-else :class="$style.headerContainer">
      <div>
        <span :class="[$style.headerTitle, { [$style.dark]: isDark }]"
          >Vue3 Template</span
        >
      </div>
      <div :class="$style.header_right">
        <nav :class="$style.headerNav">
          <HeaderItem :link="'/index'" :title="'index'" />
          <HeaderItem :link="'/sample'" :title="'sample'" />
          <HeaderItem :link="'/sample'" :title="'sample2'" />
          <HeaderItem :link="'/sample'" :title="'sample3'" />
        </nav>
        <div :class="$style.dark_mode_button_container">
          <DarkModeToggleButton />
        </div>
      </div>
    </div>
  </div>
  <div v-if="isMobileMode&&isMenuOpenWhenMobile">
    <nav :class="$style.menuList">
      <HeaderItem :link="'/index'" :title="'index'" :class="$style.menu" />
      <HeaderItem :link="'/sample'" :title="'sample'" :class="$style.menu" />
      <HeaderItem :link="'/sample'" :title="'sample2'" :class="$style.menu" />
      <HeaderItem :link="'/sample'" :title="'sample3'" :class="$style.menu" />
    </nav>
  </div>
</template>

<style module>
.headerWrapper {
  width: 100%;
  height: 100px;
  background-color: #fff;
}
.headerWrapper.dark {
  width: 100%;
  height: 100px;
  background-color: #555;
}

.headerContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}

.headerTitle {
  color: #000;
  font-size: 32px;
}
.headerTitle.dark {
  color: #eee;
  font-size: 32px;
}

.menuButton {
  background-color: #eee;
  color: #000;
}
.menuButton.dark {
  background-color: #111;
  color: #fff;
}

.header_right {
  display: flex;
  flex-direction: row;
  height: 100%;
  gap: 8px;
}

.menuList {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.menu {
  width: 100%;
  border: 1px solid #222;
  border-radius: 4px;
}

.headerNav {
  height: 100%;
  display: flex;
  flex-direction: row;
  border: 2px solid #222;
  border-radius: 4px;
}

.dark_mode_button_container {
  margin-top: auto;
  margin-bottom: auto;
}
</style>
