// All images used need to be loaded here. Images need to be imported through js so webpack will take them and put them into /dist/img. 
// It's important that the path from index.html to images in /src is the same as the path from index.html to images in /dist
import favicon from '../img/favicon.png'

// It's not important what this function does. Something needs to be exported from this module into /src/app.js so webpack will find this module, import the images, and place them into /dist/img when building.
const importImages = () => {
    return true
}

export { importImages }
