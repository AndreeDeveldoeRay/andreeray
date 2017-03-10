/**
* @Author: Andreee "DevelDoe" Ray
* @Date:   2017-02-19T10:34:13+01:00
* @Email:  me@andreeray.se
* @Filename: Store.js
* @Last modified by:   develdoe
* @Last modified time: 2017-03-10T04:45:18+01:00
*/


var presentation = `
    <p>Hi and welcome, I am DevelBot, a bot here to guide you on how to use this system.
    You can ask me simple questions by entering simple keywords.
    If this is your first time here just type the <b>about</b> keyword in the input field below and click enter.</p>
`
var about = `
    <p>I am dedicated at bringing you information regarding Andree Ray, a front end engineer who loves all things HTML,
    CSS and JavaScript. To learn how to use this system type the <b>guide</b> keyword in the command field below.
`
var guide = `
    <p>In order to navigate you use the cmd field below. Type out the command you want to execute.
    You can always go back to the previous page by executing <b>back</b>.
    Whenever you see a word in bold, that is an command that you can execute. For example,
    to see the list of categories just type <b>categories</b> (or <b>cat</b>) and hit enter.
    All commands work no mater when you type them, so you can always come back here by executing <b>guide</b> again.</p>
`
var cat = `
    <b>resume</b> | <b>projects</b> | <b>about</b> | <b>contact</b>
`
var resume = `
    <p>Stack</p>
    <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript ES2015</li>
        </ul>
        <p>
            <small>Main: Foundation | Jekyll | Webpack | Node | React </small><br/>
            <small>Past: XHTML | PHP | Drupal (PHP) | ROR (Ruby) | jQuery | Dot Net (C#)</small<br/>
        </p>
        <p>
            Source code @ <b>github</b>
        </p>
        <p>Experience</p>
        <ul>
            <li><b>Wimse</b> founder and freelancer - 2014 until present</li>
            <li><b>NIPO</b> junior front-end developer - 2013</li>
        </ul>
        <p>Education</p>
        <ul>
            <li><b>YHK</b> web development, 2011 to 2013</li>
            <li><b>Nackademin</b> virtualizering, 2009 to 2010</li>
        </ul>
`
var nackademin = `
    <p>This polytechnic gave me comprehensive skills to work with servers,
    networking, and virtualization technologies. The Training content was
    developed in cooperation with regional companies and government agencies
    to provide the skill and professionalism needed.</p>
`
var yhk = `
    <p>Web development with a focus on responsive design and mobile platforms.
    As a Front End Developer we learned web design as well as developing websites for different platforms and devices.
    Among other things we learn HTML, CSS, JavaScript, PHP, C#, and finally dot Net Development.</p>
`
var wimse = `
    <p>Wimse is a complete and creative web agency located in Gothenburg.
    We help companies to increase profitability by improving and developing business models.
    Through creative thinking, innovative ideas and technical solutions,
    together we can improve your business. We create a platform that appeals to and strengthens
    your profile and presence on the Internet.</p>
`
var nipo = `
    <p>After my education i transfered to Amsterdam to work for NIPO a major worldwide Market
    Research and Enterprise Feedback Management software provider.
    The company provides industrial Windows-based software for all aspects of market research.
    This encompasses questionnaire design, data collection, tabulations, overviews of fieldwork
    progress and costs along with advanced data analysis. This was during the move to web 4.0 and
    I was in charge of developing a mockup for a new front-end system in the dot Net environment.</p>
`
var projects = `
    <p>Projects </p>
    <ul>
        <li><b>andreeray.se</b> -  This site. <small>(HTML5, CSS JS (React))</small>
        <li><b>wimse.se</b> - creative web agency <small>(HTML5, CSS JS (Jekyll))</small>
        <li><b>nautkoncept.se</b> -  Strategy consultancy. <small>(HTML5, CSS JS (Jekyll))</small>
        <li><b>yoolio.se</b> -  Marketplace for digital solutions. <small>(HTML5, CSS JS (Vanilla, Rails))</small>
        <li><b>bolagslistan.nu</b> -  News letter regardign new businesses. <small>(HTML5, CSS JS (Vanilla, Rails))</small>
    </ul>
    <p><small>Please visit </small><b>github</b> <small>to check out source code.</small></p>
`
var help = `
    <ul><b>
        <li>guide
        <li>categories
        <li>resume
        <li>projects
        <li>about
        <li>contact
        <li>back
    </ul></b>
`
var quit = "By for now, please visit us again!",
    hello = 'Hello',
    thx = "I am glad you are happy with my services.",
    contact = "<p>You can email me at me@andreeray.se</p>",
    fuck = "<p>That's totally uncalled for</p>"

function fakeAPI (cmd, cb) {
    if (cmd === 'presentation') return cb(undefined,presentation)
    else if (cmd ==='guide' || cmd === '?' || cmd === 'help') return cb(undefined, guide)
    else if (cmd ==='cat' || cmd === 'categories' || cmd === 'nav' || cmd === 'navigation' || cmd === 'home' || cmd === 'index') return cb(undefined, cat)
    else if (cmd ==='resume' || cmd === 'cv') return cb(undefined, resume)
    else if (cmd ==='nackademin') return cb(undefined, nackademin)
    else if (cmd ==='yhk') return cb(undefined, yhk)
    else if (cmd ==='projects' || cmd === 'project') return cb(undefined, projects)
    else if (cmd ==='about') return cb(undefined, about)
    else if (cmd ==='contact' | cmd === 'email') return cb(undefined, contact)
    else if (cmd ==='wimse') return cb(undefined, wimse)
    else if (cmd ==='nipo') return cb(undefined, nipo)
    else if (cmd ==='fuck' || cmd === 'fuck you') return cb(undefined, fuck)
    else if (cmd ==='hi' || cmd === 'hello') return cb(undefined, hello)
    else if (cmd ==='exit' || cmd === 'quit') return cb(undefined, quit)
    else if (cmd ==='cmd' || cmd === 'commands' || cmd === 'ls') return cb(undefined, help)
    else if (cmd ==='thanks' || cmd === 'thx' ) return cb(undefined, thx)
    else return cb('That command does not exist! To list basic commands execute <b>commands</b> (or <b>cmd</b>) in the cmd field below.')
}

module.exports = fakeAPI
