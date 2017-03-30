/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-10T08:27:04+01:00
* @Email:  me@andreeray.se
* @Filename: reducers.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-03-30T14:17:27+02:00
*/

export var appNameReducer = (state = 'appName', action) => {
    switch(action.type)
    {
        case 'CHANGE_APP_NAME':
            return action.name
        default:
            return state
    }
}
export var historyReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_LOCATION':
            return [
                ...state,
                action.location
            ]
        default:
            return state
    }
}
export var printReducer = (state = false, action) => {
    switch (action.type) {
        case 'PRINT_START':
            return  true
        case 'PRINT_COMPLETE':
            return  false
        default:
            return state
    }
}
export var statusReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_STATUS':
            return [
                ...state,
                {
                    status: action.status
                }
            ]
        default:
            return state
    }
}
