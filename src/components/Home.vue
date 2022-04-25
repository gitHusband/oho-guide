<template>
  <div id="home" class="main-container">
    <h1>介绍</h1>
    <p>ohoTips(读音：哦(四声)ho(二声) Tips，自己感悟)</p>
    <p>ohoTips 消息美观，可自由方便地定位消息位置，支持任何定位。</p>
    <h2>特点</h2>
    <ol>
      <li>支持单行、多行消息，支持 DOM 消息</li>
      <li>支持自定义消息类型，成功、失败、警告、信息、普通5种类型，默认普通</li>
      <li>支持自定义图标，成功、失败、警告、信息4种类型，默认成功；支持自定义图标位置，上下左右，默认左</li>
      <li>支持角标，我也不知道应该管它叫什么，就是消息的那个小三角形</li>
      <li>支持遮罩层，遮盖住整个基准元素</li>
      <li>支持自定义消息位置类型，有左上角，上居中，右上角，左居中，全居中，右居中，左小角，下居中，右小角。</li>
      <li>定位基于基准元素，基准元素可以是任意元素，也可以基于整个窗口</li>
      <li>支持精准定位，也就是传说中的top，left，right，bottom。基准元素可以是任意元素，也可以基于整个窗口</li>
      <li>支持自定义消息手动销毁，销毁延时以及手动销毁</li>
      <li>支持生命周期函数，shown, destroyed 等</li>
      <li>支持消息分组，同组消息上下排列</li>
      <li>支持浮动，使消息在页面来回浮动。支持自定义浮动函数</li>
      <li>支持自定义动画类型，支持自定义动画函数</li>
    </ol>
    <h2>安装</h2>
    <p>ohoTips 可以与 CommonJS、AMD 以及 script 标签使用。</p>
    <div v-highlight>
      <pre class="language-javascript">
        <code>
&lt;!--  第一种：script 标签引入 ohoTips.js, ohoTips.min.css --&gt;
&lt;html&gt;
    &lt;link href="../dist/ohoTips/css/themes/ohoTips.min.css" rel="stylesheet"&gt;
    &lt;script src="../dist/ohoTips/js/ohoTips.min.js"&gt;&lt;/script&gt;
&lt;/html&gt;

// 第二种：import 导入，注意 _Oho 并没有真的导入
import './lib/ohoTips/css/themes/ohoTips.min.css'
import * as _Oho from './lib/ohoTips/js/ohoTips.min'</code>
      </pre>
    </div>

    <p>本插件提供测试代码，打开 examples/index.html 即可。</p>
    <p>您可以直接引用 ./dist 文件夹里面的文件, 这是已经构建好的文件。</p>
    <p>如果您想要开发或者设计您喜欢的样式，可以看看 3. 开发与构建</p>

    <h2>用法</h2> 
    <div v-highlight>
      <pre class="language-javascript">
        <code>
// 设置全局函数，方便调用
window.ohoTips = window.oho.ohoTips;
window.ohoTipsPrototype = window.oho.ohoTipsPrototype;

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
ohoTips(message, options);</code>
      </pre>
    </div>
  </div>
</template>

<script setup>
const name = "Home";
</script>

<style>
</style>