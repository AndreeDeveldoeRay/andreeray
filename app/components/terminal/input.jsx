/**
* @Author: Andreee "DevelDoe" Ray
* @Date:   2017-02-19T19:40:46+01:00
* @Email:  me@andreeray.se
* @Filename: Input.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-03-17T23:32:04+01:00
*/



var React = require('react'),
    {connect} = require('react-redux'),
    actions = require('actions')

export var input = React.createClass({
    onSubmit: function (e) {
        e.preventDefault()

        var input = this.refs.input.value

        var re = /\S+/  //find a non-whitespace character and match any string that contains at leas one

        if (input.length > 0 && re.test(input)) {
            this.refs.input.value = ""
            this.props.onInput(input)
        } else {
            this.refs.input.focus()
        }
    },
    onClick: function () {
        var {isPrinting, isFetching} = this.props
        if (!isPrinting && !isFetching) {
            this.refs.input.focus()
        }
    },
    render: function () {

        var that = this

        var {isPrinting, isFetching} = this.props

        function renderInput () {
            if (!isFetching){
                if (!isPrinting) {
                    return <input type="text" ref="input" autoFocus/>
                } else {
                    return <div className="blink">.</div>
                }
            }

        }

        return (<div id="input" onClick={this.onClick}>
                <form onSubmit={this.onSubmit}>
                    {renderInput()}
                </form>
            </div>)
    }
})

export default connect(
    (state) => {
        return {
            isPrinting: state.isPrinting,
            status: state.status
        }
    }
)(input)
