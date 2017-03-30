/**
 * @Author: Andreee Ray <develdoe>
 * @Date:   2017-03-19T22:14:39+01:00
 * @Email:  me@andreeray.se
 * @Filename: server.js
 * @Last modified by:   develdoe
 * @Last modified time: 2017-03-30T15:43:16+02:00
 */



const   EXPRESS = require('express'),
        APP     = EXPRESS(),
        PORT = process.env.PORT || 3001

APP.use(function(req,res,next){
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname +  req.url)
    } else {
        next()
    }
})

APP.use(EXPRESS.static('public'))

APP.listen(PORT)
console.log('Port: ' + PORT)
