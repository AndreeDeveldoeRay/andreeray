/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-10T08:30:06+01:00
* @Email:  me@andreeray.se
* @Filename: actions.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-12T14:47:11+01:00
*/

export var addLocation = (location) => {
    return {
        type: 'ADD_LOCATION',
        location
    }
}
export var printStart = () => {
    return {
        type: 'PRINT_START'
    }
}
export var printComplete = () => {
    return {
        type: 'PRINT_COMPLETE'
    }
}
export var addStatus = (status) => {
    return {
        type: 'ADD_STATUS',
        status
    }
}
