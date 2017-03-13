/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-02-18T23:58:38+01:00
* @Email:  me@andreeray.se
* @Filename: Entry.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-13T14:44:01+01:00
*/



var React    = require('react'),
    ReactDOM = require('react-dom'),
    {Provider} = require('react-redux'),
    store = require('store').config(),
    actions = require('actions')

import Terminal from 'terminal'

var ul = document.getElementById('application-status');
ul.innerHTML = '<li>Loading </li>'
var li = document.createElement("li");
li.appendChild(document.createTextNode(''));
li.innerHTML = 'Scripting <span class="blink">.</span>'
ul.appendChild(li);

store.subscribe(() => {});
store.dispatch(actions.addStatus('Rendering'))
console.log('bootstraping application')
store.dispatch(actions.addLocation('presentation'))


require('style!css!sass!styles')

setTimeout(function(){
    ReactDOM.render(
        <Provider store={store}>
            <Terminal/>
        </Provider>,
        document.getElementById('app')
    )
}, 2000);
