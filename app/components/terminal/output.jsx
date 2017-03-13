/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-10T08:06:39+01:00
* @Email:  me@andreeray.se
* @Filename: output.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-12T15:15:02+01:00
*/


var React = require('react'),
    {connect} = require('react-redux'),
    actions = require('actions')

var output = React.createClass({
    render: function () {
        var {output, isFetching} = this.props
        function createMarkup() {
            return {__html: output};
        }

        function renderOutput () {
            if(!isFetching) {
                return <div dangerouslySetInnerHTML={createMarkup()} />;
            }
        }
        return (<div >
            {renderOutput()}
        </div>)
    }
})

export default connect(
    (state) => {
        return {
            appStatus: state.status
        }
    }
)(output)
