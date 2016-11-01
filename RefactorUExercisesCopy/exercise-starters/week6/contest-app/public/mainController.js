var app = angular.module('contest', ['ngCookies']);
  app.controller("contestController", contestCtrl);

  // a filter for URLs to allow them to be embedded in iframes
  app.filter('trustAsResourceUrl', ['$sce', function($sce) {
return function(val) {
    return $sce.trustAsResourceUrl(val);
};
}])


contestCtrl.$inject=["$http" ,"$sce", "$cookies" ];

function contestCtrl($http, $sce, $cookies) {

    var contestCtrl = this;
    window.contestCtrl = contestCtrl;
    contestCtrl.greeting = "Submit your favorite gaming video here!"
    contestCtrl.newSubmission = {}
    contestCtrl.submissions = [];
    //contestCtrl.submissions = JSON.parse(window.localStorage.getItem("submissions")) || [];



    contestCtrl.addSubmission = function() {
      var expressionURL = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
      var regexURL = new RegExp(expressionURL);
      if($cookies.get('submitted')){
        console.log('You Already Voted!')
        alert("You already made a submission!")
        return;
      }
      else if(contestCtrl.newSubmission.url.match(regexURL)){

        contestCtrl.newSubmission.url=contestCtrl.newSubmission.url.replace("watch?v=", "embed/");
        contestCtrl.newSubmission.votes = 0;
        $('#myModal').modal('hide');
        $http.post('/api/submissions', contestCtrl.newSubmission);
        contestCtrl.newSubmission = {}
        contestCtrl.getSubmissions();
      }
      else{
          alert("Not a valid URL");
      }
    }
    contestCtrl.getSubmissions = function() {
        $http.get('/api/submissions')
            .then(function(response) {
              console.log("The response data:", response.data)
                contestCtrl.submissions = response.data;

            })
    }

    contestCtrl.removeSubmission = function(submission) {
        var removeIndex = contestCtrl.submissions.indexOf(submission);
        $http.delete('/api/submissions/' + removeIndex)
            .then(function(response) {
                contestCtrl.getSubmissions();
            })
    }

    contestCtrl.voteSubmission = function(submission) {
        var voteIndex = contestCtrl.submissions.indexOf(submission);
        //console.log("The vote index: " + voteIndex)
        //console.log(submission)
        console.log($cookies.getAll());
        if($cookies.get('voted')){
          console.log('You Already Voted!')
          alert("You already voted!")
          return;
        }
        else{
        $http.post('/api/votes/' + voteIndex, submission)
            .then(function(response) {
              contestCtrl.submissions[voteIndex]['votes'] = contestCtrl.submissions[voteIndex]['votes']+1

            })
          }

    }
    contestCtrl.getSubmissions();

}
