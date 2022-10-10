import { createApp, Vue } from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue3 from "bootstrap-vue-3";
import VueWriter from "vue-writer";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import AOS from "aos";
import "aos/dist/aos.css";

const app = createApp(App);
app.use(VueWriter);
app.use(AOS.init());
app.use(BootstrapVue3);
app.use(router);

app.mount("#app");

// app.use(BootstrapVue3)
// createApp(App).use(router).mount("#app");
