class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }


  getName() {
    return this.name;
  }

  getRole() {
    return "Employee";
  }
}

console.log(this)  // the DOM window

let objectInstance = new Employee("Sarah", "12", "sarah@ompany.net");
let name1 = objectInstance.name;
let name = objectInstance.getName();
let objectInstance2 = new Employee("Sarah", "12", "sarah@ompany.net");
//console.log(objectInstance === objectInstance2)

const inquirer = require("inquirer")
inquirer.propmt()

// Object Literal
let obj = {
    name: "Bill",
    id: "123",
    email: "bill@company.net",

}

// ES5 constructor function syntax
/*function Employee(name, id, email) {
    this.name = name;
    this.id = id;
}
*/

// getName() {
//     return this.name;
// };

// getId();

// getEmail();

// getRole() {
//     return 'Employee'
// }
module.exports = Employee;
