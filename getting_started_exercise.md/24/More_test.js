"use strict";
var car = 'subaru';
var num1 = 2;
var num2 = "2";
var name1 = "Omair";
var name2 = 'Za';
var ar = [58, 96, 2, 1, 3, 55, 7];
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
console.log("Is num1 === 'num2'? I predict True.");
console.log(num1 == Number(num2));
console.log("Is num1 === 'num2'? I predict True.");
console.log(num1 === Number(num2));
console.log("Is num1 === 'num2'? I predict False.");
console.log(name1 === (name2));
console.log(58 in ar); // I predict False
console.log(ar.includes(55)); // I predict False
console.log(1 || 95 in ar); // I predict True
console.log(1 && 95 in ar); // I predict False
