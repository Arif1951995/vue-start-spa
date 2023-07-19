<template>
  <div class="main-div mb-3 ">
    <form    action="">
  <div class="mb-4">
    <label for="" class="block text-gray-700 font-bold mb-2">Page Title</label>
    <input v-model="title" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
  </div>
  <div class="mb-4">
    <label for="" class="block text-gray-700 font-bold mb-2">Content</label>
    <textarea v-model="content" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="5"></textarea>
  </div>


  <div class="mb-4">
    <label for="" class="block text-gray-700 font-bold mb-2">Link Text</label>
    <textarea v-model="linkText" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="5"></textarea>
  </div>

  <div class="mb-4">
    <label for="" class="block text-gray-700 font-bold mb-2">Link Url</label>
    <textarea v-model="linkUrl" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="5"></textarea>


    <label for="" class="block text-gray-700 font-bold mb-2">Published</label>
    <input v-model="published" type="checkbox"  />
  </div> 
  <div class="mb-4">
    <button 
    :disabled="isFormInvalid"
    @click.prevent="submitForm" 
    
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Create Page
   
    </button>


    <button >

    </button>
  </div>
</form>
  </div>
</template>

<script>
export default {
  emits: {
    pageCreated: null
  },
  data() {
    return {
        title: "",
        content: "",
        linkText: "",
        linkUrl: "",
        published: true
    }
  },

  computed: {
    isFormInvalid() {
        return !this.title || !this.content || !this.linkText || !this.linkUrl
    }
  },

  methods: {
    submitForm() {
        if(!this.title || !this.content || !this.linkText || !this.linkUrl) {
            alert("Form is Invalid");
            return;
        }
        const state = {
            pageTitle: this.title,
            pageContent: this.content,
            link: {
              text: this.linkText,
              url: this.linkUrl,
            },
            
            published: this.published
        }

        this.$emit("pageCreated", state);

        // this.pageCreated(state);


       this.title = "",
       this.content = "",
       this.linkText = "",
       this.linkUrl = "",
       this.published = true


    }
  },

  watch: {
    title(newTitle, prevTitle) {
      if(this.linkText === prevTitle) {
        this.linkText =  newTitle
      }
    }
  }
};
</script>


<style scoped>

.main-div {
  width: 70%;
  margin: auto;
  margin-top: 30px;
}

</style>
