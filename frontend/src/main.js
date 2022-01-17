import { createApp } from "vue";
import axios from "axios";
import App from "./App.vue";
import router from "./router";

// axios.defaults.baseURL = "http://localhost:8000/api";

axios.interceptors.request.use(config => {
	config.baseURL = "http://localhost:8000/api";
	config.headers.Accept = "application/json";
	config.headers["Content-Type"] = "application/json";

	return config;
});

const app = createApp(App).use(router);

app.mount("#app");
app.config.globalProperties.$axios = axios;
