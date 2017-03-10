/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-03-05T21:29:16+01:00
* @Email:  me@andreeray.se
* @Filename: reducers.jsx
* @Last modified by:   DevelDoe
* @Last modified time: 2017-03-06T00:46:02+01:00
*/

var defaultState = {
    isFetching: false,
    response: undefined,
    location: undefined
}

export var printReducer = (state = defaultState, action) => {
    switch (action.type)
    {
        case 'START_RESP_FETCH':
            return {
                isFetching: true,
                response: ""
            }
        case 'COMPLETE_RESP_FETCH':
            return {
                isFetching: false,
                response: action.response,
                location: action.location
            }
        default:
            return state
    }
}
