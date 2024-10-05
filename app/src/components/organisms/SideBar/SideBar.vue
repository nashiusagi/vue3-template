<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<template>
  <div class="sidebar">
    <div>
      <p class="menu_label">
        Menu
      </p>
    </div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu
        class="el_sub_menu"
        index="1"
      >
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item
          index="1-1"
          class="el-menu-item"
        >
          <a href="/sample">sample</a>
        </el-menu-item>
        <el-menu-item index="1-2">
          item two
        </el-menu-item>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">
            item three
          </el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title>
            item four
          </template>
          <el-menu-item index="1-4-1">
            item one
          </el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item
        class="el_sub_menu"
        index="2"
      >
        <el-icon><icon-menu /></el-icon>
        <span>Navigator Two</span>
      </el-menu-item>
      <el-menu-item
        class="el_sub_menu"
        index="3"
        disabled
      >
        <el-icon><document /></el-icon>
        <span>Navigator Three</span>
      </el-menu-item>
      <el-menu-item
        class="el_sub_menu"
        index="4"
      >
        <el-icon><setting /></el-icon>
        <span>Navigator Four</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style scoped>
.menu_label {
  color: #fff;
  font-size: 24px;
  padding-left: 12px;
}

.el_sub_menu {
  width: 200px;
}

.el-menu-item a {
  display: block;
  width: 100%;
}
</style>
