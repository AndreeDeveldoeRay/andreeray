/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-02-18T23:58:38+01:00
* @Email:  me@andreeray.se
* @Filename: Entry.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-03-21T02:57:06+01:00
*/

console.log(`
%cMETA########################################
 * @Author:  Andreee Ray <DevelDoe>
 * @Date:    2017-02-18T23:58:38+01:00
 * @Email:   me@andreeray.se
 * @Site:    andreeray.se
 * @Version: 2.7.5
 * @Last modified by:   develdoe
 * @Last modified time: 2017-03-21T02:57:06+01:00
##############################################

%cABOUT#######################################
Welcome! I am the Devel, a HTML CSS and
JavaScript ninja @ Devel Devils.
This site it built using React & Redux. The site
is as a presentation for me as a developer.
I use it as a playaround for new technology.
If you like to get in touch, please contact me at
the email above. Many best wishes / DevelDoe.
##############################################

%cBACKLOG#####################################
 * 2.8 output to redux
 * 2.9 add firebase and remove fake api
 * 3.1 change model to hold records
##############################################

%cDEBUGG######################################
`,
'color: orange','color: #fc8daa','color: #93dcff','color: #ccc')

var React    = require('react'),
    ReactDOM = require('react-dom'),
    {Provider} = require('react-redux'),
    store = require('store').config(),
    actions = require('actions')

import Terminal from 'terminal'

// injecting boot information since react at this
// time does not have have control of rendering.
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
