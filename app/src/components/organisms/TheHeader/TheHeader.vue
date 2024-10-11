<script setup lang="ts">
import DarkModeToggleButton from "@/components/atoms/DarkModeToggleButton/DarkModeToggleButton.vue";
import HeaderItem from "@/components/atoms/HeaderItem/HeaderItem.vue";
import { useDark } from "@vueuse/core";
import { ref, watch } from "vue";

const isDark = ref(useDark().value)
watch(useDark(), ()=>{
  isDark.value = useDark().value
})
</script>

<template>
  <div :class="[$style.headerWrapper, {[$style.dark]: isDark}]">
    <div :class="$style.headerContainer">
      <div>
        <span :class="[$style.headerTitle, {[$style.dark]: isDark}]">Vue3 Template</span>
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

.header_right {
  display: flex;
  flex-direction: row;
  height: 100%;
  gap: 8px;
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
