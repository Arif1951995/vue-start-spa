import { createRouter, createWebHashHistory } from "vue-router";
import PageContentVue from "./views/PageContent.vue";
import CreatePageVue from "./views/CreatePage.vue";
import PageList from "./views/PageList.vue";
import Pages from "./views/Pages.vue";
import EditPage from "./views/EditPage.vue";


const routes = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/:index?",
      component: PageContentVue,
      props: true,
    },

    {
      path: "/pages",
      component: Pages,
      children: [
        {
          path: "",
          component: PageList,
        },

        {
          path: `:index/edit`,
          component: EditPage,
          props: true
        },
        {
          path: "create",
          component: CreatePageVue,
        },
      ],
    },
  ],
});

export default routes;
