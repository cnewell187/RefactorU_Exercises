
function foodItem(name, calories, vegan, glutenFree, citrusFree) {
    this.name = name;
    this.calories = calories;
    this.vegan = vegan;
    this.glutenFree = glutenFree;
    this.citrusFree = citrusFree;
    this.stringify = function() {
        return ("Food name: " + this.name +
            "\nCalories: " + this.calories +
            "\nVegan: " + this.vegan +
            "\nGluten Free: " + this.glutenFree +
            "\nCitrus Free: " + this.citrusFree)

    };

};

function drink(name, description, price, ingredients) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;
    this.stringify = function() {
        return ("Drink name: " + this.name +
            "\nDescription: " + this.description +
            "\nPrice: " + this.price +
            "\nIngredients: " + this.ingredients.join(", "));
        };
};

function plate(name, description, price, ingredients) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;
    this.isVegan = function(){
        var vegan = true;
      for(var i = 0; i<ingredients.length; i++){
        if(ingredients[i].vegan===false){
          vegan = false;
        }
      }
      return vegan;
    };
    this.isGlutenFree= function(){
        var glutenFree = true;
      for(var i = 0; i<ingredients.length; i++){
        if(ingredients[i].glutenFree===false){
          glutenFree  = false;
        }
      }
      return glutenFree ;
    };
    this.isCitrusFree = function(){
        var citrusFree = true;
      for(var i = 0; i<ingredients.length; i++){
        if(ingredients[i].citrusFree===false){
          citrusFree = false;
        }
      }
      return citrusFree;
    };
    this.stringify = function() {
      var ingredientString = "";
      for(var i = 0; i<ingredients.length; i++){
        if(i===(ingredients.length -1)){
          var ingredientString = ingredientString + this.ingredients[i].name + ".";
        }
        else{
          var ingredientString = ingredientString + this.ingredients[i].name + ", "
        }

      };
        return ("Plate name: " + this.name +
            "\nDescription: " + this.description +
            "\nPrice: $" + this.price.toFixed(2) +
            "\nIngredients: " +  ingredientString +"\n");

        };
};

function order(plates){
  this.plates = plates;
  this.stringify = function(){
    var orderFinal = [];
    for(var i = 0; i<plates.length; i++){
      orderFinal.push(plates[i].stringify())
    }
    return orderFinal.join("\n");
};
};
function menu(plates) {
  this.plates = plates;
  this.stringify = function(){
    var menuFinal = [];
    for(var i = 0; i<plates.length; i++){
      menuFinal.push(plates[i].stringify())
    }
    return menuFinal.join("\n");
  }
};

function restaraunt(name, description, menu){
  this.name = name;
  this.description = description;
  this.menu = menu;
  this.stringify = function(){
    return ("Name: " +this.name + "\nDescription: " + this.description + "\n" +
          "Menu Items Include: \n\n" +menu.stringify());
  }

};

function customer(dietaryPreference){
  this.dietaryPreference = dietaryPreference;
};


var cheddar = new foodItem("Yummy Cheddar", 350, false, true, true);
var cookieCake = new foodItem("Cookie Cake", 700, false, false, true);
var orange = new foodItem("Orange", 150, true, true, false);
// the Infamous Orange Cheese Cookie Cake
var orangeCheeseCookieCake = new plate("Orange Cheese Cookie Cake", "Weird as fuck", 4.50, [cheddar, cookieCake, orange]);

var guacamole = new foodItem("Guacamole", 400, true, true, false);
var tortillaChips = new foodItem("Tortilla Chips", 300, true, true, true);
var tortilla = new foodItem("Tortilla", 200, true, true, true);
var riceBeans = new foodItem("Rice and Beans", 300, true, true, true);
var salsa = new foodItem("Salsa", 50, true, true, false);
// guac plate

var guacPlate = new plate("Guacamole Plate" , "Chips and Guac Yo", 4.50 , [guacamole, tortillaChips]);
var burritoPlate = new plate("Burrito Plate", "A basic burrito", 7.50, [tortilla, riceBeans, salsa]);

//menu
var menudo = new menu([guacPlate, orangeCheeseCookieCake, burritoPlate]);
var rickies = new restaraunt("Rickies", "Cheap Ass Food", menudo);

console.log(rickies.stringify());
