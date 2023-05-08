const inquirer = require("inquirer");
const fs = require("fs");
// const generatehtml = require("./generateHtml");

const Manager = require("../lib/manager");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");

class GenerateEmployee {
  constructor() {
    this.managers = []; // collections of managers, engineers, interns
    this.engineers = [];
    this.interns = [];
  }
}

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
          console.log("Please enter an ID!");
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

// engineer prompts
const addEngineer = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the engineer's name?",
      validate: function (input) {
        if (input.length < 1) {
          console.log("Please enter a name! ");
          return false;
        }
        return true;
      },
    },
    {
      type: "input",
      name: "id",
      message: "Please enter the engineer's ID.",
      validate: function (input) {
        if (input.length < 1) {
          console.log("Please enter an ID!");
          return false;
        } else if (!isNum(input)) {
          console.log("Please enter an ID! ");
          return false;
        }
        return true;
      },
    },
    {
      type: "input",
      name: "email",
      message: "Please enter an email: ",
      validate: function (email) {
        if (validateEmail(email)) {
          return true;
        }
        console.log("Please enter a valid email address!");
        return false;
      },
    },
    {
      type: "input",
      name: "github",
      message: "Please enter the engineer's GitHub username.",
      validate: function (input) {
        if (input.length < 1) {
          console.log("Please enter a username.");
          return false;
        }
        return true;
      },
    },
  ]);
};

// intern promps
const addIntern = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the intern's name?",
      validate: function (input) {
        if (input.length < 1) {
          console.log("Please enter a name!");
          return false;
        }
        return true;
      },
    },
    {
      type: "input",
      name: "id",
      message: "Please enter the intern's ID.",
      validate: function (input) {
        if (input.length < 1) {
          console.log("Please enter an ID!");
          return false;
        } else if (!isNum(input)) {
          console.log("Please input correct id! ");
          return false;
        }
        return true;
      },
    },
    {
      type: "input",
      name: "email",
      message: "Please enter the intern's email.",
      validate: function (email) {
        if (validateEmail(email)) {
          return true;
        }
        console.log("Please enter an email address");
        return false;
      },
    },
    {
      type: "input",
      name: "school",
      message: "Please enter the intern's school.",
      validate: function (input) {
        if (input.length < 1) {
          console.log("Please enter a school name!");
          return false;
        }
        return true;
      },
    },
  ]);
};

// init(){
//         this.generateManager(); //Initalize app starting from generating team manager
//     }

//     generate() {
//         console.log("Generating Team Profile: ");
//         this.init();
//     }

module.exports = GenerateEmployee;
