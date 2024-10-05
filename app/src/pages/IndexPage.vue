<script setup lang="ts">
import { reactive } from "vue";
import { PostsData } from "@/types/api";
import axios from "axios";
import MainLayout from "@/layouts/MainLayout.vue";
import PostCard from "@/components/organisms/PostCard/PostCard.vue";

const messageData: PostsData = reactive({
  data: [],
  isLoaded: false,
  error: {},
});

axios.get("/msw/index").then((res) => {
  messageData.data = res.data;
  messageData.isLoaded = true;
});
</script>

<template>
  <main-layout>
    <div>
      <h1>Hello, this is an index page!</h1>
      <div :class="$style.create_link_wrapper">
        <a
          href="/post/create"
          :class="$style.create_link"
        >create</a>
      </div>
      <ul
        v-for="post in messageData.data"
        :key="post.id"
      >
        <PostCard :post="post" />
      </ul>
    </div>
  </main-layout>
</template>

<style module>
.create_link_wrapper {
  height: 32px;
  width: 78px;
  border: 1px solid #409eff;
  border-radius: 3px;
  background-color: #409eff;
}

.create_link_wrapper:hover {
  background-color: #1389ff;
}
.create_link {
  color: #ffffff;
  display: block;
  width: 100%;
  height: 100%;
  line-height: 100%;
  text-align: center;
  padding: 6px 0 6px 0;
}
</style>
