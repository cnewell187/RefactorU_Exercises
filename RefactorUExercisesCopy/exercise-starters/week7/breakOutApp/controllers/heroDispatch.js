var Hero = require('../models/heroModel.js');

//CRUD create read update delete



function createHero(req, res) {
    //possible maniuplation here if req.body doesn't match hero schema
    console.log(req.body)
    var newHeroDocument = new Hero(req.body);
    newHeroDocument.save(function(err, doc) {
        if (err) {
            console.log("The Error: " + err)
            return res.send(err)
        } else {
            console.log("A new hero has joined the Super Friends!")
            return res.send(doc)
        }
    })
}

function getHero(req, res) {
    //get One
    if (req.params.heroID) {
        Hero.findOne({
            _id: req.params.heroID
        }, function(err, heroDoc) {
            if (err) {
                return res.send(err);
            }
            res.send(heroDoc);
        });
    }

    //get Many
    else {
        Hero.find({}, function(err, heroDoc) {
            if (err) {
                return res.send(err);
            }
            res.send(heroDoc);
        });
    }

}

module.exports = {
    createHero: createHero,
    getHero: getHero
        // readHero: readHero,
        // killHero: killHero,
        // transformHero: transformHero,
};
