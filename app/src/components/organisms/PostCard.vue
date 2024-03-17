<script setup lang="ts">
import { Post } from "@/types/api";

const props = defineProps<{
  post: Post;
}>();

const link: string = `/post/${props.post.id}`;
</script>

<template>
  <li class="card">
    <div>
      <h2>
        <a class="post_link" :href="link">{{ post.title }}</a>
      </h2>
      <p>{{ post.body }}</p>
    </div>
  </li>
</template>

<style scoped>
.card {
  cursor: pointer;
  border: solid 1px #e1e1e1;
  box-sizing: border-box;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.16);
  overflow: hidden;
}

.post_link {
  color: #000;
  display: block;
  height: 100%;
  line-height: 100%;
}
</style>
