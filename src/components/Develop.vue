<template>
  <div id="install">
    <h1>开发构建</h1>
    <p>本文跟插件的使用关系不大，跟插件的开发有关。不需要的可以直接忽略。</p>
    <h2>css 构建</h2>
    <p>目前提供了两种样式，ohoTips.scss 和 ohoTips-light.scss</p>
    <div class="tip tip-default">
      <p>ohoTips.scss - 默认样式</p>
      <p>ohoTips-light.scss - 只是改了一点点默认样式，您可参考这个定制您喜欢的样式</p>
    </div>
    <div v-highlight>
      <pre class="language-sass">
        <code>
# 构建调试版
sass src/css/themes/ohoTips.scss dist/ohoTips/css/themes/ohoTips.css --style expanded
# 构建生产版
sass src/css/themes/ohoTips.scss dist/ohoTips/css/themes/ohoTips.min.css --style compressed</code>
      </pre>
    </div>
    <div class="tip tip-default">
      <p>如果不熟悉 sass，请参考 <el-link type="primary" href="https://www.sass.hk/install/" target="_blank">如何安装Sass</el-link></p>
    </div>
  </div>
</template>

<script setup>

</script>

<style>

</style>