<template>
  <el-form
    ref="loginFormRef"
    :model="loginForm"
    :rules="loginRules"
    size="large"
  >
    <el-form-item prop="username">
      <el-input v-model="loginForm.username" placeholder="请输入账号">
        <template #prefix>
          <el-icon class="el-input__icon"><user /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        v-model="loginForm.password"
        type="password"
        placeholder="请输入登录密码"
        show-password
        autocomplete="new-password"
      >
        <template #prefix>
          <el-icon class="el-input__icon"><lock /></el-icon>
        </template>
      </el-input>
    </el-form-item>
  </el-form>
  <div class="login-btn">
    <!-- @click="login(loginFormRef)" -->
    <el-button
      icon="UserFilled"
      round
      size="large"
      type="primary"
      :loading="loading"
      @click="login(loginFormRef)"
    >
      立即登录
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import type { ElForm } from "element-plus";
import { ElMessage } from "element-plus";
// import { signin } from '@/api/restful/common'
// import md5 from 'js-md5'
import { GlobalStore } from "@/store";
import { loginApi } from "@/api/modules/login";

const globalStore = GlobalStore();
const ResetPasswordRef = ref();
// 定义 formRef（校验规则）
type FormInstance = InstanceType<typeof ElForm>;
const loginFormRef = ref<FormInstance>();
const loginRules = reactive({
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
});

// 登录表单数据
const loginForm = reactive({
  username: "",
  password: "",
  code: "",
});
const verificationCode = reactive({
  uuid: "",
  img: "",
});
const emit = defineEmits(["setShowTab"]);
const setTab = (val) => {
  emit("setShowTab", val);
};
const loading = ref<boolean>(false);
const router = useRouter();

// login
const login = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (valid) {
      loading.value = true;
      const data = {
        username: loginForm.username,
        password: loginForm.password,
        code: loginForm.code,
        uuid: verificationCode.uuid,
      };
      loginApi(data)
        .then((res) => {
          console.log(res);
          // 存储 token
          globalStore.token = res.data;
          globalStore.userInfo = loginForm.username;
          // localStorage.setItem('userName', loginForm.username)
          // store.userName = res.data.username
          router.push({ name: "dataset" });
        })
        .catch(() => {
          ElMessage.error("输入信息有误请检查！");
        })
        .finally(() => {
          loading.value = false;
        });
    }
  });
};

onMounted(() => {
  // 监听enter事件（调用登录）
  document.onkeydown = (e: any) => {
    e = window.event || e;
    if (e.code === "Enter" || e.code === "enter") {
      if (loading.value) return;
      login(loginFormRef.value);
    }
  };
});

// 子组件数据暴露给父组件
const count = ref<number>(1);
const consoleNumber = (name: string): void => {
  console.log("我是子组件打印的数据", name);
};
defineExpose({
  count,
  consoleNumber,
});
</script>

<style scoped lang="scss">
@import "../index.scss";
:deep(.el-checkbox__label) {
  color: $common-font-color;
}
.common-font-color {
  color: $common-font-color;
}
.code_box {
  display: flex;
  height: 40px;
  > :nth-child(1) {
    margin-right: 20px;
  }
}
</style>
