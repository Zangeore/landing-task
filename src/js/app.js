import Vue from 'vue';
import App from './App.vue';
import Text from './text';
import config from '../config';
import eventBus from './eventBus';

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.prototype.$config = config;
Vue.prototype.$text = new Text(config.defaultLang);
Vue.prototype.$t = (key) => Vue.prototype.$text.get(key);
Vue.prototype.$eventBus = eventBus;
new Vue({
  el: '#app',
  render: (h) => h(App),
});
