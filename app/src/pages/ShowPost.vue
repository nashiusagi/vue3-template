<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout/MainLayout.vue";
import axios from "axios";
import { reactive } from "vue";
import type { Post, PostData } from "@/types/api";

const post: PostData = reactive({
  data: {} as Post,
  isLoaded: false,
  error: {},
});

axios
  .get("/msw/post")
  .then((res) => {
    post.data = res.data;
    post.isLoaded = true;
  })
  .catch((e) => {
    post.isLoaded = true;
    post.error = e;
  });
</script>

<template>
  <main-layout>
    <div>
      <h1>{{ post.data.title }}</h1>
      <p>{{ post.data.body }}</p>
    </div>
  </main-layout>
</template>
