<script setup lang="ts">
import axios from "axios";
import { reactive } from "vue";
import MainLayout from "@/layouts/MainLayout.vue";
import ErrorLabel from "@/components/atoms/ErrorLabel.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const form = reactive({
  title: "",
  body: "",
});

const formError = reactive({
  titleError: "",
  bodyError: "",
});

const submit = () => {
  if (form.title === "") {
    formError.titleError = "※ titleに1文字以上設定してください";
  } else {
    formError.titleError = "";
  }
  if (form.body === "") {
    formError.bodyError = "※ 本文に1文字以上設定してください";
  } else {
    formError.bodyError = "";
  }
  if (form.title === "" || form.body === "") {
    return;
  }
  axios.post("/msw/post/store", { post: form }).then(() => {
    router.push("/index");
  });
};

const goIndex = () => {
  router.push("/index");
};
</script>

<template>
  <main-layout>
    <div>
      <h1>ブログを作成する</h1>
      <el-form
        :model="form"
        label-width="120px"
      >
        <el-form-item label="タイトル">
          <el-input v-model="form.title" />
          <ErrorLabel :error="formError.titleError" />
        </el-form-item>
        <el-form-item label="本文">
          <el-input
            v-model="form.body"
            type="textarea"
            :rows="30"
          />
          <ErrorLabel :error="formError.bodyError" />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submit"
          >
            Create
          </el-button>
          <el-button @click="goIndex">
            Cancel
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </main-layout>
</template>
