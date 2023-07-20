<template>
  <router-link
    :to="`/${index}`"
    class="block py-2 pr-4 pl-3 rounded md:p-0"
    active-class="text-blue-700"
    aria-current="page"
    >{{ page.link.text }}</router-link
  >
</template>

<script>
export default {
  props: ["page", "index"],
};
</script>
