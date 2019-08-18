import { elements } from '../elements'

const fadeOutCurrentContent = () => {
    for (let child of elements.contentContainer.children) {
        child.classList += ' fade-out'
    }
}



const aboutMePageContent = `
<div class="about-page-content">
    <h1>About Me Placeholder</h1>
    <h1>About Me Placeholder</h1>
    <h1>About Me Placeholder</h1>
</div>
`

const placeholderContent = `
<div class="page">
    <h1>Placeholder</h1>
    <h1>Placeholder</h1>
    <h1>Placeholder</h1>
</div>
`




const insertNewContent = (navSelection) => {
    // Define variables
    let subNavHTML
    
    // Remove old content 
    while (elements.contentContainer.firstChild) {
        elements.contentContainer.removeChild(elements.contentContainer.firstChild);
    }
    
    // Add new content
    if (navSelection === 'item_1') {
        subNavHTML = `
        <div class="row fade-in about-page-container">
            ${aboutMePageContent}
        </div>`
    } else if (navSelection === 'item_2') {
        subNavHTML = `
        <div class="row fade-in">
            <ul class="tabs">
                <li class="tab col s2"><a class="active" href="#web-dev-1">Web Dev 1</a></li>
                <li class="tab col s2"><a href="#web-dev-2">Web Dev 2</a></li>
                <li class="tab col s2"><a href="#web-dev-3">Web Dev 3</a></li>
                <li class="tab col s2"><a href="#web-dev-4">Web Dev 4</a></li>
            </ul>
            <div id="web-dev-1" class="col s12">${placeholderContent}</div>
            <div id="web-dev-2" class="col s12">${placeholderContent}</div>
            <div id="web-dev-3" class="col s12">${placeholderContent}</div>
            <div id="web-dev-4" class="col s12">${placeholderContent}</div>
        </div>`
    } else if (navSelection === 'item_3') {
        subNavHTML = `
        <div class="row fade-in">
            <ul class="tabs">
                <li class="tab col s2"><a class="active" href="#android-dev-1">Android Dev 1</a></li>
                <li class="tab col s2"><a href="#android-dev-2">Android Dev 2</a></li>
                <li class="tab col s2"><a href="#android-dev-3">Android Dev 3</a></li>
                <li class="tab col s2"><a href="#android-dev-4">Android Dev 4</a></li>
            </ul>
            <div id="android-dev-1" class="col s12">${placeholderContent}</div>
            <div id="android-dev-2" class="col s12">${placeholderContent}</div>
            <div id="android-dev-3" class="col s12">${placeholderContent}</div>
            <div id="android-dev-4" class="col s12">${placeholderContent}</div>
        </div>`
    } else if (navSelection === 'item_4') {
        subNavHTML = `
        <div class="row fade-in">
            <ul class="tabs">
                <li class="tab col s2"><a class="active" href="#data-science-1">Data Science 1</a></li>
                <li class="tab col s2"><a href="#data-science-2">Data Science 2</a></li>
                <li class="tab col s2"><a href="#data-science-3">Data Science 3</a></li>
                <li class="tab col s2"><a href="#data-science-4">Data Science 4</a></li>
            </ul>
            <div id="data-science-1" class="col s12">${placeholderContent}</div>
            <div id="data-science-2" class="col s12">${placeholderContent}</div>
            <div id="data-science-3" class="col s12">${placeholderContent}</div>
            <div id="data-science-4" class="col s12">${placeholderContent}</div>
        </div>`
    }

    // Display html
    elements.contentContainer.insertAdjacentHTML('afterbegin', subNavHTML)

    // Initialise tabs
    let instance = M.Tabs.init(document.querySelector('.tabs'), {swipeable: true});
}
export { fadeOutCurrentContent, insertNewContent }