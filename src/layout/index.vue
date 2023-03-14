<!--
 * @Author: yujingbo
 * @Date: 2022-11
 * @LastEditors: yujingbo
 * @LastEditTime: 2022-12
 * @Description: 
-->
<template>
  <el-container>
    <el-aside>
      <Menu />
    </el-aside>
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <section class="main-box">
          <router-view v-slot="{ Component, route }">
            <transition
              appear
              name="fade-transform"
              mode="out-in"
            >
              <keep-alive :include="cacheRouter">
                <component
                  :is="Component"
                  :key="route.path"
                />
              </keep-alive>
            </transition>
          </router-view>
        </section>
      </el-main>
      <!-- <el-footer>
        <Footer />
      </el-footer> -->
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Menu from './Menu/index.vue'
import Header from './Header/index.vue'
// import Footer from './Footer/index.vue'
import cacheRouter from '@/routers/cacheRouter'
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
