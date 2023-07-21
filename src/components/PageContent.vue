<template>
  <div v-if="page">
    <h1>{{ page.pageTitle }}</h1>
    <div>{{ page.pageContent }}</div>
    <div>{{ $route.params.index }}</div>
  </div>
</template>

<script>
export default {
  props: ["index"],
  created() {
    this.page = this.$pages.getPage(this.index);
    
  },

  data() {
    return {
      page: null,
    };
  },

  watch: {
    index(newIndex, prevIndex) {
      this.page = this.$pages.getPage(newIndex);
    },
  },
};
</script>
