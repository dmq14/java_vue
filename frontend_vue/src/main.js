import Vue from 'vue';
import App from './App.vue';
import router from './router';  // Import router của bạn

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,  // Đảm bảo router được khai báo ở đây
}).$mount('#app');
