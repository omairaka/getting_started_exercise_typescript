"use strict";
var guest = ["Aftab Borka", "Mark Zucerberg", "Zeeshan Usmani"];
var not_attending = guest.pop();
console.log(not_attending);

guest.forEach(i => {
    console.log(`Hi there, ${i} \n I will be really happy to see you at dinner today `);
});
