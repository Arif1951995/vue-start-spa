import {createApp} from "vue"
import App from "./App.vue";
import $bus from "./utils/Events"
import routes from "./routes";


const app = createApp(App)


app.use(routes)

app.config.globalProperties.$bus = $bus;




 
app.mount("#app");
