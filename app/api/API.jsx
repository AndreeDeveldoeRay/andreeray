/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-02-19T10:39:34+01:00
* @Email:  me@andreeray.se
* @Filename: Api.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-03-21T01:43:39+01:00
*/



var data = require('fakeApi')


module.exports = {
    getResponse: function (command, callback) {

        var response = data.find((item) => {
            var commands = item.commands
            var res = commands.find((cmd) => {
                return cmd === command
            })
            return res
        })

        if (response) callback(undefined, response.response)
        else callback('That command does not exist! To list basic commands execute <b>commands</b> (or <b>cmd</b>) in the cmd field below.')

    }
}
