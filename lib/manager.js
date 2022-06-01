//REQUIRE VARIABLES
const { moduleExpression } = require("@babel/types");
const inquirer = require("inquirer");

class Manager {
  constructor(name, id, email, officeNum) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNum = officeNum;
  }

  getManagerName() {
    inquirer.prompt([
      {
        type: "input",
        message: "What is the team manager's name?",
        name: "managerName",
      },
    ]);
  }

  getManagerId() {
    inquirer.prompt([
      {
        type: "input",
        message: "What is this employee's ID?",
        name: "managerId",
      },
    ]);
  }

  getManagerEmail() {
    inquirer.prompt([
      {
        type: "input",
        message: "What is this employee's email address?",
        name: "managerEmail",
      },
    ]);
  }

  getOfficeNum() {
    inquirer.prompt([
      {
        type: "input",
        message: "What is the manager's office number?",
        name: "officeNum",
      },
    ]);
  }
}

module.exports = Manager;
