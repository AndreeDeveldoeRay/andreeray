/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-02-18T23:58:38+01:00
* @Email:  me@andreeray.se
* @Filename: Entry.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-03-19T00:04:34+01:00
*/



var React    = require('react'),
    ReactDOM = require('react-dom'),
    {Provider} = require('react-redux'),
    store = require('store').config(),
    actions = require('actions')

import Terminal from 'terminal'

console.log(`
%cMETA########################################
 * @Author:  Andreee Ray <DevelDoe>
 * @Date:    2017-02-18T23:58:38+01:00
 * @Email:   me@andreeray.se
 * @Site:    andreeray.se
 * @Version: 1.6.57
 * @Last modified by:   develdoe
 * @Last modified time: 2017-03-19T00:04:34+01:00
##############################################

%cABOUT#######################################
Welcome! I am the Devel, a HTML CSS and
JavaScript ninja @ Devel Devils.
This site it built using React & Redux. The site
is thought as a presentation for me as a developer.
I use it to playaround with new technology and for
the future I plan to add several new features.
If you like to get in touch, please contact me at
the email above. Many best wishes / DevelDoe.
##############################################

%cBACKLOG#####################################
 * 1.6 input string to command array
 * 1.7 move output state to redux
 * 1.8 change model to hold records
 * 1.9 add firebase and remove fake api
##############################################

%cDEBUGG######################################
`,
'color: orange',
'color: #fc8daa',
'color: #93dcff',
'color: #ccc')


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
