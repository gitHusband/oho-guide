<template>
  <div id="install">
    <h1>开发构建</h1>
    <p>本文跟插件的使用关系不大，跟插件的开发有关。不需要的可以直接忽略。</p>

    <h2>开发</h2>
    <p>1. 本插件提供测试代码，打开 examples/index.html 即可。</p>
    <div class="tip tip-gray tip-no-border">
      <p>每次修改 src 里面的源码，您必须重新构建 css 或者 js, 然后刷新页面。</p>
    </div>
    <p>2. 模块热替换开发</p>
    <highlightjs language='Shell Session' code="# 安装依赖
$ npm install -save-dev
# 运行此命令，将自动打开 examples/index.html，任何修改都无所刷新页面
$ npm run start" />
    <div class="tip tip-default">
      <p>开发过程中，强烈建议使用 webpack 提供的 <el-link type="primary" href="https://webpack.docschina.org/guides/hot-module-replacement/" target="_blank">模块热替换</el-link> 功能。它允许在运行时更新所有类型的模块，而无需完全刷新。</p>
    </div>

    <h2>CSS 构建</h2>
    <p>目前提供了两种样式，ohoTips.scss 和 ohoTips-light.scss</p>
    <div class="tip tip-gray tip-no-border">
      <p>ohoTips.scss - 默认样式</p>
      <p>ohoTips-light.scss - 只是改了一点点默认样式，您可参考这个定制您喜欢的样式</p>
    </div>
    <highlightjs language='Shell Session' code="# 构建调试版
$ sass src/css/themes/ohoTips.scss dist/ohoTips/css/themes/ohoTips.css --style expanded
# 构建生产版
$ sass src/css/themes/ohoTips.scss dist/ohoTips/css/themes/ohoTips.min.css --style compressed" />
    <div class="tip tip-default">
      <p>如果不熟悉 sass，请参考 <el-link type="primary" href="https://www.sass.hk/install/" target="_blank">如何安装Sass</el-link></p>
    </div>

    <h2>JS 构建</h2>
    <p>目前提供了两种样式，ohoTips.scss 和 ohoTips-light.scss</p>
    <highlightjs language='Shell Session' code="$ npm install -save-dev   // 安装依赖

$ npm run dev             // 构建调试版JS
$ npm run prod            // 构建生产版JS" />
    <div class="tip tip-default">
      <p>如果不熟悉 webpack, 请参考 <el-link type="primary" href="https://webpack.docschina.org/guides/getting-started/" target="_blank">起步</el-link></p>
    </div>
  </div>
</template>

<script setup>

</script>

<style>

</style>