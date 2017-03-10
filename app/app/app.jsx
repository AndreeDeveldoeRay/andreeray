/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-02-18T23:58:38+01:00
* @Email:  me@andreeray.se
* @Filename: Entry.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-10T04:37:42+01:00
*/



var React    = require('react'),
    ReactDOM = require('react-dom'),
    {Router,Route, hashHistory}   = require('react-router'),
    Main     = require('Main'),
    store = require('store')

store.dispatch(actions.fetchResponse(cmd))
var unsubscribe = store.subscribe(() => {
    var state = store.getState()
})


//app css
require('style!css!sass!styles')


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}></Route>
    </Router>,
    document.getElementById('app')
)
