angular.module('dateEscape', [])
	.controller('mainController', mainController)

mainController.inject["$http"];
function mainController($http) {

		var main = this;
		console.log("I'm working");

		main.saveMessage = function() {
			$('#myModal').modal('hide');


		  var numberfied = Number(main.time);
      //console.log(main.time)
      //console.log(numberfied)
      var postData = {
      first_name:1,
      last_name:2,
      number: main.phone,
      message: main.message,
      timeToSend: numberfied,
      };
      var json = angular.toJson(postData);
      $http.post('/process_post', json);
		}

		main.preset1 = function(){
			main.presetMessage = $("#preset1").html()
			console.log(main.presetMessage);

		}
		main.preset2 = function(){
			main.presetMessage = $("#preset2").html()
			console.log(main.presetMessage);

		}
		main.preset3 = function(){
			main.presetMessage = $("#preset3").html()
			console.log(main.presetMessage);

		}



	}
