function Wizard(wizardInfo) {
    this.name = wizardInfo.name;
    this.spells = wizardInfo.spells;
    this.level = wizardInfo.level;

}


Wizard.prototype.castSpell = function(spellIndex) {
    return this.name + " casts " + this.spells[spellIndex];
}



// var Gandolphin = new Wizard("Gandolphin", ["SplishSplash", "Free Tuna", "You shall not Splash!"], 57)
// console.log(Gandolphin)
// console.log(Gandolphin.castSpell(2))

function Warlock(warclockInfo) {
    Wizard.call(this, warclockInfo);
    this.undeadCritter = warclockInfo.undeadCritter;
    this.method1 = function() {
        console.log("Method 1")
    }
}



Warlock.prototype = Object.create(Wizard.prototype);
Warlock.prototype.constructor = Warlock;
//Warlock.prototype.castSpell = function(spellIndex){
//   return this.name + " casts a really big" + this.spells[spellIndex];
// }
var ElbertInfo = {
    name: "Elbert",
    spells: ["eats meatpie", "raises dead"],
    level: 12,
    undeadCritter: "The Bone Pup",
}


// var Elbert = new Warlock("Elbert", ["eats meatpie", "raises dead"], 12, "The Bone Pup");
var Elbert = new Warlock(ElbertInfo)
console.log(Elbert)
console.log(Elbert.castSpell(0))
console.log(Elbert.undeadCritter)
Elbert.method1()
