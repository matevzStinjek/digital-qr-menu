function variableType (value) {
    return Object.prototype.toString.call(value).slice(8, -1) // accurately returns the parameter type [Array | Object | Number | Boolean | ...]
}

function contain (min, value, max) {
    value = Math.min(value, max)
    value = Math.max(min, value)
    return value
}

export {
    variableType as variableType,
    contain as contain,
}
