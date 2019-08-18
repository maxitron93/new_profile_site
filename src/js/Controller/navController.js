import { state } from '../app'
import { updateNavSelection } from '../Model/Nav'
import { changeActiveNavItem } from '../View/NavView'

const changeNavSelection = (navSelection) => {
    // Update navSelection state
    state.navSelection = updateNavSelection(navSelection)

    // Render new active nav item
    changeActiveNavItem(state.navSelection)
}

export { changeNavSelection }
