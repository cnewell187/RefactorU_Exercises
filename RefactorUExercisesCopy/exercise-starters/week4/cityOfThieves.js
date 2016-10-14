var Burglar = function(name) {
    this.name = name;
    this.dead = false;
    this.stuff = ["Dagger of +3 Agility", "Cloak of Thievin'",
        "Lockpick", "Signed Album by Thievery Corporation",
        "Sandwich", " Lots O Gold", "Abacus"
    ];
}

var Billbert = new Burglar("Billbert");
var TheDarkness = new Burglar("TheDarkness");
var MagicRabbit = new Burglar("MagicRabbit");

Burglar.prototype.stealzin = function(victim) {
    if (victim.stuff.length > 0) {
        this.stuff.push(victim.stuff.pop());
        console.log(" A NEW THIEVING HAS OCCURED!!!");
        console.log(this.name + ' now has ' + this.stuff.join(", "));
        console.log(victim.name + ' now has ' + victim.stuff.join(", "));
        console.log("OH NO!!!");
    } else {
        victim.dead = true;
        console.log(victim.name + " has died!!!");
    }
}

var cityOfThieves = [];

for (var i = 1; i < 11; i++) {
    cityOfThieves.push(new Burglar("Thief Number: " + i))
}

function randomStealzin() {
    var burglar = cityOfThieves[Math.floor(Math.random() * cityOfThieves.length)]
    var victim = cityOfThieves[Math.floor(Math.random() * cityOfThieves.length)]

    if (burglar != victim) {
        burglar.stealzin(victim)
    }
}

var thievinInteral = setInterval(function(){
  cityOfThieves = cityOfThieves.filter(function(thief){
    return !thief.dead;
  });
  if (cityOfThieves.length > 1){
    randomStealzin();
  }
  else{
    console.log(cityOfThieves[0].name + " is the top thief!")
    clearInterval(thievinInteral);
  }

}, 1);
