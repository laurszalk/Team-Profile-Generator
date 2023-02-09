// import modules
const inquirer = require("inquirer");
const fs = require("fs");
// const test = require("./lib/employee"); //won't need this here probably

// team profiles
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// link to page creation
const generateHTML = require("./src/generateHTML");

// this is just for testing
let paper = new engineer("lauren", null, "sdfsf", "github");

console.log(paper.name);
console.log(paper.github);
console.log(paper.email);

// null has to go in the new constructor as a value if we want to skip it
// or an empty string
