<script setup lang="ts">
import { ref, reactive, onMounted, watch } from "vue";
import type { PostsData } from "@/types/api";
import axios from "axios";
import MainLayout from "@/layouts/MainLayout/MainLayout.vue";
import PostCard from "@/components/organisms/PostCard/PostCard.vue";
import PaginationBar from "@/components/organisms/PaginationBar/PaginationBar.vue";
import { useAuthStore } from "@/stores/useAuthStore";
import { storeToRefs } from "pinia";

const maxPage = ref(1);
const pageNum = ref(1);
const messageData: PostsData = reactive({
  data: {
    posts: [],
    maxPage: maxPage.value,
  },
  isLoaded: false,
  error: {},
});

const fetchPosts = (page: number) => {
  axios.get(`/msw/index?page=${page}`).then((res) => {
    console.log(page);
    const data = res.data;
    console.log(data);
    messageData.data.posts = data.posts;
    messageData.data.maxPage = data.max_page;
    maxPage.value = messageData.data.maxPage;

    messageData.isLoaded = true;
  });
};

const authStore = useAuthStore();
const { isLoggedIn } = storeToRefs(authStore);
const { logout } = authStore;

const onChange = (num: number) => {
  pageNum.value = num;
};

watch(pageNum, () => fetchPosts(pageNum.value));
onMounted(() => fetchPosts(pageNum.value));
</script>

<template>
  <main-layout>
    <div>
      <h1>Hello, this is an index page!</h1>
      <div :class="$style.create_link_wrapper">
        <a href="/post/create" :class="$style.create_link">create</a>
      </div>
      <div :class="$style.create_link_wrapper">
        <a v-if="!isLoggedIn" href="/login" :class="$style.create_link">Login</a>
        <a v-if="isLoggedIn" @click="logout" :class="$style.create_link">Logout</a>
      </div>
      <div v-if="messageData.isLoaded">
        <div :class="$style.cards">
          <div v-for="post in messageData.data.posts" :key="post.id">
            <PostCard :post="post" />
          </div>
        </div>
        <PaginationBar :maxPage="maxPage" :paddingSize="1" @change="onChange" />
      </div>
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

.cards {
  padding: 2em;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
</style>
