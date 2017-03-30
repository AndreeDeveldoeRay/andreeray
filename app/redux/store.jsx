/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-10T08:21:10+01:00
* @Email:  me@andreeray.se
* @Filename: store.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-03-30T14:17:47+02:00
*/

var redux = require('redux'), {appNameReducer, historyReducer, printReducer, statusReducer} = require('reducers')

export var config = () => {
    var reducer = redux.combineReducers({
        appName: appNameReducer,
        history: historyReducer,
        isPrinting: printReducer,
        status: statusReducer
    })
    var store = redux.createStore(reducer, redux.compose(window.devToolsExtension ? window.devToolsExtension() : f => f))
    return store
}
