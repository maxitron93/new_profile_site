const aboutMePageContent = `
<div class="about-page-content">
    <h1>Placeholder</h1>
    <h1>Placeholder</h1>
    <h1>Placeholder</h1>
    <h1>Placeholder</h1>
    <h1>Placeholder</h1>
    <h1>Placeholder</h1>
    <h1>Placeholder</h1>
    <h1>Placeholder</h1>
</div>
`

const placeholderContent = `
<div class="page">
    <h1>Placeholder</h1>
    <h1>Placeholder</h1>
    <h1>Placeholder</h1>
    <h1>Placeholder</h1>
    <h1>Placeholder</h1>
    <h1>Placeholder</h1>
    <h1>Placeholder</h1>
    <h1>Placeholder</h1>
</div>
`

// -------------------------------------------- //
// UI Controller
// -------------------------------------------- //
const UIController = (() => {
    const DOMstrings = {
        contentContainer: document.querySelector('.content-container'),
        navMainItem: document.querySelectorAll('.btn-main-nav')
    }

    const loadContentContainer = (mainNavItem) => {
        // Define variables
        let subNavHTML

        // Remove old content (fade out)
        for (child of DOMstrings.contentContainer.children) {
            child.classList += ' fade-out'
        }
        
        setTimeout(() => {
            // Remove old content (remove from UI)
            while (DOMstrings.contentContainer.firstChild) {
                DOMstrings.contentContainer.removeChild(DOMstrings.contentContainer.firstChild);
            }
            
            // Add new content
            if (mainNavItem === 'About Me') {
                subNavHTML = `
                <div class="row fade-in about-page-container">
                    ${aboutMePageContent}
                </div>`
            } else if (mainNavItem === 'Web Dev') {
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
            } else if (mainNavItem === 'Android Dev') {
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
            } else if (mainNavItem === 'Data Science') {
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
            DOMstrings.contentContainer.insertAdjacentHTML('afterbegin', subNavHTML)
    
            // Initialise tabs
            let instance = M.Tabs.init(document.querySelector('.tabs'), {swipeable: true});
        }, 500)
    }

    const changeActiveItem = (target) => {
        // Remove active from previos main item
        DOMstrings.navMainItem.forEach((item) => {
            if (item.className.includes('active')) {
                item.classList.toggle('active')
            }
        })

        // Add active class to new main item
        target.parentNode.classList.toggle('active')
    }

    return {
        DOMstrings: DOMstrings,
        loadContentContainer: (mainNavItem) => {
            loadContentContainer(mainNavItem)
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
    const DOMstrings = UIController.DOMstrings
    // Event Listeners
    const setEventListeners = () => {

        // Event for main-nav buttons
        DOMstrings.navMainItem.forEach((btn) => {
            btn.addEventListener('click', (event) => {
                // Define variables
                let mainNavItem

                // Get nav item clicked
                mainNavItem = event.target.innerHTML

                // Load content
                UIController.loadContentContainer(mainNavItem)

                // Change active class on main nav
                UIController.changeActiveItem(event.target)
            })
        })
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