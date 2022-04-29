<template>
  <div id="install">
    <h1>安装</h1>
    <p>从 <el-link type="primary" href="https://zhuanlan.zhihu.com/p/113009496" target="_blank">Github</el-link> 上下载代码，自行托管。</p>
    <p>ohoTips 可以与 <el-link type="primary" href="https://zhuanlan.zhihu.com/p/113009496" target="_blank">CommonJS</el-link>、<el-link type="primary" href="https://www.jianshu.com/p/129f7e8703d0" target="_blank">AMD</el-link> 以及 <code>script</code> 标签使用。</p>
    <highlightjs language='JavaScript' code='&lt;!--  第一种：script 标签引入 ohoTips.js, ohoTips.min.css --&gt;
&lt;html&gt;
    &lt;link href="./lib/ohoTips/css/themes/ohoTips.min.css" rel="stylesheet"&gt;
    &lt;script src="./lib/ohoTips/js/ohoTips.min.js"&gt;&lt;/script&gt;
&lt;/html&gt;' />
    <p>或者</p>
    <highlightjs language='JavaScript' code="// 第二种：import 导入
import './lib/ohoTips/css/themes/ohoTips.min.css'
import './lib/ohoTips/js/ohoTips.min'" />

    <div class="tip tip-gray">
      <p>本插件提供测试代码，打开 examples/index.html 即可。</p>
      <p>您可以直接引用 ./dist 文件夹里面的文件, 这是已经构建好的文件。</p>
      <p>如果您想要开发或者设计您喜欢的样式，可以看看 <router-link to="/develop" class="el-link el-link--primary is-underline">开发与构建</router-link></p>
    </div>

    <h2>用法</h2> 
    <highlightjs language='JavaScript' code='// 设置全局函数，方便调用
window.ohoTips = oho.ohoTips;
window.ohoTipsPrototype = oho.ohoTipsPrototype;

// 用法一
ohoTips({
    baseElement: baseElement,           //基准元素为空或者body，则定位基于整个窗口
    position: "top-left",               //Tip显示位置，窗口左上角
    type: "success",                    //显示的class，可接受自定义
    icon: false,                        //不显示图标
    message: message,                   //Tip内容
})

// 用法二
ohoTips().success(message, baseElement);

// 用法三
ohoTips(message, options);' />
  </div>
</template>

<script setup>

</script>

<style>

</style>