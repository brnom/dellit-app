/** Returns parsed and encoded URL string */
export function slugify (url: string) {
    return encodeURI(url
        .toLowerCase()
        .replace(/ +/g, '-'))
}
