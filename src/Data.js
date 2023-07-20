
const pagesJson = localStorage.getItem("pages");
const pages = JSON.parse(pagesJson);


export default {
    getAllPages() {
        return pages
    },

    getPage(index) {
      return  pages[index]
    }
}

