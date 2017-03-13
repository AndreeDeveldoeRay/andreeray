/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-02-19T10:39:34+01:00
* @Email:  me@andreeray.se
* @Filename: Api.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-11T18:56:10+01:00
*/



var fakeAPI = require('fakeApi'), Promise = require('es6-promise').Promise;

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
