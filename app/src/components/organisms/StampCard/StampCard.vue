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
    <div v-for="(stampContent, index) in stampContents" :key="index" :class="$style.stamp">
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
  background-color: #c2baba;

  border: 2px solid #c2baba;
  padding: 16px;
  width: calc( 54px * 5 + 4px * 4 );
  height: calc( 54px * 2 + 4px );
}

.stamp {
  width: 54px;
  height: 54px;
}
</style>
