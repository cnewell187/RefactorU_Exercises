//retrieve module, chain controller method
angular.module('formMagic')
  .controller("theWand", wandCtrl);

function wandCtrl(){
  console.log("Bippity boppity boo!");
  var wand = this;

  window.wand = wand; //attach controller to window, good for debugging, bad for production code
  wand.greeting ="Any sufficiently advanced technology is indistiguishable from magic";
  wand.spellBook = JSON.parse(window.localStorage.getItem("spells")) || [];
  
  wand.addSpell = function(){
    wand.spellBook.push(wand.newSpell);
    wand.newSpell = {};
    $('#myModal').modal('hide');
    var spells = angular.copy(wand.spellBook);
    spells.forEach(function(spell){
      delete spell.$$hashKey
    });
    window.localStorage.setItem('spells', JSON.stringify(spells));
    console.log("Haalp")
  }
}
