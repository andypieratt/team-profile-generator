//REQUIRE VARIABLES
const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officeNum) {
    super(name, id, email);
    this.officeNum = officeNum;
  }
  getOfficeNum()
}

module.exports = Manager;
