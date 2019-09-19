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
                <li class="tab col s2"><a class="active" href="#front-end-app-1">Daily Planner</a></li>
                <li class="tab col s2"><a href="#front-end-app-2">Sorting Simulator</a></li>
                <li class="tab col s2"><a href="#front-end-app-3">Any Base Calculator</a></li>
                <li class="tab col s2"><a href="#front-end-app-4">xxxxxxxxxxxxxx</a></li>
            </ul>
            <div id="front-end-app-1" class="col s12">${placeholderContent}</div>
            <div id="front-end-app-2" class="col s12">${placeholderContent}</div>
            <div id="front-end-app-3" class="col s12">${placeholderContent}</div>
            <div id="front-end-app-4" class="col s12">${placeholderContent}</div>
        </div>`
    } else if (navSelection === 'item_3') {
        subNavHTML = `
        <div class="row fade-in">
            <ul class="tabs">
                <li class="tab col s2"><a class="active" href="#full-stack-app-1">Timesheets</a></li>
                <li class="tab col s2"><a href="#full-stack-app-2">P2P Lending</a></li>
                <li class="tab col s2"><a href="#full-stack-app-3">xxxxxxxxxxxxxx</a></li>
                <li class="tab col s2"><a href="#full-stack-app-4">xxxxxxxxxxxxxx</a></li>
            </ul>
            <div id="full-stack-app-1" class="col s12">${placeholderContent}</div>
            <div id="full-stack-app-2" class="col s12">${placeholderContent}</div>
            <div id="full-stack-app-3" class="col s12">${placeholderContent}</div>
            <div id="full-stack-app-4" class="col s12">${placeholderContent}</div>
        </div>`
    } else if (navSelection === 'item_4') {
        subNavHTML = `
        <div class="row fade-in">
            <ul class="tabs">
                <li class="tab col s2"><a class="active" href="#data-app-1">xxxxxxxxxxxxxx</a></li>
                <li class="tab col s2"><a href="#data-app-2">xxxxxxxxxxxxxx</a></li>
                <li class="tab col s2"><a href="#data-app-3">xxxxxxxxxxxxxx</a></li>
                <li class="tab col s2"><a href="#data-app-4">xxxxxxxxxxxxxx</a></li>
            </ul>
            <div id="data-app-1" class="col s12">${placeholderContent}</div>
            <div id="data-app-2" class="col s12">${placeholderContent}</div>
            <div id="data-app-3" class="col s12">${placeholderContent}</div>
            <div id="data-app-4" class="col s12">${placeholderContent}</div>
        </div>`
    }

    // Display html
    elements.contentContainer.insertAdjacentHTML('afterbegin', subNavHTML)

    // Initialise tabs
    let instance = M.Tabs.init(document.querySelector('.tabs'), {swipeable: true});
}
export { fadeOutCurrentContent, insertNewContent }