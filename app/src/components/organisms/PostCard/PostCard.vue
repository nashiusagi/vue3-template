<script setup lang="ts">
import { Post } from "@/types/api";

const props = defineProps<{
  post: Post;
}>();

const link: string = `/post/${props.post.id}`;
</script>

<template>
  <div :class="$style.card">
      <a :class="$style.post_link" class="post_link" :href="link">{{ post.title }}</a>
      <p :class="$style.post_body">{{ post.body }}</p>
  </div>
</template>

<style module>
.card {
  cursor: pointer;
  border: solid 1px #e1e1e1;
  box-sizing: border-box;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.16);
  overflow: hidden;
  height: 160px;
}

.post_link {
  display: block;
  padding: 1em;
  height: calc(100% - 2em);
  color: #111827;
  font-size: 32px;
  font-weight: 700;
}

.post_body {
  margin-top: -70px;
  padding: 0 3em;
  color: #111827;
  font-size: 18px;
  line-height: 125%;
}
</style>
