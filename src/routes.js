import {createRouter, createWebHashHistory} from "vue-router";
import PageContentVue from "./components/PageContent.vue";
import CreatePageVue from "./components/CreatePage.vue";

const routes =  createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: "/:index?",
        component: PageContentVue,
        props: true
    }, {
        path: "/create-page",
        component: CreatePageVue

    },
   
]
})


export default routes