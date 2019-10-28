import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import User from "@/components/User";
import Login from "@/components/Login";

Vue.config.productionTip = false;

Vue.use(VueRouter);

// Routes
const router = new VueRouter({
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/login", component: Login },
    { path: "/user", component: User }
  ]
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app');
