import {createApp} from "vue"
import App from "./App.vue";
import $bus from "./utils/Events"
import routes from "./routes";
import $pages from "./Data";



const app = createApp(App)

// app.config.globalProperties.$pages = $pages;
// app.config.globalProperties.$bus = $bus;

app.provide("$bus", $bus);
app.provide("$pages", $pages);



app.use(routes);





 
app.mount("#app");
