import 'normalize.css/normalize.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import '../scss/styles.scss';
import { importImages } from './importImages'
import { elements } from './elements'
// import { changeHeadingColor } from './Controller/headingController'

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

// -------------------------------------------- //
// UI Controller
// -------------------------------------------- //
const UIController = (() => {
    const loadContentContainer = (activeItem) => {
        // Define variables
        let subNavHTML

        // Remove old content (fade out)
        for (let child of elements.contentContainer.children) {
            child.classList += ' fade-out'
        }
        
        setTimeout(() => {
            // Remove old content (remove from UI)
            while (elements.contentContainer.firstChild) {
                elements.contentContainer.removeChild(elements.contentContainer.firstChild);
            }
            
            // Add new content
            if (activeItem === 'About Me') {
                subNavHTML = `
                <div class="row fade-in about-page-container">
                    ${aboutMePageContent}
                </div>`
            } else if (activeItem === 'Web Dev') {
                subNavHTML = `
                <div class="row fade-in">
                    <ul class="tabs">
                        <li class="tab col s2"><a class="active" href="#software-dev-1">Software Dev 1</a></li>
                        <li class="tab col s2"><a href="#software-dev-2">Software Dev 2</a></li>
                        <li class="tab col s2"><a href="#software-dev-3">Software Dev 3</a></li>
                        <li class="tab col s2"><a href="#software-dev-4">Software Dev 4</a></li>
                    </ul>
                    <div id="software-dev-1" class="col s12">${placeholderContent}</div>
                    <div id="software-dev-2" class="col s12">${placeholderContent}</div>
                    <div id="software-dev-3" class="col s12">${placeholderContent}</div>
                    <div id="software-dev-4" class="col s12">${placeholderContent}</div>
                </div>`
            } else if (activeItem === 'Android Dev') {
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
            } else if (activeItem === 'Data Science') {
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
        }, 500)
    }

    const changeActiveItem = (target) => {
        // Define variable
        let newActiveTab

        // Remove active from previos main nav item
        elements.navMainItem.forEach((item) => {
            if (item.className.includes('active')) {
                item.classList.toggle('active')
            }
        })

        // Remove active from previos mobile nav item
        elements.navMobileItem.forEach((item) => {
            if (item.className.includes('active')) {
                item.classList.toggle('active')
            }
        })

        // Get new active item
        newActiveTab = target.innerHTML
        
        // Add active to new main nav item
        elements.navMainItem.forEach((item) => {
            if (item.children[0].innerHTML === newActiveTab) {
                item.classList.toggle('active')
            }
        })
        // Add active to new mobile nav item
        elements.navMobileItem.forEach((item) => {
            if (item.children[0].innerHTML === newActiveTab) {
                item.classList.toggle('active')
            }
        })
    }

    return {
        loadContentContainer: (activeItem) => {
            loadContentContainer(activeItem)
        },
        changeActiveItem: (target) => {
            changeActiveItem(target)
        }
    }
})()

// -------------------------------------------- //
// APP CONTROLLER
// -------------------------------------------- //
const appController = ((UIController) => {
    // Event Listeners
    const setEventListeners = () => {

        // Event listeners for main-nav buttons
        elements.navMainItem.forEach((btn) => {
            btn.addEventListener('click', (event) => {
                // Define variables
                let activeItem

                // Get nav item clicked
                activeItem = event.target.innerHTML

                // Load content
                UIController.loadContentContainer(activeItem)

                // Change active class on main nav
                UIController.changeActiveItem(event.target)
            })
        })

        // Event listeners for main-nav buttons
        elements.navMobileItem.forEach((btn) => {
            btn.addEventListener('click', (event) => {
                // Define variables
                let activeItem

                // Get nav item clicked
                activeItem = event.target.innerHTML

                // Load content
                UIController.loadContentContainer(activeItem)

                // Change active class on main nav
                UIController.changeActiveItem(event.target)
            })
        })

        // Init and event listeners for side nav
        let instances = M.Sidenav.init(elements.sideNav);
    }

    return {
        initApp: () => {
            setEventListeners()
            UIController.loadContentContainer('About Me')
        } 
    }
    
})(UIController)

// -------------------------------------------- //
// INITIALIZE //
// -------------------------------------------- //
appController.initApp()

// // Import something from /src/js/importImages.js so webpack will put the images into /dist/img when building
// importImages()

// // Initiate materialize components
// const instance = M.Tabs.init(elements.tabs); // This is how to initialize materialize components

// // Add state here
// const state = {
//     headingColor: 'green'
// }

// // Add event listeners here
// elements.mainHeader.addEventListener('click', () => {
//     changeHeadingColor(state)
// })