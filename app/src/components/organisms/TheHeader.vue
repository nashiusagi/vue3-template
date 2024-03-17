<script setup lang="ts">
import HeaderItem from "@/components/atoms/HeaderItem.vue";
</script>

<template>
  <div :class="$style.headerWrapper">
    <nav :class="$style.headerNav">
      <HeaderItem :link="'/index'" :title="'index'" />
      <HeaderItem :link="'/sample'" :title="'sample'" />
      <HeaderItem :link="'/sample'" :title="'sample2'" />
      <HeaderItem :link="'/sample'" :title="'sample3'" />
    </nav>
  </div>
</template>

<style module>
.headerWrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}

.headerNav {
  width: 100%;
  display: flex;
  flex-direction: row;
}
</style>
