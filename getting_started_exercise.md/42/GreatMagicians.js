"use strict";
const magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
function makegreat(magicians) {
    const greatMagicians = [];
    for (let magician of magicians) {
        greatMagicians.push(`${magician} the Great`);
    }
    return greatMagicians;
}
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
console.log(makegreat(magicians));
