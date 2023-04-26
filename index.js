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

// generate markdown file from last activity for reference

// team array we are going to push to
const teamArray = [];

// start of manager prompts
const addManager = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Who is the manager of this team?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the manager's name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "Please enter the manager's ID.",
      validate: (nameInput) => {
        if (isNaN(nameInput)) {
          console.log("Please enter the manager's ID!");
          return false;
        } else {
          return true;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Please enter the manager's email.",
      validate: (email) => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        if (valid) {
          return true;
        } else {
          console.log("Please enter an email!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Please enter the manager's office number",
      validate: (nameInput) => {
        if (isNaN(nameInput)) {
          console.log("Please enter an office number!");
          return false;
        } else {
          return true;
        }
      },
    },
  ]);
};
