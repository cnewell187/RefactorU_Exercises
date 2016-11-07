module.exports = function(app) {
    app.get('/', function(req, res) {
        res.send("The Keebler Elves are coming for you...");
    })

    app.get('/theOven', function(req, res) {
        res.cookie('your_mom', 'fat(too many cookies)'); //takes two arguments, first is key second is value
        res.cookie("login", "spaceghost", {
            httpOnly: true
        }); //3rd argument is a config object, in this case it says the cookie
        // can't be access by JS

        res.send("Hot Cookies, so fresh");
    })

    app.get('/cookiesOnTheCounter', function(req, res) {
        res.cookie("freeCookie", 'its going quick!', {
            maxAge: 5000
        }); // max age is saying cookie is destroyed in 5 seconds (5000ms)
        res.send("Free Cookie Come and Eat it!");
    })

    var sessions = app.get('sessions')
    app.get('/session', function(req, res) {
        console.log("Cookies: ", req.cookies)

        //scenario one, who the fuck are you? (You aint got no cookies I want to eat! or a sesh) Lets make a sesh
        if (!req.cookies.login || !sessions[req.cookies.login]) {
            //our session object lookslike this
            //{
            //  spaceghost: {}
            // loginkey :{}
            //}
              var login = Math.random();
              sessions[login] ={
                created: Date.now()
              };
              res.cookie("login", login, {httpOnly: true});
              res.send(`<h1>Welcome to your Sesh, your account was created at ${sessions[login].created}</h1>`)
              //backticks for template literal bove
        }

        //scenario two, nice cookies, come on in!
        else{
            res.send(`<h1>Welcome to your Sesh, you have been a member since ${sessions[login].created}</h1>`)
        }


    })
}
