const aboutMePageContent = `
<div class="page">
    <p>Test</p>
</div>`

const placeholderContent = `
<div class="page">
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
        subNav: document.querySelector('.sub-nav'),
        navMainItem: document.querySelectorAll('.btn-main-nav')
    }

    const loadSubNav = (mainNavItem) => {
        // Define variables
        let subNavHTML

        // Remove old subsav
        for (child of DOMstrings.subNav.children) {
            child.classList += ' fade-out'
        }
        
        setTimeout(() => {
            while (DOMstrings.subNav.firstChild) {
                DOMstrings.subNav.removeChild(DOMstrings.subNav.firstChild);
            }
    
            // Generate html
            if (mainNavItem === 'About Me') {
                subNavHTML = `
                <div class="row fade-in">
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
            DOMstrings.subNav.insertAdjacentHTML('afterbegin', subNavHTML)
    
            // Initialise sub-nav
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
        loadSubNav: (mainNavItem) => {
            loadSubNav(mainNavItem)
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

        // Load sub-nav bar
        DOMstrings.navMainItem.forEach((btn) => {
            btn.addEventListener('click', (event) => {
                // Define variables
                let mainNavItem

                // Get nav item clicked
                mainNavItem = event.target.innerHTML

                // Load sub-nav bar
                UIController.loadSubNav(mainNavItem)

                // Change active class on main nav
                UIController.changeActiveItem(event.target)
            })
        })
    }

    return {
        initApp: () => {
            setEventListeners()
        } 
    }
    
})(UIController)

// -------------------------------------------- //
// INITIALIZE //
// -------------------------------------------- //
appController.initApp()