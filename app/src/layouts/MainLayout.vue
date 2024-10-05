<script setup lang="ts">
import SideBar from "@/components/organisms/SideBar/SideBar.vue";
import TheHeader from "@/components/organisms/TheHeader/TheHeader.vue";
</script>

<template>
  <el-container>
    <header :class="$style.header">
      <TheHeader />
    </header>
    <section :class="$style.container">
      <el-aside width="200px" :class="$style.wrap">
        <side-bar />
      </el-aside>
      <el-main :class="$style.main">
        <slot />
      </el-main>
    </section>
  </el-container>
</template>

<style module>
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
  flex-direction: column;
  box-sizing: border-box;
  padding: 100px 0 0 0;
}

.wrap {
  padding: 0;
  background-color: #545c64;
  position: fixed;
  height: calc(100vh - 80px);
  overflow: hidden;
}

.main {
  padding-left: 240px;
}
</style>
