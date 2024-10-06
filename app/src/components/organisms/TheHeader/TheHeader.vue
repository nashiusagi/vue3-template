<script setup lang="ts">
import DarkModeToggleButton from "@/components/atoms/DarkModeToggleButton/DarkModeToggleButton.vue";
import HeaderItem from "@/components/atoms/HeaderItem/HeaderItem.vue";
</script>

<template>
  <div :class="$style.headerWrapper">
    <div :class="$style.headerContainer">
      <div>
        <span :class="$style.headerTitle">Vue3 Template</span>
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
