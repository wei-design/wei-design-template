import { createApp } from "vue";

import App from "./App.vue";

import WeDesign from "../packages/index"; // 可以配置alias

const app = createApp(App);

app.use(WeDesign).mount("#app");
