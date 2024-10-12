<script setup lang="ts">
import SideBar from "@/components/organisms/SideBar/SideBar.vue";
import TheHeader from "@/components/organisms/TheHeader/TheHeader.vue";
</script>

<template>
  <section :class="$style.whole_container">
    <header :class="$style.header">
      <TheHeader />
    </header>
    <div :class="$style.container">
      <aside width="200px" :class="$style.side_menu">
        <side-bar />
      </aside>
      <section :class="$style.main">
        <div :class="$style.main_content">
          <slot />
        </div>
      </section>
    </div>
  </section>
</template>

<style module>
.whole_container {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  min-width: 0;
}

.header {
  width: 100%;
  position: fixed;
  overflow: hidden;
  z-index: 100;
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 100px 0 0 0;
}

.side_menu {
  padding: 0;
  background-color: #545c64;
  position: fixed;
  height: calc(100vh - 100px);
  overflow: hidden;
  box-sizing: border-box;
  flex-shrink: 0;
  width: 20%;
}

.main {
  margin-left: auto;
  width: 80%;
}

.main_content {
  padding: 2em;
}
</style>
