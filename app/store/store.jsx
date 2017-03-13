/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-10T08:21:10+01:00
* @Email:  me@andreeray.se
* @Filename: store.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-12T13:53:06+01:00
*/

var redux = require('redux'), {historyReducer,printReducer, statusReducer} = require('reducers')

export var config = () => {
    var reducer = redux.combineReducers({
        history: historyReducer,
        isPrinting: printReducer,
        status: statusReducer
    })
    var store = redux.createStore(reducer, redux.compose(window.devToolsExtension ? window.devToolsExtension() : f => f))
    return store
}
