import 'normalize.css/normalize.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import '../scss/styles.scss';
import { importImages } from './importImages'
import { elements } from './elements'
import { changeNavSelection } from './Controller/navController'
import { changeContent } from './Controller/contentController'

const state = {
    navSelection: 'item_1'
}

// Event listeners for main-nav buttons
elements.navMainItem.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        // Get nav item clicked
        let navSelection = event.target.className

        // Update content
        changeContent(navSelection)

        // Change active class on nav bars
        changeNavSelection(navSelection)
    })
})

// Event listeners for mobile-nav buttons
elements.navMobileItem.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        // Get nav item clicked
        let navSelection = event.target.classList[1]

        // Update content
        changeContent(navSelection)

        // Change active class on nav bars
        changeNavSelection(navSelection)
    })
})

// Init and event listeners for side nav
let instances = M.Sidenav.init(elements.sideNav);

// Load the About Me content on start-up
changeContent('item_1')

export { state }

