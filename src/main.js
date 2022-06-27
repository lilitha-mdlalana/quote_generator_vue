import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/styles/main.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";

library.add(faRotate);

createApp(App).use(FontAwesomeIcon).use(router).mount("#app");
