import Vue from 'vue'
import App from './App.vue'
import Text from "./text";

// create a Vue instance and mount it to the DOM (this will replace #app)
Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.prototype.$text = new Text('ru');

new Vue({
    el: '#app',
    render: h => h(App)
});
