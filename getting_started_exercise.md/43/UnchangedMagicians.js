"use strict";
var magicianss = ["Nana PAtekar", "Bombal", "Salman", "Caller"];
function make_great(magicianss) {
    const greatMagicians = [];
    for (let magician of magicianss) {
        greatMagicians.push(`${magician} the Great`);
    }
    return greatMagicians;
}
function showMagicians(magicianss) {
    for (let magician of magicianss) {
        console.log(magician);
    }
}
const originalMagicians = [...magicianss];
const greatMagicians = make_great([...magicianss]);
console.log("Original Magicians:");
showMagicians(originalMagicians);
console.log("Great Magicians:");
showMagicians(greatMagicians);
