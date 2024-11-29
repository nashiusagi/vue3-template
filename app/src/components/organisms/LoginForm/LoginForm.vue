<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import axios from "axios";
import { useAuthStore } from "@/stores/useAuthStore";
import { useRouter } from "vue-router";

const router = useRouter();

const ruleFormRef = ref<FormInstance>();

const ruleForm = reactive({
  email: "",
  pass: "",
});

const rules = reactive<FormRules<typeof ruleForm>>({
  email: [
    {
      required: true,
      message: "Please input email address",
      trigger: "blur",
    },
    {
      type: "email",
      message: "Please input correct email address",
      trigger: ["blur", "change"],
    },
  ],
  pass: [
    {
      required: true,
      message: "Please input password",
      trigger: "blur",
    },
    {
      min: 8,
      message: "Length should be greater than 8",
      trigger: "blur",
    },
  ],
});

const authStore = useAuthStore();
const { login } = authStore;

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      axios.post("/msw/login", { post: ruleForm }).then((response) => {
        const data = response.data;
        login(data.accessToken, data.refreshToken);
        console.log(data);

        router.push("/index");
      });
      console.log("submit!");
    } else {
      console.error("error submit!");
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<template>
  <el-form
    ref="ruleFormRef"
    style="max-width: 600px"
    :model="ruleForm"
    status-icon
    :rules="rules"
    label-width="auto"
    class="demo-ruleForm"
  >
    <el-form-item label="Email" prop="email">
      <el-input
        v-model="ruleForm.email"
        type="text"
        autocomplete="off"
      />
    </el-form-item>
    <el-form-item label="Password" prop="pass">
      <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        Submit
      </el-button>
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>
