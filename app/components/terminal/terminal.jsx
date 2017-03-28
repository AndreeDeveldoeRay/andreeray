/**
* @Author: Andreee "DevelDoe" Ray
* @Date:   2017-02-18T23:58:38+01:00
* @Email:  me@andreeray.se
* @Filename: Main.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-03-28T23:59:22+02:00
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
    getInitialState () {
        return {
            speed: 55,
            backlink: undefined,
            location: 'presentation'
        }
    },
    componentDidMount () {

        var that = this
        var term = this.refs.terminal
        var {dispatch} = this.props

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
            that.handleInput('presentation')

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
    componentDidUpdate () {

        var that = this
        var {isPrinting, history} = this.props


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
    // Handles the input.
    // First sanitizes and collect the command.
    // then switch check for come edge cases
    // before api.getResponse
    handleInput (input) {

        // inital states
        var that = this
        var {dispatch,history} = this.props
        var {backlink,location} = this.state

        // start debugging
        console.log('INPUT----------------------->')
        console.log('input:',input)

        // search and retrieve command from the input string:
        // TODO: Should retrieve this list from database.
        var re = /(presentation|guide|\?|help|hjälp|categories|cat|nav|navigation|home|hem|index|projects|project|projekts|projekt|works|author|authoring|cmd|commands|kommandon|project|projekt|projekts|contact|kontakta|kontakt|about|resume|cv|stack|experience|education|back|\.\.|wimse|nipo|kyh|jensen|quit|exit|hi|hello|hej|good|fine|bad|awefull|shit|fuck|fuck you|github|andreeray\.se|nautkoncept\.se|yoolio\.se|bolagslistan\.nu)/ig
        // match regex, returns an array
        var commands = input.match(re)
        console.log("commands:", commands)
        // check so that the command is not null and
        // grab the first one. Later this could
        // be changed to ask the user wich to execute
        if (commands !== null) var command = commands[0]
        // debug
        if(command === '..') command = 'back'
        console.log("command:", command)


        // ###################################################
        // First edge cases then default ask the api for a
        // response to print
        console.log("location:", location)
        if (location !== command || backlink === undefined) {
            switch (command)
            {
                case 'back':
                    if (backlink === undefined) break;
                    console.log("backlink",backlink)
                    api.getResponse(backlink, (err,res) => {
                        if (err) {
                            that.print(err)
                        } else {
                            that.print(res)
                            if (history.length > 0) {
                                that.setState({
                                    backlink: history[history.length-1],
                                    location: backlink
                                })
                            }
                            if (backlink !== location) dispatch(actions.addLocation(backlink))
                        }
                    })
                    break;
                case 'github':
                    window.open('https://github.com/AndreeDeveldoeRay', '_blank')
                    break;
                case 'nautkoncept.se':
                    window.open('http://nautkoncept.se');
                    break;
                case 'andreeray.se':
                    window.open('https://github.com/AndreeDeveldoeRay/andreeray')
                    break;
                case 'wimse.se':
                    window.open('http://wimse.se')
                    break;
                case 'yoolio.se':
                    window.open('http://yoolio.se')
                    break;
                case 'bolagslistan.nu':
                    window.open('http://bolagslistan.nu')
                    break;
                case 'developer.wimse.se':
                    window.open('http://developer.wimse.se')
                    break;
                case 'mdn':
                    window.open('https://developer.mozilla.org/en-US/profiles/DevelDoe')
                    break
                default:
                    that.setState({ output: "", speed: 55 })
                    api.getResponse(command, (err,res) => {
                        if (err) {
                            that.print(err)
                        } else {
                            that.print(res)
                            if (history.length > 0) {
                                that.setState({
                                    backlink: history[history.length-1],
                                    location: command
                                })
                            }
                            dispatch(actions.addLocation(command))
                        }
                    })
            }
        }

    },
    // This function prints one letter at a time
    // TODO this function needs optimizing. Speed changes should only be updated if changes are made.
    // Using redux hare is a terible idea sinc this would lead to a big overhead. Maybe if one
    // manages to only set actions if changes are made it might be an idea, however its propbobly a better idea to just
    // use local variables anyway since you don't need the speed state anywhere else.
    print (output) {

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
    handleClick (e) {
        this.setState({
           speed: 5
       })
    },
    render () {
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
                 <Input onInput={this.handleInput} status={this.status} />
            </div>
            {renderStatus()}
        </div>)
    }
})

export default connect(
    (state) => {
        return {
            isPrinting: state.isPrinting,
            history: state.history,
            status: state.status
        }
    }
)(terminal)
