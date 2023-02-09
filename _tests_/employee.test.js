const Employee = require("../lib/employee");

describe("Employee", () => {
  it("Sets the employee name", () => {

    // We initailize an object for test (SETUP)
    const cName = "Lauren";
    const creature = new Employee(cName);

    expect(creature.name).toEqual(cName);
  });
  
    it('Sets the employee ID', () =>{
          const id = 5;
          const employee = new Employee("", id);
        
        })

    it("Retrieves the employee name", () => {

    // WE initailize an object for test (SETUP)
    const cName = "Lauren";
    const creature = new Employee(cName);

    expect(creature.getName()).toEqual(cName);
    });
});
