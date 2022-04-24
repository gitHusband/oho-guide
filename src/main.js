import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'

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

app.use(router)

app.mount('#app')
