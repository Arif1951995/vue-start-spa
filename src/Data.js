
const pagesJson = localStorage.getItem("pages");
console.log({pagesJson});
const pages = JSON.parse(pagesJson);


export default {
    getAllPages() {
        return pages
    },

    getPage(index) {
      return  pages[index]
    },

    editPage({index, page}) {
      pages[index] = page;
        console.log({pages})


        localStorage.setItem("pages", JSON.stringify(pages));

    }
}

