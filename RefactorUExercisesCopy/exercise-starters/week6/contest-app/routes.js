
var submissionsAPI = require("./controllers/submissionsAPI.js")

module.exports = function(app) {

  //submissionsAPI.findSubmissions();

    app.get('/', function(req, res) {
      res.sendFile(__dirname + "/public/" + "home.html");
    })

    app.post('/api/submissions', submissionsAPI.newSubmission);

    app.get('/api/submissions', function(req, res) {
        console.log("Cookies from api submissions:  ", req.cookies);
        submissionsAPI.findSubmissions({}, req, res);

    });

    app.post('/api/votes/:voteIndex', submissionsAPI.newVote);

    app.delete('/api/submissions/:submissionIndex', submissionsAPI.removeSubmission);
}
