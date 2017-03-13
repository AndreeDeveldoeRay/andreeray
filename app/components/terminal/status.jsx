/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-12T14:37:43+01:00
* @Email:  me@andreeray.se
* @Filename: status.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-12T15:32:15+01:00
*/



var React = require('react'),
    {connect} = require('react-redux')

var status = React.createClass({
    render: function () {
        var {status} = this.props
        return (
            <li>{status}</li>
        )
    }
})
module.exports = connect()(status)
