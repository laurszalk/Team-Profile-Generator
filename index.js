const inquirer = require("inquirer");
const fs = require("fs");
const test = require("./lib/employee"); //won't need this here probably
const engineer = require("./lib/engineer");

let paper = new engineer("lauren", null, "sdfsf", "github");

console.log(paper.name);
console.log(paper.github);
console.log(paper.email);
//null has to go in the new constructor as a value if we want to skip it
