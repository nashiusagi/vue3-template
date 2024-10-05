<script setup lang="ts">
import SideBar from "@/components/organisms/SideBar/SideBar.vue";
import TheHeader from "@/components/organisms/TheHeader.vue";
</script>

<template>
  <el-container>
    <el-header :class="$style.header">
      <TheHeader />
    </el-header>
    <el-container :class="$style.container">
      <el-aside
        width="200px"
        :class="$style.wrap"
      >
        <side-bar />
      </el-aside>
      <el-main :class="$style.main">
        <slot />
      </el-main>
    </el-container>
  </el-container>
</template>

<style module>
.header {
  width: 100%;
  background-color: #519503;
  position: fixed;
  overflow: hidden;
  z-index: 100;
}

.container {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.wrap {
  padding: 0;
  background-color: #545c64;
  position: fixed;
  height: calc(100vh - 80px);
  border-top: 70px solid #fff;
  border-bottom: 10px solid #fff;
  border-left: 10px solid #fff;
  overflow: hidden;
}

.main {
  padding-left: 240px;
}
</style>
