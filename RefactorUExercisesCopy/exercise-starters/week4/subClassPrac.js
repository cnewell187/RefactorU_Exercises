'use strict'
class Wizard {
    constructor(name, spells, level) {
        this.name = name;
        this.spells = spells;
        this.level = level;
    }

    castSpell(spellIndex){
      return this.name + " casts " + this.spells[spellIndex] + " into the darkness";
    }
};

// var Wizard = function(name, spells, level) {
//     this.name = name;
//     this.spells = spells;
//     this.level = level;
// }

var Gandolphin = new Wizard("Gandolphin", ["SplishSplash", "Free Tuna", "You shall not Splash!"], 57)

console.log(Gandolphin)
console.log(Gandolphin.castSpell(0))

class Warlock extends Wizard{
  constructor(name, spells, level, undeadCritter){
    super(name, spells, level);
    this.undeadCritter = undeadCritter;
  }
}

var Elbert = new Warlock("Elbert", ["eats meatpie", "raises dead"], 12, "The Bone Pup");

console.log(Elbert)
console.log(Elbert.castSpell(0))
