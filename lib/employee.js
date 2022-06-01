//Require Variables
const inquirer = require("inquirer");

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    inquirer.prompt([
      {
        type: "input",
        message: "What is the employee's name?",
        name: "name",
      },
    ]);
  }

  getId() {
    inquirer.prompt([
      {
        type: "input",
        message: "What is this employee's ID?",
        name: "id",
      },
    ]);
  }

  getEmail() {
    inquirer.prompt([
      {
        type: "input",
        message: "What is the employee's email address?",
        type: "email",
      },
    ]);
  }
}

module.exports = Employee;
