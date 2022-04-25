import { createApp } from 'vue'
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
recalc = function () {
    let clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    if (clientWidth >= 720) {
        docEl.style.fontSize = '100px';
    } else {
        docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
    }
};

window.addEventListener(resizeEvt, recalc, false);
document.addEventListener('DOMContentLoaded', recalc, false);

const app = createApp(App)
// 配置全局函数
app.config.globalProperties.$_C = _C

app.use(router)

app.use(VueCodeHighlight) //registers the v-highlight directive

app.mount('#app')
