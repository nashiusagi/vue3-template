<script setup lang="ts">
import { useDark } from "@vueuse/core";
import { ref, watch } from "vue";

defineProps<{
  link: string;
  title: string;
}>();

const isDark = ref(useDark().value)
watch(useDark(), ()=>{
  isDark.value = useDark().value
})
</script>

<template>
  <div :class="[$style.header_container, {[$style.dark]: isDark}]" class="header_container">
    <a :class="[$style.header_title, {[$style.dark]: isDark}]" class="header_title" :href="link">{{ title }}</a>
  </div>
</template>

<style module>
.header_container {
  width: 160px;
  cursor: pointer;
  height: 100%;
}

.header_container.dark {
  background-color: #555;
}

.header_container:hover {
  background-color: #eee;
  a {
    color: #1c64f2;
  }
}

.header_container.dark:hover {
  background-color: #777;
  a {
    color: #169b16;
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

.header_title.dark {
  color: #eee;
}
</style>
