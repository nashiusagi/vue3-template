<script setup lang="ts">
import DarkModeToggleButton from "@/components/atoms/DarkModeToggleButton/DarkModeToggleButton.vue";
import HeaderItem from "@/components/atoms/HeaderItem/HeaderItem.vue";
import { useBreakpoints, breakpointsElement, useDark } from "@vueuse/core";
import { ref, watch } from "vue";
import MenuButton from "@/components/atoms/MenuButton/MenuButton.vue";
import type { HeaderItemData } from "@/types/api";

const isDark = ref(useDark().value);
watch(useDark(), () => {
  isDark.value = useDark().value;
});

const breakpoints = useBreakpoints(breakpointsElement);
const isMobileMode = breakpoints.smallerOrEqual("md");
const isMenuOpenWhenMobile = ref(false);
const toggleIsMenuVisible = () => {
  isMenuOpenWhenMobile.value = !isMenuOpenWhenMobile.value;
};

const headerItems: Array<HeaderItemData> = [
  {
    id: 1,
    title: "index",
    link: "/index",
  },
  {
    id: 2,
    title: "sample",
    link: "/sample",
  },
  {
    id: 3,
    title: "sample2",
    link: "/sample",
  },
  {
    id: 4,
    title: "sample3",
    link: "/sample",
  },
];
</script>

<template>
  <div :class="[$style.headerWrapper, { [$style.dark]: isDark }]">
    <div v-if="isMobileMode" :class="$style.headerContainer">
      <div>
        <MenuButton @click="toggleIsMenuVisible" :class="$style.menuButton" />
      </div>
      <div>
        <span :class="[$style.headerTitle, { [$style.dark]: isDark }]"
          >Vue3 Template</span
        >
      </div>
      <div :class="$style.dark_mode_button_container">
      </div>
    </div>
    <div v-else :class="$style.headerContainer">
      <div>
        <span :class="[$style.headerTitle, { [$style.dark]: isDark }]"
          >Vue3 Template</span
        >
      </div>
      <div :class="$style.header_right">
        <nav v-for="headerItem in headerItems" :key="headerItem.id" :class="$style.headerNav">
          <HeaderItem :link="headerItem.link" :title="headerItem.title" />
        </nav>
        <div :class="$style.dark_mode_button_container">
          <DarkModeToggleButton />
        </div>
      </div>
    </div>
  </div>
  <div v-if="isMobileMode&&isMenuOpenWhenMobile">
    <nav v-for="headerItem in headerItems" :key="headerItem.id" :class="$style.menuList">
      <HeaderItem :link="headerItem.link" :title="headerItem.title" :class="$style.menu" />
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
  padding: 8px;
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
  background-color: #fff;
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
