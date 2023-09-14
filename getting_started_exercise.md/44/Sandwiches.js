"use strict";
function makeSandwich(...items) {
    console.log("Sandwich Summary:");
    console.log("Bread");
    for (let item of items) {
        console.log(item);
    }
    console.log("Bread");
    console.log("Enjoy your sandwich!");
    console.log("-------------------------");
}
makeSandwich("Met", "Cheese");
makeSandwich("Turkey", "Lettuce", "Tomato");
makeSandwich("Chicken", "Mayonnaise", "Pickles");
