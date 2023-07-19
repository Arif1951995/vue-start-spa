import {createRouter, createWebHashHistory} from "vue-router";
import PageContentVue from "./components/PageContent.vue";
import CreatePageVue from "./components/CreatePage.vue";

const routes =  createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: "/",
        component: PageContentVue
    }, {
        path: "/create-page",
        component: CreatePageVue

    }]
})


export default routes