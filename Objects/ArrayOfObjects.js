//Creating the array of objects
const web = {
    name: 'DJango Solutions',
    links: {
        link1: 'www.djangosolutions.com',
        link2: 'works.djangosolutions.com'
    },
    socialMedia: {
        facebook: {
            link: "www.facebok.com/djangosolutions",
            name: "DJango Soluntions"
        },
        youtube: {
            link: "www.youtube.com/djangosolutions",
            name: "DJango Solutions"
        }
    }
}

//Without objects destructuring
console.log(web.socialMedia.facebook.link)
console.log(web.socialMedia.facebook.name)

//With object destructuring
const {link, name} = web.socialMedia.facebook
console.log(link)
console.log(name)