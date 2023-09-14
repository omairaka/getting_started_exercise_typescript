"use strict";
var guest = ["Aftab Borka", "Mark Zucerberg", "Zeeshan Usmani"];
var not_attending = guest.pop();

console.log(not_attending);

guest.forEach(function (i) {
    console.log("Hi there, ".concat(i, " \n I will be really happy to see you at dinner today "));
});
console.log("\n")
var more = ["Asghar Nisar", "AQ khan"];
guest.push("Asghar Nisar", "AQ khan");
guest.forEach(function (i) {
    console.log("Hi there, ".concat(i, " \n I will be really happy to see you at dinner today "));
});