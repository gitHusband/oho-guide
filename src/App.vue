<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="theme-container">
    <header class="navbar">
      <router-link to="/" class="home-link">OHO-TIPS GUIDE</router-link>
      <div class="navbar-links">
        <nav class="nav-links">
          <router-link to="/home" class="nav-link">首页</router-link>
          <router-link to="/mine" class="nav-link">我的</router-link>
        </nav>
      </div>
    </header>
    <aside class="sidebar">
      <ul class="sidebar-links">
        <li><router-link to="/home" class="sidebar-link">首页</router-link></li>
        <li><router-link to="/mine" class="sidebar-link">我的</router-link></li>
      </ul>
    </aside>
    <main class="main-page">
      <router-view></router-view>
    </main>
  </div>
</template>

<style>
a {
  font-weight: 600;
  text-decoration: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #3f4d47;
  font-size: 0.16rem;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 0.5rem;
  padding: 0.05rem 0.1rem;
  line-height: 0.4rem;
  color: #3f4d47;
  background-color: #fff;
  box-sizing: border-box;
  border-bottom: 1px solid #ececec;
}

.navbar .home-link {
  margin-left: 0.1rem;
  color: #3f4d47;
}

.navbar .navbar-links {
  position: absolute;
  top: 0;
  right: 0.3rem;
  padding: 0.05rem 0.1rem;
  line-height: 0.4rem;
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
  border-left-color: #1eb74d;
}

a.nav-link:hover {
  font-weight: 600;
  color: #1eb74d;
}

.sidebar {
  font-size: 16px;
  background-color: #fff;
  width: 2rem;
  position: fixed;
  z-index: 10;
  margin: 0;
  top: 0.5rem;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  border-right: 1px solid #ececec;
  overflow-y: auto;
}

.sidebar .sidebar-links {
  padding: 0.08rem 0;
}

.sidebar ul {
  margin: 0;
  list-style-type: none;
}

.sidebar > .sidebar-links > li > a.sidebar-link {
  font-size: 1.2em;
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
  border-left-color: #1eb74d;
}

a.sidebar-link:hover {
  font-weight: 600;
  color: #1eb74d;
}

.main-page {
  padding-top: 0.5rem;
  padding-left: 2rem;
  background-color: #f4f4f4;
}
</style>
