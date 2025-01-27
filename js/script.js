"use strict";

console.log(`Birthday`);
let birthYear = prompt("When is your birthYear?");

birthYear = parseInt(birthYear);

let currentYear = new Date().getFullYear();

let age = currentYear - birthYear;

console.log(`You are ${age} years old.`);
