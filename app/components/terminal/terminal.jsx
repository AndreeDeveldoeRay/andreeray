/**
* @Author: Andreee "DevelDoe" Ray
* @Date:   2017-02-18T23:58:38+01:00
* @Email:  me@andreeray.se
* @Filename: Main.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-13T15:47:00+01:00
*/

var React = require('react'),
    ReactDOM = require('react-dom'),
    api = require('api'),
    mousetrap = require('mousetrap'),
    {connect} = require('react-redux'),
    actions = require('actions')


import Output from 'output'
import Input from 'input'
import Status from 'Status'


var terminal = React.createClass({
    getInitialState: function () {
        return {
            speed: 55,
            isFetching: true
        }
        // Set entry location
        store.dispatch(actions.addLocation('presentation'))
    },
    componentDidMount: function () {

        var that = this
        var term = this.refs.terminal
        var cmd = this.state.cmd

        // If there is no command then asume that the user is a new user
        if (!cmd) cmd = 'presentation'

        // Setting the background image
        // Progressivly getting better quality images
        var img3 = new Image()
        var img2 = new Image()
        var img1 = new Image()
        var img = new Image()

        img3.src = "/img/bg3.gif";
        this.props.dispatch(actions.addStatus('Painting'))


        img3.onload = function() {

            // Booting
            that.props.dispatch(actions.addStatus('idle'))
            term.style.backgroundImage = "url(" + img3.src + ")";
            that.setState({ isFetching: false })
            that.handleInput(cmd)

            // Start Fetching better quality images
            img2.src = "/img/bg2.gif";
        }




        img2.onload = function() {
            term.style.backgroundImage = "url(" + img2.src + ")";
            img1.src = "/img/bg1.gif";
        }
        img1.onload = function() {
            term.style.backgroundImage = "url(" + img1.src + ")";
            img.src = "/img/bg.gif";
        }
        img.onload = function() {
            term.style.backgroundImage = "url(" + img.src + ")";
        }
    },
    componentDidUpdate: function () {

        var that = this

        var {isPrinting} = this.props

        if(isPrinting) {
            mousetrap.bind([`enter`], function() {
                that.setState({
                    speed: 5
                })
            })
        }

        var child = this.refs.child
        child.style.paddingRight = child.offsetWidth - child.clientWidth + 10 + "px";
        child.scrollTop += 10;
    },
    handleInput: function (cmd) {

        var that = this,
            cmd = cmd.toLowerCase()

        //if github then don't do any other executing
        if (cmd === 'github'){
            window.open('https://github.com/AndreeDeveldoeRay', '_blank')
        } else if (cmd === 'nautkoncept.se') {
            window.open('http://nautkoncept.se')
        } else if (cmd === 'andreeray.se') {
            window.open('https://github.com/AndreeDeveldoeRay/andreeray.se')
        } else if (cmd === 'wimse.se') {
            window.open('http://wimse.se')
        } else if (cmd === 'yoolio.se') {
            window.open('http://yoolio.se')
        } else if (cmd === 'bolagslistan.nu') {
            window.open('http://bolagslistan.nu')
        } else if (!( /^\s*$/.test(cmd) || cmd === location)) { // empty string?

            //Set new states and clear output
            that.setState({
                output: "",
                speed: 55
            })


            // Get the output from the API
            // NOTE: this is just a mock api.
            api.getResponse(cmd).then(function (res){
                that.print(res)
            }, function (err) {
                that.print(err)
            })

        }
    },
    // This function prints one letter at a time
    // TODO this function needs optimizing. Speed changes should only be updated if changes are made.
    // Using redux hare is a terible idea sinc this would lead to a big overhead. Maybe if one
    // manages to only set actions if changes are made it might be an idea, however its propbobly a better idea to just
    // use local variables anyway since you don't need the speed state anywhere else.
    print: function (output) {

        var {dispatch} = this.props

        dispatch(actions.printStart())

        var that            = this,
            i               = 0,
            buildStr        = "",               // the strig we are going to build using the output string
            html            = false,            // if we are working with html markup we don't want to show is untill completion
            htmlMarkup      = "",               // html markup is stored in this variable
            speed           = this.state.speed




        // traverse the otuput string
        // clearing
        var traverse = function(){

            if (output.charAt(i) === '<') html = true // check for start of html markup

            if (html){



                htmlMarkup += output.charAt(i)

                if (output.charAt(i) === '>') {
                    html = false
                    buildStr += htmlMarkup
                    htmlMarkup = ""
                }

            } else {

                buildStr += output.charAt(i)

                that.setState({
                    output: buildStr
                })

                if(output[i] == " " && speed === 55) delay(1);
                if(output[i-1] == "." && output[i] == " " && speed === 55) delay(500);
                if(output[i-1] == "!" && speed === 55) delay(1000);

            }

            i++

            clearInterval(interval)

            if (output.charAt(i+1) === '<'){
                speed = 1
            } else {
                speed = that.state.speed
            }

            if(i > output.length) {
                dispatch(actions.printComplete())
                that.setState({
                    speed: 55
                })
            } else {
                interval = setInterval(traverse, speed);
            }

        }

        var interval = setInterval(traverse, speed);

        function delay(ms) {
            var cur_d = new Date();
            var cur_ticks = cur_d.getTime();
            var ms_passed = 0;
            while(ms_passed < ms) {
                var d = new Date();  // Possible memory leak?
                var ticks = d.getTime();
                ms_passed = ticks - cur_ticks;
                // d = null;  // Prevent memory leak?
            }
        }
    },
    handleClick: function (e){
        this.setState({
           speed: 5
       })
    },
    render: function () {
        var {output,isFetching} = this.state
        var {status} = this.props

        var renderStatus = () => {
            if (status[status.length-1].status !== 'idle') {
                return (
                    <div id="status">
                        <ul>
                            <li>Loading </li>
                            <li>Scripting</li>
                            {renderStatusItem()} <span className="blink status">.</span>
                        </ul>
                    </div>
                )
            }
        }

        var renderStatusItem = () => {
            var id = 0
            return status.map((status) => {
                id++
                return (
                    <Status key={id} {...status}/>
                )
            })
        }

        return (<div id="terminal" ref="terminal">
            <div id="screen" onClick={this.handleClick}>
                <div id="output" >
                    <div id="parent">
                        <div ref="child" id="child">
                            <Output output={output} isFetching={isFetching}/>
                        </div>
                    </div>
                </div>
                 <Input onInput={this.handleInput} isFetching={isFetching} />
            </div>
            {renderStatus()}
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
)(terminal)
