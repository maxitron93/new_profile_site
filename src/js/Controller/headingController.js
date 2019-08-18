import { updateHeadingColor } from '../Model/Heading'
import { renderHeadingColor } from '../View/headingView'

const changeHeadingColor = (state) => {
    // Update the state
    state.headingColor = updateHeadingColor(state.headingColor)

    // Change the color of the heading
    renderHeadingColor(state.headingColor)

    // Check
    console.log('Color changed')
}

export { changeHeadingColor }
