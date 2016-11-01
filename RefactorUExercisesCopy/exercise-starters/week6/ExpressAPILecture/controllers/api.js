var endpoint = 'http://kanyerest.xyz/api';
var request = require("request");

module.exports = {
    counter: function(req, res) {
        // request('${endpoint}')  <- this is the ES6 way, called template literals
        request(endpoint + '/counter', function(err, response, body) {
            res.send({
                error: err,
                response: response,
                body: body,
            });
        });
    },

    album: function(req, res) {
        request('${endpoint}/album/${req.query.album}', function(err, response, body) {
            res.send({
                error: err,
                response: response,
                body: body,
            });
        });
    },

    track: function(req, res) {
        request('${endpoint}/track/${req.query.track}', function(err, response, body) {
            res.send({
                error: err,
                response: response,
                body: body,
            });
        });
    },

}
