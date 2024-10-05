<script setup lang="ts">
defineProps<{
  link: string;
  title: string;
}>();
</script>

<template>
  <div class="header_container">
    <a class="header_title" :href="link">{{ title }}</a>
  </div>
</template>

<style scoped>
.header_container {
  width: 160px;
  cursor: pointer;
  height: 100%;
}

.header_container:hover {
  background-color: #eee;
  a {
    color: #1c64f2;
  }
}

.header_title {
  color: #000;
  display: block;
  height: 100%;
  line-height: 100%;
  padding: 18px 0 18px 0;
  text-align: center;
  font-size: 24px;
}
</style>
