module.exports = {
    lang:"en",
    dir:"ltr",
    permalink: function(data) {
        return `${this.trimTrailingIndex(this.stripDefaultLocale(data.page.filePathStem))}${data.pagination?.pageNumber > 0 ? '/' + data.pagination.pageNumber : ''}/index.html`;
    }
}