var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//serves static files directly
app.use(express.static('public'));

// Create application/x-www-form-urlencoded parser
//var urlencodedParser = bodyParser.urlencoded({ extended: false })



app.use(bodyParser.json());


//sends a TEXT!!!!
function twilling(req) {

    // Load the twilio module
    var twilio = require('twilio');

    // Create a new REST API client to make authenticated requests against the
    // twilio back end
    var client = new twilio.RestClient('AC67a93bf06deff43cde414d7d80f137f7', 'a74e02558f703ea6cdede972ba0305e9');
    //
    // // Pass in parameters to the REST API using an object literal notation. The
    // // REST client will handle authentication and response serialzation for you.
    client.sms.messages.create({
        to: "+" + req.body.number,
        from: '+18586098104 ',
        body: req.body.message
    }, function(error, message) {
        // The HTTP request to Twilio will run asynchronously. This callback
        // function will be called when a response is received from Twilio
        // The "error" variable will contain error information, if any.
        // If the request was successful, this value will be "falsy"
        if (!error) {
            // The second argument to the callback will contain the information
            // sent back by Twilio for the request. In this case, it is the
            // information about the text messsage you just sent:
            console.log('Success! The SID for this SMS message is:');
            console.log(message.sid);

            console.log('Message sent on:');
            console.log(message.dateCreated);
        } else {
            console.log('Oops! There was an error.');
        }
    });



}

app.post('/process_post', function(req, res) {

    var delayTime = req.body.timeToSend - Date.now();


    //runs the twilling function
    setTimeout(twilling, 10, req);
    // Prepare output in JSON format
    response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        number: req.body.number,
        message: req.body.message,
        timeToSend: req.body.timeToSend,
    };
    console.log(req.body.message)
    console.log(response);
    res.end(JSON.stringify(response)); // check this line out more
})


var server = app.listen(8081, function() {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})
