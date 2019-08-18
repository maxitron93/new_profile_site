const updateHeadingColor = (currentColor) => {
    let newColor = ''
    if (currentColor === 'green') {
        newColor = 'red'
    } else if (currentColor === 'red') {
        newColor = 'green'
    }
    return newColor
}

export { updateHeadingColor }
