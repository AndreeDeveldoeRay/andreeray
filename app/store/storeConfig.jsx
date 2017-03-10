/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-03-05T21:30:28+01:00
* @Email:  me@andreeray.se
* @Filename: config.jsx
* @Last modified by:   DevelDoe
* @Last modified time: 2017-03-05T23:03:13+01:00
*/



var redux = require('redux'), thunk = require('redux-thunk').default, {printReducer} = require('./../reducers/reducers')

export var config = () => {
    var reducer = redux.combineReducers({ print: printReducer })

    var store = redux.createStore(reducer, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ))

    return store
}
