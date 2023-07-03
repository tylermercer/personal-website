const stripDefaultLocale = (path) => {
    return path?.startsWith('/en') ? path.substring(3) : path;
}

const trimTrailingIndex = (path) => {
    return path?.endsWith('/index') ? path.slice(0, -6) : path;
}

module.exports = {
    lang:"en",
    dir:"ltr",
    permalink: data => `${trimTrailingIndex(stripDefaultLocale(data.page.filePathStem))}${data.pagination?.pageNumber > 0 ? '/' + data.pagination.pageNumber : ''}/index.html`
}