import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import "./plugins/bootstrap/index.js";
import "./plugins/bootstrap-icons/index.js";

const app = createApp(App);
app.use(router);
app.mount("#app");
