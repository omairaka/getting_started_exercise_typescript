"use strict";
var users = ["Omair ", "Shahzain", "Rahul", "Admin", "Afsar"];
for (var i = 0; i < users.length; i++) {
    if (users[i] == "Admin") {
        console.log(`Hello ${users[i]} would you like to see a status report?\n`);
    }
    else
        console.log(`Hello ${users[i]} thank you for logging in again \n`);
}
console.log("Array Emptied");
var users = [];
if (users.length <= 0) {
    console.log("We need to find some users!");
}
