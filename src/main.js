import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free";
import router from "./router";
import "./assets/main.css";

createApp(App).use(router).mount("#app");
