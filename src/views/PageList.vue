<template>
  <div class="">
    <router-link
      to="/pages/create"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right"
      aria-current="page"
      active-class="text-blue-700"
      >Create Page</router-link
    >
    <div  class="mx-10 mt-10 flex hover:bg-gray-700 hover:text-white  cursor-pointer " @click="handleClick(index)" v-for="(page, index) in $pages.getAllPages()">
      <!-- <div class="flex cursor-pointer flex bg-sky-700"> -->
        <div class="mb-5 mr-5">{{ page.pageTitle }}</div>
        <div>{{ page.published ? "Yes" : "No" }}</div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, inject } from "vue";
import {useRouter} from "vue-router";

const $pages = inject("$pages");
const router = useRouter();    


const handleClick = (index) => {
    router.push({path: `/pages/${index}/edit`})

}    

</script>
