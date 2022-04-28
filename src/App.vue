<template>
  <div class="theme-container">
    <header class="navbar">
      <div class="navbar-header">
        <div class="sidebar-btn" @click="showSidebar"><expand /></div>
        <router-link to="/" class="home-link"><img src="./assets/images/oho.jpeg" class="logo" /> <span>OhO</span></router-link>
      </div>
      <div class="navbar-links">
        <el-menu
          :default-active="1"
          class="el-menu-demo"
          mode="horizontal"
          ellipsis=false
          @select="handleSelect"
        >
          <el-sub-menu index="1">
            <template #title>起步</template>
            <el-menu-item index="1-1"><router-link to="/home" class="sidebar-link">介绍</router-link></el-menu-item>
            <el-menu-item index="1-2"><router-link to="/install" class="sidebar-link">安装</router-link></el-menu-item>
            <el-menu-item index="1-2"><router-link to="/develop" class="sidebar-link">开发与构建</router-link></el-menu-item>
          </el-sub-menu>
          <el-menu-item index="2"><router-link to="/config">配置</router-link></el-menu-item>
        </el-menu>
      </div>
    </header>
    <aside class="sidebar">
      <el-menu
        default-active="1-1"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>起步</span>
          </template>
          <el-menu-item index="1-1"><router-link to="/home" class="sidebar-link">介绍</router-link></el-menu-item>
          <el-menu-item index="1-2"><router-link to="/install" class="sidebar-link">安装</router-link></el-menu-item>
          <el-menu-item index="1-2"><router-link to="/develop" class="sidebar-link">开发与构建</router-link></el-menu-item>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <template #title><router-link to="/config" class="sidebar-link">配置</router-link></template>
        </el-menu-item>
      </el-menu>
    </aside>
    <main class="main-page">
      <router-view class="main-container" v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script setup>
  import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
    Expand,
  } from '@element-plus/icons-vue'
  import { getCurrentInstance, ref } from 'vue'
  const name = "Oho-guide APP"
  const { proxy } = getCurrentInstance();

  const isCollapse = ref(false)
  const handleOpen = (key, keyPath) => {
    console.log(key, keyPath)
  }
  const handleClose = (key, keyPath) => {
    console.log(key, keyPath)
  }
  const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
  }

  let hasShowSidebar = false;
  function showSidebar(event) {
    let themeContainer = document.getElementsByClassName('theme-container')[0]

    if (!proxy.$_C.hasClass(themeContainer, 'sidebar-open')) {
      proxy.$_C.addClass(themeContainer, 'sidebar-open')
      ohoTips().success('打开侧边栏');
    } else {
      proxy.$_C.removeClass(themeContainer, 'sidebar-open')
    }
  }
</script>

<style>
h1, h2, h3, h4 {
  margin-top: .4rem;
}

a {
  font-weight: 600;
  text-decoration: none;
}

:root {
  --el-font-size-base: .14rem;
}

body {
  /* font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif; */
  font-family: Inter,Roboto,Oxygen,Fira Sans,Helvetica Neue,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #001428;
  font-size: 0.16rem;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 0.6rem;
  z-index: 100;
  padding: 0.05rem 0.1rem;
  line-height: 0.5rem;
  color: #3f4d47;
  background-color: #fff;
  box-sizing: border-box;
  border-bottom: 1px solid #ececec;
}

.navbar .navbar-header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 4rem;
  height: .6rem;
  padding: 0.05rem 0.3rem;
  line-height: 0.5rem;
}

.navbar .sidebar-btn {
  position: absolute;
  top: .15rem;
  display: none;
  width: 0.3rem;
  height: 0.3rem;
  cursor: pointer;
}

.navbar .logo {
  height: .4rem;
  vertical-align: top;
}

.navbar .home-link {
  margin-left: 0.05rem;
  color: #3f4d47;
}

.navbar .navbar-links {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 99;
  /* width: calc(100% - 2rem); */
  width: 100%;
  height: 0.6rem;
  line-height: 0.5rem;
}
.navbar .navbar-links .el-menu {
  --el-menu-item-height: .56rem;
}
.navbar .navbar-links .el-menu--horizontal {
  justify-content: flex-end;
  padding-right: 0.3rem;
}


a.nav-link {
  color: #3f4d47;
}

a.nav-link + a.nav-link {
  margin-left: 0.15rem;
}

a.nav-link.active {
  font-weight: 600;
  color: #1eb74d;
  /* border-left-color: #1eb74d; */
}

a.nav-link:hover {
  font-weight: 600;
  color: #1eb74d;
}

.sidebar {
  font-size: 16px;
  background-color: #fff;
  width: 200px;
  position: fixed;
  z-index: 10;
  margin: 0;
  top: 0.6rem;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  /* border-right: 1px solid #ececec; */
  overflow-y: auto;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  /* width: 200px;
  min-height: 400px; */
  height: 100%;
}

.sidebar .sidebar-links {
  padding: 0.08rem 0;
}

.sidebar ul {
  margin: 0;
  list-style-type: none;
}

.sidebar > .sidebar-links > li > a.sidebar-link {
  font-size: .18;
  line-height: 1.6;
  font-weight: 700;
}

a.sidebar-link {
  font-size: 1em;
  font-weight: 400;
  display: inline-block;
  color: #3f4d47;
  border-left: 0.03rem solid transparent;
  padding: 0.08rem 0.2rem;
  line-height: 1.3;
  width: 100%;
  box-sizing: border-box;
}

a.sidebar-link.active {
  font-weight: 600;
  color: #1eb74d;
  /* border-left-color: #1eb74d; */
}

a.sidebar-link:hover {
  font-weight: 600;
  color: #1eb74d;
}

.main-page {
  padding-top: 0.6rem;
  padding-left: 200px;
  /* background-color: #f4f4f4; */
}

.main-container {
  padding: .3rem 1rem;
}

.main-container .main-header {
  margin-bottom: .1rem;
}

/* router 动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
/* router 动画 */

.main-page p,
.main-page ol>li {
  line-height: 1.6;
}

.main-page ol>li {
  line-height: 1.7;
  font-size: .15rem;
}

.tip {
    padding: .08rem .16rem;
    border-radius: .04rem;
    margin: .20rem 0;
}
.tip.tip-default {
    border-left: .05rem solid #a4d1ff;
    background-color: #f2fbff;
}
.tip.tip-gray {
    border-left: 0.05rem solid #c7c7c7;
    background-color: #f4f4f4;
    color: #7f7f7f;
}

@media (min-width: 1440px) {
  .main-container {
    padding: .3rem 2rem;
  }
}

@media (max-width: 1080px) {
  .main-container {
    padding: .3rem .5rem;
  }
}

@media (max-width: 800px) {
  .main-container {
    padding: .3rem .2rem;
  }
}

@media (max-width: 720px) {
  .navbar .sidebar-btn {
    display: inline-block;
  }

  .navbar .home-link {
    margin-left: .5rem;
    color: #3f4d47;
  }

  .navbar .home-link span {
    display: none;
  }

  .sidebar {
    transform: translateX(-100%);
    transition: transform .2s ease;
  }

  .sidebar-open .sidebar{
    transform: translateX(0);
  }

  .main-page {
    padding-left: 0;
  }

  .main-container {
    padding: .2rem .5rem;
  }
}

@media (max-width: 480px) {
  .main-container {
    padding: .2rem .1rem;
  }

  .navbar .navbar-links {
    width: 2.4rem;
  }
}
</style>
