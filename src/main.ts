import Vue from "vue";
import App from "./app.vue";
import router from "./routes";
import store from "./store";
new Vue({
    router,
    store,
    template: "<App/>",
    components: { App }
}).$mount("#root");
