const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}
module.exports = Manager;

// let newManager = new Manager("Lee", "15", "lee@company.net", 10);
// console.log(newManager.getName());
// console.log(newManager.getRole()); // -> "Manager"
