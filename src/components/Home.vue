<template>
  <div id="home">
    <h1>介绍</h1>
    <p>ohoTips(读音：<b>哦</b>(四声)<b>ho</b>(二声) Tips，自己感悟)。</p>
    <p>ohoTips 消息美观，可自由方便地定位消息位置，支持任何定位，支持多种类型，支持多种动画。因为支持任何定位，您不仅可以可以用它来实现消息提醒，也能方便定制popover 或者 tooltip</p>
    <div class="tip tip-default">
      <p>项目地址：<el-link type="primary" href="https://github.com/gitHusband/ohoTips/tree/v2.0.0" target="_blank">Github</el-link></p>
    </div>
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
    <h2>开发目标</h2>
    <ul>
      <li>增加更多的css样式</li>
      <li>增加更多的图标</li>
      <li>增加更多类型的角标，目前仅有三角形（难度较高）</li>
      <li>增加更多的消息边框，目前仅是方形（难度较高）</li>
      <li>优化浮动效果，减少抖动</li>
      <li>增加更多的浮动效果</li>
      <li>增加更多的动画效果</li>
      <li>针对图片的设计，比如鼠标悬浮则自动放大图片细节</li>
    </ul>
    <div class="tip tip-default">
      <p>如果您对我的作品感兴趣的话，诚邀来自五湖四海的你共同开发ohoTips!</p>
      <p>联系人：蛮吉是魁拔 - 707077549@qq.com</p>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
  ul > li {
    line-height: 1.7;
    /* font-size: .15rem; */
    list-style-type: square;  
  }
</style>>