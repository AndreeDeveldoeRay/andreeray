/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-03-05T21:28:47+01:00
* @Email:  me@andreeray.se
* @Filename: actions.jsx
* @Last modified by:   DevelDoe
* @Last modified time: 2017-03-06T00:45:41+01:00
*/



var API = require('API')

export var startRespFetch = () => {
    return {
        type: 'START_RESP_FETCH'
    }
}
export var completeRespFetch = (response,location) =>
{
    return {
        type: 'COMPLETE_RESP_FETCH',
        response: response,
        location
    }
}
export var fetchResponse = (cmd) =>
{
    return (dispatch, getState) =>
    {
        dispatch(startRespFetch())
        API.getResponse(cmd).then(function(response){
            dispatch(completeRespFetch(response,cmd)) // if you get an successfull response then the cmd is an actuall location
        }, function (response) {
            dispatch(completeRespFetch(response))
        })
    }
}
