<template>
  <navbar :pages="publishedPages" :active-page="activePage"></navbar>
  <RouterView></RouterView>
 
  <!-- <PageContent v-if="pages?.length > 0" :page="pages[activePage]"></PageContent>
  <div v-else>Loading...</div>

  <create-page @page-created="pageCreated"> </create-page> -->
</template>

<script>
import Navbar from "./components/Navbar.vue";
import PageContent from "./components/PageContent.vue";
import CreatePage from "./components/CreatePage.vue";

export default {
  components: {
    Navbar,
    // PageContent,
    // CreatePage,
  },

  data() {
    return {
      activePage: 0,
      darkMode: false,
      pages: [
        {
          pageTitle: "Home Title",
          pageContent: "Home Content",
          link: { text: "Home", url: "home.html" },
        },
        {
          pageTitle: "About Title",
          pageContent: "About Content",
          link: { text: "About", url: "about.html" },
        },
        {
          pageTitle: "Contact Title",
          pageContent: "Contact Content",
          link: { text: "Contact", url: "contact.html" },
        },
      ],
    };
  },

  computed: {
    publishedPages() {
      return this.pages.filter((page) => page.published);
    },
  },

  created() {
    this.fetchPages();

    this.$bus.$on("linkClicked", (index) => {
      this.activePage = index;
    });
  },
  methods: {
    async fetchPages() {
      const res = await fetch("pages.json");
      const data = await res.json();
      this.pages = data;
    },

    pageCreated(obj) {
      console.log(obj);
      this.pages.push(obj);
    },
  },
};
</script>
