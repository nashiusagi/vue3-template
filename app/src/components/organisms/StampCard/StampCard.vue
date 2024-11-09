<script setup lang="ts">
import NotCheckedStamp from "@/components/atoms/Stamps/NotCheckedStamp/NotCheckedStamp.vue";
import CheckedStamp from "@/components/atoms/Stamps/CheckedStamp/CheckedStamp.vue";
import ErrorStamp from "@/components/atoms/Stamps/ErrorStamp/ErrorStamp.vue";
import type { StampData } from "@/types/api";

defineProps({
  stampContents: Array<StampData>,
});
</script>

<template>
  <div :class="$style.stamp_card">
    <div v-for="(stampContent, index) in stampContents" :key="index" >
      <NotCheckedStamp v-if="stampContent.status == 'NotChecked'" :text="stampContent.text"/>
      <CheckedStamp v-else-if="stampContent.status == 'Checked'" />
      <ErrorStamp v-else />
    </div>
  </div>
</template>

<style module>
.stamp_card {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4px;

  border: 2px solid #000;
  padding: 16px;
  width: calc( 48px * 5 + 4px * 4 + 16px * 2);
}
</style>
