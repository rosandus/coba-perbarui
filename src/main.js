// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import VuePullRefresh from "vue-pull-refresh";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
});

new Vue({
  components: {
    "vue-pull-refresh": VuePullRefresh
  },
  data: function() {
    return {};
  },
  methods: {
    onRefresh: function() {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve();
        }, 1000);
      });
    }
  },
  template: '<vue-pull-refresh :on-refresh="onRefresh"></vue-pull-refresh>'
});
