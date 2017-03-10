/**
* @Author: Andreee "DevelDoe" Ray
* @Date:   2017-02-18T23:58:38+01:00
* @Email:  me@andreeray.se
* @Filename: Main.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-10T04:32:58+01:00
*/

var React = require('react'), Input = require('Input'), API = require('API'), Mousetrap = require('Mousetrap'), actions = require('actions'), store = require('storeConfig').config()

var Main = React.createClass({
    getInitialState: function () {
        return {
            speed: 55
        }
    },
    componentWillReceiveProps: function (nextProps) {
        window.location.hash = '#/'
    },
    componentDidMount: function () {

        // cmd from paramter on the url
        var that    = this,
            cmd     = this.props.location.query.cmd

        // If there is no command then asume that the user is a new user
        if (!cmd) cmd = 'presentation'

        // execute the command
        this.handleInput(cmd)

        // remove the parameter from the URL
        window.location.hash = '#/'
    },
    componentDidUpdate: function () {
        var that = this,
            isWriting = this.state

        if(isWriting) {
            Mousetrap.bind([`enter`], function() {
                that.setState({
                    speed: 5
                })
            })
        }

    },
    handleInput: function (cmd) {

        var that = this,
            {location, backlink} = that.state,
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
                backlink: location,
                speed: 55
            })
            
            // check if youser wants to go back to previous page.
            // TODO: history array
            if (cmd === 'back' || cmd === '..') {
                cmd = backlink
            }


            // Get the output from the API
            // NOTE: this is just a mock api.
            API.getResponse(cmd).then(function (res){
                that.print(res)
            }, function (err) {
                that.print(err)
            })

        }
    },
    // This function prints one letter at a time
    print: function (output) {

        var that            = this,
            i               = 0,
            buildStr        = "",               // the strig we are going to build using the output string
            html            = false,            // if we are working with html markup we don't want to show is untill completion
            htmlMarkup      = "",               // html markup is stored in this variable
            speed           = this.state.speed

        that.setState({ isWriting: true }) // lock input when output is printing



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
                that.setState({
                    isWriting : false,
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
        var {output,isWriting,isFetching} = this.state

        function createMarkup() {
            return {__html: output};
        }

        function renderOutput () {
            if(isFetching) {
                return <span>Buffering...</span>
            } else {
                return <div dangerouslySetInnerHTML={createMarkup()} />;
            }
        }
        return (<div id="main" onClick={this.handleClick} >
            <div id="output">{renderOutput()}</div>
            <div id="input">
                <Input onClick={this.handleClick} onInput={this.handleInput} isWriting={isWriting}/>
            </div>
        </div>)
    }
})

module.exports = Main
