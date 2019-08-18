import { elements } from '../elements'

const changeActiveNavItem = (navSelection) => {
    // Remove active from previos main nav item
    elements.navMainItem.forEach((item) => {
        if (item.className.includes('active')) {
            item.classList.toggle('active')
        }
    })
    
    // Add active to new main nav item
    elements.navMainItem.forEach((item) => {
        if (item.children[0].className.split(' ').includes(navSelection)) {
            item.classList.toggle('active')
        }
    })

    // Remove active from previos mobile nav item
    elements.navMobileItem.forEach((item) => {
        if (item.className.includes('active')) {
            item.classList.toggle('active')
        }
    })

    // Add active to new mobile nav item
    elements.navMobileItem.forEach((item) => {
        if (item.children[0].className.split(' ').includes(navSelection)) {
            item.classList.toggle('active')
        }
    })
}

export { changeActiveNavItem }
