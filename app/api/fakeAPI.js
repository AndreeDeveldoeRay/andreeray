/**
* @Author: Andreee "DevelDoe" Ray
* @Date:   2017-02-19T10:34:13+01:00
* @Email:  me@andreeray.se
* @Filename: Store.js
 * @Last modified by:   develdoe
 * @Last modified time: 2017-03-28T23:55:22+02:00
*/

// TODO: instead of strings use arrays with objects containting records
// a record could look something like
// {
//  commands: ['sdfg']
//  records: [n,...n]
// }
//
// and then the records would have its own meta data
//
// {
//  text: 'bla bla',
//  markup: '<p>'
// }
//
//  This would better the application greatly, by several facors, for example.
//  We can render html markup by looking at the html propery, this would speed up
//  the process of render html markup, since it would not have to animate it anymore.


var data = [
    {
        commands: ['presentation'],
        response: `
            <p>Hi and welcome, I am DevelBot, a bot here to guide you on how to use this system.
            You can ask me simple questions by entering simple keywords.
            If this is your first time here just type the <b>about</b> keyword in the input field below and click enter.</p>`
    },{
        commands: ['about'],
        response: `
            <p>I am dedicated at bringing you information regarding Andree Ray, a front end engineer who loves all things HTML,
            CSS and JavaScript. To learn how to use this system type the <b>guide</b> keyword in the command field below.`
    },{
        commands: ['guide', '?', 'help','hjälp'],
        response: `
            <p>In order to navigate you use the cmd field below. Type out the command you want to execute.
            You can always go back to the previous page by executing <b>back</b>.
            Whenever you see a word in bold, that is an command that you can execute. For example,
            to see the list of categories just type <b>categories</b> (or <b>cat</b>) and hit enter.
            All commands work no mater when you type them, so you can always come back here by executing <b>guide</b> again.</p>`
    },{
        commands: ['categories', 'cat', 'nav','navigation', 'home', 'hem', 'index'],
        response: `<b>resume</b> | <b>works</b> | <b>about</b> | <b>contact</b>`
    },{
        commands: ['resume', 'cv', 'stack', 'experience', 'education'],
        response: `
            <div id="resume">
                <h2>- Stack -</h2>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript ES2015</li>
                </ul>
                <p><small>
                    React | Redux | Node | Responsive | Mobile First | REST | Foundation | Jekyll | Webpack | Babel | Express | jQuery | SASS | Axios | Jsonp | Firebase | Expect | Karma | Mocha | DraftJS
                </small></p>
                <p>
                    Source code @ <b>github</b>
                </p>
            <h2>- Experience -</h2>
                <ul>
                    <li><b>Wimse</b> founder and freelancer - 2014 until present</li>
                    <li><b>NIPO</b> junior front-end developer - 2013</li>
                </ul>
                <h2>- Education -</h2>
                <ul>
                    <li><b>KYH</b> web development, 2011 to 2013</li>
                    <li><b>Jensen.</b> virtualizering, 2009 to 2010</li>
                </ul>
            </div>`
    },{
        commands: ['projects', 'project', 'projekts', 'projekt','works','authoring','author'],
        response: `
            <h2>- Projects -</h2>
            <ul>
                <li><b>andreeray.se</b> -  This site. <small>(HTML5, CSS JS (React))</small>
                <li><b>wimse.se</b> - Creative web agency <small>(HTML5, CSS JS (Jekyll))</small>
                <li><b>nautkoncept.se</b> -  Strategy consultancy. <small>(HTML5, CSS JS (Jekyll))</small>
                <li><b>yoolio.se</b> -  Marketplace for digital solutions. <small>(HTML5, CSS JS (Rails))</small>
                <li><b>bolagslistan.nu</b> -  News letter regardign new businesses. <small>(HTML5, CSS JS (Rails))</small>
            </ul>
            <h2>- Authoring -</h2>
            <ul>
                <li><b>developer.wimse.se</b> - My day to day journal, an exelent place to get a feel for what I am researching.</li>
                <li><b>MDN<b> - I translate JavaScript guides over at Mozilla Developer Network.</li>
            </ul>
            <p>Please visit <b>github</b> to check out source code.</p>`
    },{
        commands: ['contact', 'kontakta', 'kontakt'],
        response: `
            <p>Andree does not seem to be online at the moment... Why don't you try emailing him at me@andreeray.se.</p>
            <p>Or, if its urgent you can give him a buzz at +46708689241</p>`
    },{
        commands: ['cmd', 'commands', 'kommandon'],
        response: `
            <ul><b>
                <li>presentation
                <li>about
                <li>guide
                <li>nav
                <li>resume
                <li>works
                <li>contact
                <li>back
            </ul></b>`
    },{
        commands: ['jensen'],
        response: `
            <p>This polytechnic gave me comprehensive skills to work with servers,
            networking, and virtualization technologies. The Training content was
            developed in cooperation with regional companies and government agencies
            to provide the skill and professionalism needed.</p>`
    },{
        commands: ['kyh'],
        response: `
            <p>Web development with a focus on responsive design and mobile platforms.
            As a Front End Developer we learned web design as well as developing websites for different platforms and devices.
            Among other things we learn HTML, CSS, JavaScript, PHP, C#, and finally dot Net Development.</p>`
    },{
        commands: ['nipo'],
        response: `
            <p>After my education i transfered to Amsterdam to work for NIPO a major worldwide Market
            Research and Enterprise Feedback Management software provider.
            The company provides industrial Windows-based software for all aspects of market research.
            This encompasses questionnaire design, data collection, tabulations, overviews of fieldwork
            progress and costs along with advanced data analysis. This was during the move to web 4.0 and
            I was in charge of developing a mockup for a new front-end system in the dot Net environment.</p>`
    },{
        commands: ['wimse'],
        response: `
            <p>Wimse is a complete and creative web agency located in Gothenburg.
            We help companies to increase profitability by improving and developing business models.
            Through creative thinking, innovative ideas and technical solutions,
            together we can improve your business. We create a platform that appeals to and strengthens
            your profile and presence on the Internet.</p>`
    },{
        commands: ['quit','exit'],
        response: "By for now, please visit us again!"
    },{
        commands: ['hello','hi','hej'],
        response: 'hello, how are you?'
    },{
        commands: ['good','fine'],
        response: 'happy to hear that'
    },{
        commands: ['bad','awefull','shit'],
        response: 'sorry to hear that'
    },{
        commands: ['fuck'],
        response: "That's totally uncalled for"
    }
]



module.exports = data
