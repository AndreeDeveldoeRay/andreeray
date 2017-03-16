/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-02-18T23:58:38+01:00
* @Email:  me@andreeray.se
* @Filename: Entry.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-16T07:20:50+01:00
*/



var React    = require('react'),
    ReactDOM = require('react-dom'),
    {Provider} = require('react-redux'),
    store = require('store').config(),
    actions = require('actions')

import Terminal from 'terminal'

console.log(`%c/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-02-18T23:58:38+01:00
* @Email:  me@andreeray.se
* @Site:   andreeray.se
* @Last modified by:   develdoe
* @Last modified time: 2017-03-16T07:20:50+01:00
* ##############################################/

%cHi, Welcome under the hood of this site!
My name is Andree and I am a front end developer.
To day (spring 2017) I develop using HTML CSS and JavaScript.
My framework och choice is React. If you like to get in touch,
please contact me at the email you find above. Many best wishes / DevelDoe. `,'color: orange','color: #ddf4ff')

// inject splash information
var ul = document.getElementById('application-status');
ul.innerHTML = '<li>Loading </li>'
var li = document.createElement("li");
li.appendChild(document.createTextNode(''));
li.innerHTML = 'Scripting <span class="blink">.</span>'
ul.appendChild(li);
//

store.subscribe(() => {});

// update splash
store.dispatch(actions.addStatus('Rendering'))


require('style!css!sass!styles')


ReactDOM.render(<Provider store={store}><Terminal/></Provider>,document.getElementById('app'))
