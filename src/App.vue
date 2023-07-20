<template>
  <navbar></navbar>
  <router-view></router-view>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },

  methods: {
    pageCreated(obj) {
      console.log(obj);
      this.pages.push(obj);
    },
  },
};
</script>
