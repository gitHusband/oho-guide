import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueCodeHighlight from 'vue-code-highlight'
import './css/vue-code-highlight/themes/prism-coy-custom.css'
// import 'vue-code-highlight/themes/prism-okaidia.css'

import App from './App.vue'
import router from './router/index'

import * as _C from './js/common'
import './lib/ohoTips/css/themes/ohoTips.min.css'
import * as _Oho from './lib/ohoTips/js/ohoTips.min'

window.ohoTips = window.oho.ohoTips;
window.ohoTipsPrototype = window.oho.ohoTipsPrototype;

let docEl = document.documentElement,
    resizeEvt = 'onorientationchange' in window ? 'onorientationchange' : 'resize',
    recalculateTimeoutID;
function recalculate() {
    let clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    if (clientWidth >= 720) {
        docEl.style.fontSize = '100px';
    } else {
        docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
    }
};
function bindRecalculate() { 
    if (recalculateTimeoutID) clearTimeout(recalculateTimeoutID)
    recalculateTimeoutID = setTimeout(function () {
        recalculate()
        recalculateTimeoutID = null
    }, 100)
}

window.addEventListener(resizeEvt, bindRecalculate, false);
document.addEventListener('DOMContentLoaded', bindRecalculate, false);

const app = createApp(App)
// 配置全局函数
app.config.globalProperties.$_C = _C

app.use(router)
    .use(ElementPlus)
    .use(VueCodeHighlight) //registers the v-highlight directive

app.mount('#app')
