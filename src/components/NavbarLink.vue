<template>
  <a
    :href="page.link.url"
    class="block py-2 pr-4 pl-3 rounded md:p-0"
    :class="{ 'text-blue-700': isActive }"
    aria-current="page"
    @click.prevent="$bus.$emit(`linkClicked`, index)"
    >{{ page.link.text }}</a
  >
</template>

<script>
export default {
  props: ["page", "index", "isActive"],
};
</script>
