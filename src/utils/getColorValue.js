const getColorValue = (rootVar) => {
    let style = getComputedStyle(document.body)
    return style.getPropertyValue(rootVar)
}

export { getColorValue }