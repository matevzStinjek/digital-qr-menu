import { variableType } from 'shared/util/util.js'
import drag from './drag'

const filters = {
    capitalise (value) {
        return value[0].toUpperCase() + value.slice(1)
    },
    prefix (value, prefix) {
        return prefixValue(value)

        function prefixValue (input) {
            switch (variableType(input)) {
                case 'Array': {
                    return input.map(prefixValue)
                }
                case 'Object': {
                    const prefixed = {}
                    Object.keys(input).forEach(key => prefixed[`${prefix}${key}`] = input[key])
                    return prefixed
                }
                case 'String': {
                    return `${prefix}${input}`
                }
            }
        }
    },
}

const directives = {
    drag,
}

export default {
    install (Vue) {
        this._installFilters(Vue)
        this._installDirectives(Vue)
    },
    _installFilters (Vue) {
        for (const name in filters) {
            Vue.filter(name, filters[name])
        }
    },
    _installDirectives (Vue) {
        for (const name in directives) {
            Vue.directive(name, directives[name])
        }
    },
}
