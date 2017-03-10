/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-02-18T23:58:38+01:00
* @Email:  me@andreeray.se
* @Filename: Entry.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-10T06:56:29+01:00
*/



var React    = require('react'),
    ReactDOM = require('react-dom'),
    Main     = require('Main')


//app css
require('style!css!sass!styles')


ReactDOM.render(
    <Main/>,
    document.getElementById('app')
)
