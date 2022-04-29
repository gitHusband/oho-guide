<template>
  <div id="config">
    <h1>附录 - 配置表</h1>

    <div class="tip tip-default">
      <p>项目地址：<el-link type="primary" href="https://github.com/gitHusband/markdowntable" target="_blank">JSON 转 Markdown 表格</el-link></p>
    </div>

    <table style="width:100%" class="table-config">
    <thead>
      <th>参数</th>
      <th>子参</th>
      <th>子参</th>
      <th>释义</th>
    </thead>
    <tbody>
      <tr align="left">
        <td>message</td>
        <td colspan="3"><strong>Tips 消息实体</strong><br/> <em style="color: #888888">支持字符串，DOM 或 JQuery 元素</em><br/> <b>可能的值：</b> <ul><li>字符串，字符串数组</li><li>DOM 或 JQuery 元素</li></ul></td>
      </tr>
      <tr align="left">
        <td rowspan="2">html</td>
        <td>param</td>
        <td colspan="2"><strong>是否将消息实体字符串转换成DOM元素</strong><br/> <b>默认：<ins>false</ins></b><br/> <b>可能的值：</b> <ul><li>true</li><li>false</li></ul></td>
      </tr>
      <tr align="left">
        <td>isContainerTransparent</td>
        <td colspan="2"><strong>是否将容器背景设置为透明</strong><br/> <b>默认：<ins>false</ins></b><br/> <b>可能的值：</b> <ul><li>true</li><li>false</li></ul></td>
      </tr>
      <tr align="left">
        <td>baseElement</td>
        <td colspan="3"><strong>Tips 基准元素</strong><br/> <em style="color: #888888">Tips 定位的参照元素</em><br/> <b>默认：<ins>空值</ins></b><br/> <b>可能的值：</b> <ul><li>空值 - 代表Body元素</li><li>DOM 或 jQuery 元素</li><li>DOM 选择器</li></ul></td>
      </tr>
      <tr align="left">
        <td>parentElement</td>
        <td colspan="3"><strong>Tips 父元素</strong><br/> <em style="color: #888888">Tips 插入到哪一个DOM元素内</em><br/> <b>默认：<ins>空值</ins></b><br/> <b>可能的值：</b> <ul><li>空值 - 代表Body元素</li><li>DOM 或 jQuery 元素</li><li>DOM 选择器</li></ul></td>
      </tr>
      <tr align="left">
        <td>direction</td>
        <td colspan="3"><strong>Tips 与基准元素的相对方向</strong><br/> <b>默认：<ins>inner</ins></b><br/> <b>可能的值：</b> <ul><li>inner - 计算Tips 宽高，尽量使Tips 位于父元素内部</li><li>normal - 不计算Tips宽高，按照position数据来，尽量使Tips 位于基准元素内部</li><li>outer - 计算Tips 宽高，尽量使Tips 位于父元素外部</li><li>outside - 不计算Tips 宽高，尽量使Tips 位于基准元素外部。与outer 主要是负数有区别</li></ul></td>
      </tr>
      <tr align="left">
        <td>position</td>
        <td colspan="3"><strong>Tips 与基准元素的相对定位</strong><br/> <b>默认：<ins>middle</ins></b><br/> <b>可能的值：</b> <ul><li>top-left, top-center , top-right</li><li>center-left , middle , center-right</li><li>bottom-left , bottom-center , bottom-right</li><li>float, translate - 这两个参数作用一样，都是使 Tips 在基准元素内浮动，详细配置见 float 配置</li></ul></td>
      </tr>
      <tr align="left">
        <td rowspan="2">offset</td>
        <td>top</td>
        <td colspan="2"><strong>Tips 偏移基准元素Top 多少px</strong><br/> <em style="color: #888888">任意实数</em></td>
      </tr>
      <tr align="left">
        <td>left</td>
        <td colspan="2"><strong>Tips 偏移基准元素Left 多少px</strong><br/> <em style="color: #888888">任意实数</em></td>
      </tr>
      <tr align="left">
        <td rowspan="2">group</td>
        <td>name</td>
        <td colspan="2"><strong>分组名称</strong><br/> <em style="color: #888888">分组名称相同的Tips 定位配置必须保持一致，他们将从上到下组合在一起</em></td>
      </tr>
      <tr align="left">
        <td>maxLength</td>
        <td colspan="2"><strong>同一个分组内允许存在的Tips 最大数量</strong><br/> <em style="color: #888888">仅支持正整数，每次超出数量，将销毁第一个 Tips</em><br/> <b>默认：<ins>9999</ins></b></td>
      </tr>
      <tr align="left">
        <td>type</td>
        <td colspan="3"><strong>Tips 样式</strong><br/> <em style="color: #888888">支持自定义样式（传入class名称)</em><br/> <b>默认：<ins>normal</ins></b><br/> <b>可能的值：</b> <ul><li>normal, success, error, warning, info</li><li>用户自定义css</li></ul></td>
      </tr>
      <tr align="left">
        <td>limit</td>
        <td colspan="3"><strong>限制Tips 的大小</strong><br/> <em style="color: #888888">如果不限制，那么消息多长，Tips 就有多宽</em><br/> <b>默认：<ins>true</ins></b></td>
      </tr>
      <tr align="left">
        <td>shadow</td>
        <td colspan="3"><strong>是否显示阴影</strong><br/> <b>默认：<ins>false</ins></b></td>
      </tr>
      <tr align="left">
        <td>background</td>
        <td colspan="3"><strong>是否显示遮罩层，遮盖基准元素</strong><br/> <b>默认：<ins>false</ins></b></td>
      </tr>
      <tr align="left">
        <td>icon</td>
        <td colspan="3"><strong>是否显示图标 icon</strong><br/> <em style="color: #888888">显示图标，可以使用户更加直观地了解消息表达的内容</em><br/> <b>默认：<ins>false</ins></b><br/> <b>可能的值：</b> <ul><li>true - 按照type参数自动设置icon类型，支持字符串设置icon类型</li><li>false - 不显示图标 icon</li></ul></td>
      </tr>
      <tr align="left">
        <td rowspan="2">iconOptions</td>
        <td>type</td>
        <td colspan="2"><strong>图标 icon 的类型</strong><br/> <em style="color: #888888">当icon 为字符串时，icon主要定制形状(也含颜色)，此时type可以额外设置icon 的色调</em><br/> <b>默认：<ins>info</ins></b><br/> <b>可能的值：</b> <ul><li>normal, success, error</li><li>warning, info, clock</li></ul></td>
      </tr>
      <tr align="left">
        <td>position</td>
        <td colspan="2"><strong>图标 icon 的定位</strong><br/> <b>默认：<ins>left</ins></b><br/> <b>可能的值：</b> <ul><li>top, left</li><li>bottom, right</li></ul></td>
      </tr>
      <tr align="left">
        <td>symbol</td>
        <td colspan="3"><strong>是否显示粘合器 binder</strong><br/> <b>默认：<ins>false</ins></b><br/> <b>可能的值：</b> <ul><li>false - 不显示粘合器</li><li>true - 默认三角形 triangle，支持字符串设置粘合器类型，如 triangle等，目前仅支持三角形triangle</li><li>其他类型字符串 - 暂不支持</li></ul></td>
      </tr>
      <tr align="left">
        <td rowspan="2">symbolOptions</td>
        <td>type</td>
        <td colspan="2"><strong>粘合器 binder 类型</strong><br/> <em style="color: #888888">如果不设置，粘合器则按 option.type 色调，否则按该参数的色调</em><br/> <b>默认：<ins>空值</ins></b><br/> <b>可能的值：</b> <ul><li>normal, success, error</li><li>warning, info</li></ul></td>
      </tr>
      <tr align="left">
        <td>position</td>
        <td colspan="2"><strong>粘合器 binder 与 Tips 的相对定位</strong><br/> <b>默认：<ins>空值</ins></b><br/> <b>可能的值：</b> <ul><li>top-left, top-center, top-right</li><li>right-top , center-right , right-bottom</li><li>bottom-left , bottom-center , bottom-right</li><li>left-bottom, center-left, left-top, middle</li></ul></td>
      </tr>
      <tr align="left">
        <td>destroy</td>
        <td colspan="3"><strong>销毁 Tips 的方式</strong><br/> <b>默认：<ins>auto</ins></b><br/> <b>可能的值：</b> <ul><li>auto - 自动销毁Tips</li><li>manual - 不自动销毁Tips，需手动销毁</li><li>never - 从不销毁Tips，需要调用 destory() 方法销毁</li></ul></td>
      </tr>
      <tr align="left">
        <td>delay</td>
        <td colspan="3"><strong>自动销毁Tips 延时，单位：ms</strong><br/> <b>默认：<ins>2000</ins></b></td>
      </tr>
      <tr align="left">
        <td rowspan="8">animation</td>
        <td>in</td>
        <td colspan="2"><strong>Tips 显示时候的动画</strong><br/> <b>默认：<ins>default</ins></b><br/> <b>可能的值：</b> <ul><li>default - fade</li><li>oho - 在基准元素中间由小到大弹出到定位位置，从定位位置由大到小消失在基准元素中间</li><li>fade - 淡入淡出</li><li>fold - 从上到下展开，从下到上收起</li><li>Fragment - Tips 由碎片合成整体展示，Tips 由整体分裂成碎片消失</li></ul></td>
      </tr>
      <tr align="left">
        <td>out</td>
        <td colspan="2"><strong>Tips 隐藏时候的动画</strong><br/> <em style="color: #888888">同 in</em></td>
      </tr>
      <tr align="left">
        <td rowspan="4">fragments</td>
        <td>type</td>
        <td><strong>两种创建fragment 的算法，0和1，1 体验更好, 默认 1</strong></td>
      </tr>
      <tr align="left">
        <td>basePix</td>
        <td><strong>对应fragments.type = 0, 最小的像素, type 1则不需要该参数, 默认 10</strong></td>
      </tr>
      <tr align="left">
        <td>xCount</td>
        <td><strong>对应fragments.type = 1, 水平fragment的个数, 默认 10</strong></td>
      </tr>
      <tr align="left">
        <td>yCount</td>
        <td><strong>对应fragments.type = 1, 垂直fragment的个数, 默认 10</strong></td>
      </tr>
      <tr align="left">
        <td>delay</td>
        <td colspan="2"><strong>Tips 动画执行时间，延时时间删除Tips，默认 1000</strong></td>
      </tr>
      <tr align="left">
        <td>customAmtFuntion</td>
        <td colspan="2"><strong>自定义Tips 动画函数, 默认 null</strong></td>
      </tr>
      <tr align="left">
        <td rowspan="4">float</td>
        <td>type</td>
        <td colspan="2"><strong>Tips 浮动的详细配置，当position 等于 'float' 或 'translate' 时，可选；其余情况不需要</strong><br/> <em style="color: #888888">可选择默认浮动方法，浮动方法支持自定义，见 customFloatType</em><br/> <b>默认：<ins>default</ins></b><br/> <b>可能的值：</b> <ul><li>default - 沿着基准元素左上角到右下角直线浮动</li><li>x - 浮动方向是 左上角->右下角->右上角->左下角->左上角...</li><li>square - 浮动方向是 左上角->右上角->右下角->左下角->左上角...</li><li>fold - 从上到下展开，从下到上收起</li></ul></td>
      </tr>
      <tr align="left">
        <td>customFloatOptions</td>
        <td colspan="2"><strong>自定义浮动选项，参考 tips.floatOptions，默认 null</strong></td>
      </tr>
      <tr align="left">
        <td>customFloatStatus</td>
        <td colspan="2"><strong>自定义浮动初始状态，top，left等，默认 null</strong></td>
      </tr>
      <tr align="left">
        <td>customFloatType</td>
        <td colspan="2"><strong>自定义浮动类型的方法, 参考 floatTypeDefault 方法</strong></td>
      </tr>
      <tr align="left">
        <td rowspan="8">events</td>
        <td>beforeCreated</td>
        <td colspan="2"><strong>Tips 创建消息之前 触发</strong></td>
      </tr>
      <tr align="left">
        <td>created</td>
        <td colspan="2"><strong>Tips 创建消息之后 触发</strong></td>
      </tr>
      <tr align="left">
        <td>beforeShown</td>
        <td colspan="2"><strong>Tips 创建消息之后，展示之前 触发</strong></td>
      </tr>
      <tr align="left">
        <td>shown</td>
        <td colspan="2"><strong>Tips 展示之后 触发</strong></td>
      </tr>
      <tr align="left">
        <td>beforeDestroyed</td>
        <td colspan="2"><strong>Tips 销毁之前 触发</strong></td>
      </tr>
      <tr align="left">
        <td>destroyed</td>
        <td colspan="2"><strong>Tips 销毁之后 触发</strong></td>
      </tr>
      <tr align="left">
        <td>beforeFloated</td>
        <td colspan="2"><strong>Tips 每次浮动之前 触发</strong></td>
      </tr>
      <tr align="left">
        <td>floated</td>
        <td colspan="2"><strong>Tips 每次浮动之后 触发</strong></td>
      </tr>
      <tr align="left">
        <td>debug</td>
        <td colspan="3"><strong>debug 默认打开，打开可以调试log。 error, warn 类型的log 不受此影响</strong></td>
      </tr>
    </tbody>
    </table>
  </div>
</template>

<script setup>

</script>

<style scoped>
.table-config {
  border: 1px solid #a3a3a3;
  border-collapse: collapse;
  font-size: .14rem;
}

.table-config th, .table-config td
{
    border: 1px solid #a3a3a3;
    padding: .1rem .1rem;
}

.table-config em {
  font-size: .12rem;
}
</style>