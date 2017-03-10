/**
* @Author: Andreee "DevelDoe" Ray
* @Date:   2017-02-19T19:40:46+01:00
* @Email:  me@andreeray.se
* @Filename: Input.jsx
* @Last modified by:   andreeray
* @Last modified time: 2017-02-23T20:27:05+01:00
*/



var React = require('react')

var Input = React.createClass({
    onSubmit: function (e) {
        e.preventDefault()

        var input       = this.refInput.value,
            encoded    = encodeURIComponent(input)

        if (input.length > 0) {
            this.refInput.value = ""
            this.props.onInput(input)
            window.location.hash = `/?cmd=${encoded}`
        }
    },
    componentDidUpdate: function(){
        var {isWriting} = this.props
        if (!isWriting) {
            this.refInput.focus();
        }
    },
    render: function () {

        var that = this

        var {isWriting} = that.props

        function renderInput () {
            if (!isWriting) {
                return <input type="text" ref={(input) => { that.refInput = input; }}  autoFocus/>
            }
        }

        return (<div>
            <form onSubmit={that.onSubmit}>
                {renderInput()}
            </form>
        </div>)
    }
})

module.exports = Input
