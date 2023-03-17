<template>
  <div v-show="showItem === 'login'">
    <el-form
      ref="loginFormRef"
      :model="loginForm"
      :rules="loginRules"
      size="large"
    >
      <el-form-item prop="mobile">
        <el-input
          v-model="loginForm.mobile"
          placeholder="请输入账号"
        >
          <template #prefix>
            <el-icon class="el-input__icon"><user /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input
          v-model="loginForm.pwd"
          type="pwd"
          placeholder="请输入登录密码"
          show-pwd
          autocomplete="new-pwd"
        >
          <template #prefix>
            <el-icon class="el-input__icon"><lock /></el-icon>
          </template>
        </el-input>
      </el-form-item>
    </el-form>
    <div class="login-btn">
      <el-button
        round
        size="large"
        :loading="loading"
        @click="showItem = 'register'"
      >
        注册
      </el-button>
      <el-button
        round
        size="large"
        type="primary"
        :loading="loading"
        @click="login(loginFormRef)"
      >
        立即登录
      </el-button>
    </div>
  </div>
  <div v-show="showItem === 'register'">
    <el-form
      ref="registerFormRef"
      :model="registerForm"
      :rules="registerRules"
      size="large"
    >
      <el-form-item prop="mobile">
        <el-input
          v-model="registerForm.mobile"
          placeholder="请输入手机号"
        />
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input
          v-model="registerForm.pwd"
          type="pwd"
          placeholder="请输入登录密码"
          show-pwd
          autocomplete="new-pwd"
        />
      </el-form-item>
      <el-form-item prop="username">
        <el-input
          v-model="registerForm.username"
          placeholder="请输入昵称"
        />
      </el-form-item>
      <el-form-item prop="nickname">
        <el-input
          v-model="registerForm.nickname"
          placeholder="请输入昵称"
        />
      </el-form-item>
      <el-form-item
        prop="avatar"
        label="用户头像"
      >
        <UploadImg
          v-model:imageUrl="registerForm.avatar"
          width="135px"
          height="135px"
          :file-size="3"
        >
          <template #empty>
            <el-icon><Avatar /></el-icon>
            <span>请上传头像</span>
          </template>
        </UploadImg>
      </el-form-item>
    </el-form>
    <div class="login-btn">
      <el-button
        round
        size="large"
        :loading="loading"
        @click="showItem = 'login'"
      >
        返回登陆
      </el-button>
      <el-button
        round
        size="large"
        type="primary"
        :loading="loading"
        @click="register(registerFormRef)"
      >
        注册
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import type { ElForm } from 'element-plus'
import { ElMessage } from 'element-plus'
// import { GlobalStore } from '@/store'
import { loginApi, registerApi } from '@/api/modules/login'
import UploadImg from '@/components/Upload/Img.vue'

// const globalStore = GlobalStore()
const loading = ref<boolean>(false)
const router = useRouter()
// login
// 定义 formRef（校验规则）
type FormInstance = InstanceType<typeof ElForm>
const loginFormRef = ref<FormInstance>()
const loginRules = reactive({
  mobile: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  pwd: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})

// 登录表单数据
const loginForm = reactive({
  mobile: '',
  pwd: ''
})
const showItem = ref('login')
const login = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate(async (valid) => {
    if (valid) {
      loading.value = true
      const data = {
        mobile: loginForm.mobile,
        pwd: loginForm.pwd
      }
      loginApi(data)
        .then(() => {
          router.push({ name: 'myAccount' })
        })
        .catch(() => {
          ElMessage.error('输入信息有误请检查！')
        })
        .finally(() => {
          loading.value = false
        })
    }
  })
}

// register
const registerFormRef = ref<FormInstance>()
const registerRules = reactive({
  mobile: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
  pwd: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  username: [{ required: true, message: '请输入账号名称', trigger: 'blur' }],
  nickname: [{ required: true, message: '请输入昵称', trigger: 'blur' }],
  avatar: [{ required: true, message: '请上传', trigger: 'blur' }]
})
// 注册表单数据
const registerForm = reactive({
  mobile: '',
  pwd: '',
  username: '',
  nickname: '',
  avatar: ''
})
function register(formEl: FormInstance | undefined) {
  if (!formEl) return
  formEl.validate(async (valid) => {
    if (valid) {
      loading.value = true
      const data = {
        mobile: registerForm.mobile,
        pwd: registerForm.pwd,
        username: registerForm.username,
        nickname: registerForm.nickname,
        picture: registerForm.avatar
      }
      registerApi(data)
        .then(() => {
          ElMessage.success('注册成功！')
          showItem.value = 'login'
        })
        .catch(() => {
          ElMessage.error('输入信息有误请检查！')
        })
        .finally(() => {
          loading.value = false
        })
    }
  })
}
</script>

<style scoped lang="scss">
@import '../index.scss';
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
