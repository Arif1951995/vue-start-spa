<template>
   <div class="main-div mb-3">
    <form action="">
      <div class="mb-4">
        <label for="" class="block text-gray-700 font-bold mb-2"
          >Page Title</label
        >
        <input
          v-model="page.pageTitle"
          type="text"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div class="mb-4">
        <label for="" class="block text-gray-700 font-bold mb-2">Content</label>
        <textarea
          v-model="page.pageContent"
          type="text"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          rows="5"
        ></textarea>
      </div>

      <div class="mb-4">
        <label for="" class="block text-gray-700 font-bold mb-2"
          >Link Text</label
        >
        <textarea
          v-model="page.link.text"
          type="text"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          rows="5"
        ></textarea>
      </div>

      <div class="mb-4">
        <label for="" class="block text-gray-700 font-bold mb-2"
          >Link Url</label
        >
        <textarea
          v-model="page.link.url"
          type="text"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          rows="5"
        ></textarea>

        <label for="" class="block text-gray-700 font-bold mb-2"
          >Published</label
        >
        <input v-model="page.published" type="checkbox" />
      </div>
      <div class="mb-4">
        <button
         @click.prevent="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update
        </button>

        <button
        
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
        Cancel
        </button>
        

      </div>
    </form>
  </div>

</template>


<script setup>
import {inject} from "vue";
import {useRouter } from "vue-router";

const $pages = inject("$pages");
const $bus = inject("$bus");

const router = useRouter();
const props = defineProps(["index"])

const page =  $pages.getPage(props.index);



function submit() { 
  $pages.editPage({index: props.index, page});
  $bus.$emit("page-updated", {index: props.index,  page })    
  goToPages();

}

function goToPages() {
    router.push({path: "/pages"});
}






</script>