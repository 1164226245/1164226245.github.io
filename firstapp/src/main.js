import Vue from 'vue'
import App from './App';
// import Vant from 'vant';  //项目ui美化库

Vue.config.productionTip = false;
Vue.config.devtools = true;
App.mpType = 'app'

const app = new Vue(App);
// Vue.use(Vant);
app.$mount();

Vue.prototype.globalData = getApp().globalData
