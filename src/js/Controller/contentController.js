import { fadeOutCurrentContent, insertNewContent } from '../View/contentView'

const changeContent = (navSelection) => {
    // Remove old content (fade out)
    fadeOutCurrentContent()

    // Insert new content. Wait 500ms to let the old content UI fade out
    setTimeout(() => {
        insertNewContent(navSelection)
    }, 500)
    
}

export { changeContent }