<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->

      <nav>
        <h3>文件研究</h3>
        <RouterLink to="/">Home</RouterLink>
        <!-- <RouterLink to="/about">About</RouterLink> -->
        <RouterLink to="/page01">1. 第一個空白頁</RouterLink>
        <RouterLink to="/page02">2. 文字插值</RouterLink>
        <RouterLink to="/page03/1">3. 響應式基礎1</RouterLink>
        <RouterLink to="/page03/2">2</RouterLink>
        <RouterLink to="/page03/3">3</RouterLink>
        <RouterLink to="/page04">4. 計算屬性</RouterLink>
        <RouterLink to="/page12">12. 模板</RouterLink>
        <br />
        <hr />
        <h3>互動入門</h3>
        <RouterLink to="/t1">01. 聲明式渲染</RouterLink>
        <RouterLink to="/t2">02. Attribute 綁定</RouterLink>
        <RouterLink to="/t3">03. 事件監聽</RouterLink>
        <RouterLink to="/t4">04. 表單綁定</RouterLink>
        <RouterLink to="/t5">05. 條件渲染</RouterLink>
        <RouterLink to="/t6">06. 清單渲染</RouterLink>
        <RouterLink to="/t7">07. 計算屬性</RouterLink>
        <RouterLink to="/t8">08. 生命週期和模板引用</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
