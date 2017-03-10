/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-02-19T10:39:34+01:00
* @Email:  me@andreeray.se
* @Filename: Api.jsx
* @Last modified by:   DevelDoe
* @Last modified time: 2017-03-05T22:07:13+01:00
*/



var fakeAPI = require('fakeAPI')

module.exports = {
    getResponse: function (cmd) {
        return new Promise(function (resolve, reject) {
            fakeAPI(cmd, function(err,msg) {
                if (err){ reject(err) }
                else { resolve(msg) }
            })
        })
    }
}
